import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';
import { sendWhatsAppNotification } from './notifications/whatsapp';

// Anti-spam in-memory rate limiting map for basic protection
const requestIps = new Map<string, number>();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Enforce method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Méthode non autorisée. Utilisez POST.' });
  }

  // Security headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');

  try {
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const lastRequest = requestIps.get(clientIp);

    // Rate limit: 1 request every 5 seconds per IP
    if (lastRequest && now - lastRequest < 5000) {
      return res.status(429).json({ error: 'Trop de requêtes. Veuillez patienter un instant.' });
    }
    requestIps.set(clientIp, now);

    const {
      full_name,
      email,
      phone,
      organization,
      service_category,
      subject,
      description,
      budget,
      timeline,
      privacy_consent,
      honeypot, // Spam honeypot field
    } = req.body;

    // Honeypot check: Bots fill this hidden input
    if (honeypot) {
      // Fake success for bots
      return res.status(200).json({ success: true, reference: 'SDB-PROCESSED' });
    }

    // Server-side validation
    if (!full_name || typeof full_name !== 'string' || full_name.trim().length < 2) {
      return res.status(400).json({ error: 'Nom complet invalide ou manquant (minimum 2 caractères).' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return res.status(400).json({ error: 'Adresse e-mail invalide.' });
    }

    if (!description || typeof description !== 'string' || description.trim().length < 10) {
      return res.status(400).json({ error: 'Veuillez décrire votre besoin (minimum 10 caractères).' });
    }

    if (!privacy_consent) {
      return res.status(400).json({ error: 'Le consentement à la politique de confidentialité est obligatoire.' });
    }

    // Generate reference number
    const year = new Date().getFullYear();
    const randomHex = Math.random().toString(36).substring(2, 6).toUpperCase();
    const reference_number = `SDB-${year}-${randomHex}`;

    // Initialize Supabase if environment variables are present
    const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
    const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.VITE_SUPABASE_ANON_KEY;

    let savedInDb = false;

    if (supabaseUrl && supabaseServiceKey) {
      const supabase = createClient(supabaseUrl, supabaseServiceKey);
      const { error: dbError } = await supabase.from('contact_requests').insert([
        {
          reference_number,
          full_name: full_name.trim(),
          email: email.trim().toLowerCase(),
          phone: phone ? String(phone).trim() : null,
          organization: organization ? String(organization).trim() : null,
          service_category: service_category || 'other',
          subject: subject ? String(subject).trim() : 'Demande générale',
          description: description.trim(),
          budget: budget ? String(budget).trim() : null,
          timeline: timeline ? String(timeline).trim() : null,
          privacy_consent: Boolean(privacy_consent),
          status: 'New',
        },
      ]);

      if (dbError) {
        console.error('Supabase insert error in api/contact:', dbError);
      } else {
        savedInDb = true;
      }
    }

    // Trigger WhatsApp notification asynchronously (does not block client response)
    sendWhatsAppNotification({
      referenceNumber: reference_number,
      fullName: full_name,
      organization,
      serviceCategory: service_category || 'Général',
      subject: subject || 'Nouveau contact',
    }).catch((err) => console.warn('WhatsApp background notification error:', err));

    return res.status(200).json({
      success: true,
      reference_number,
      saved_in_db: savedInDb,
      message: 'Votre demande a été enregistrée avec succès. Notre équipe vous répondra dans les plus brefs délais.',
    });
  } catch (error: any) {
    console.error('API Contact Handler Error:', error);
    return res.status(500).json({ error: 'Une erreur interne est survenue. Veuillez réessayer plus tard.' });
  }
}

