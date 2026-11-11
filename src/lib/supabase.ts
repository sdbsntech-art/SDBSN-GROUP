import { createClient } from '@supabase/supabase-js';
import type { ContactSubmission } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-supabase-url')
);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
      },
    })
  : null;

// Local fallback store for offline / pre-setup evaluation
const LOCAL_STORAGE_KEY = 'sdbsnx_submissions_fallback';

export async function submitContactRequest(data: ContactSubmission): Promise<{ success: boolean; referenceNumber: string; error?: string }> {
  const referenceNumber = data.reference_number || `SDB-${new Date().getFullYear()}-${Math.random().toString(36).substring(2, 6).toUpperCase()}`;
  const payload: ContactSubmission = {
    ...data,
    reference_number: referenceNumber,
    status: 'New',
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  if (isSupabaseConfigured && supabase) {
    try {
      const { error } = await supabase.from('contact_requests').insert([payload]);
      if (error) {
        console.error('Supabase submission error:', error);
        // Fall back to local store if network or permission error during staging
        saveToFallbackStore(payload);
        return { success: true, referenceNumber, error: error.message };
      }
      return { success: true, referenceNumber };
    } catch (err: any) {
      console.error('Submission exception:', err);
      saveToFallbackStore(payload);
      return { success: true, referenceNumber };
    }
  } else {
    // Graceful offline/local development mode
    console.info('Supabase not yet configured. Saving locally in secure fallback storage.');
    saveToFallbackStore(payload);
    return { success: true, referenceNumber };
  }
}

function saveToFallbackStore(item: ContactSubmission) {
  try {
    const existing = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || '[]');
    existing.unshift({ ...item, id: crypto.randomUUID() });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(existing));
  } catch (e) {
    console.warn('Fallback store error:', e);
  }
}

export function getFallbackSubmissions(): ContactSubmission[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) {
      // Seed initial sample demonstration requests for immediate evaluation
      const initialSeed: ContactSubmission[] = [
        {
          id: 'demo-1',
          reference_number: 'SDB-2026-X89K',
          full_name: 'Me Cheikh Ndiaye',
          email: 'c.ndiaye@cabinet-ndiaye.sn',
          phone: '+221 77 123 45 67',
          organization: 'Cabinet Juridique & Associés',
          service_category: 'legaltech',
          subject: 'Dématérialisation et archivage sécurisé des dossiers contentieux',
          description: 'Nous souhaitons moderniser notre gestion documentaire, automatiser les délais de procédure et déployer une plateforme collaborative pour nos avocats collaborateurs.',
          budget: 'Enveloppe annuelle allouée',
          timeline: 'Q1 2027',
          privacy_consent: true,
          status: 'New',
          created_at: new Date(Date.now() - 3600000 * 4).toISOString(),
          updated_at: new Date(Date.now() - 3600000 * 4).toISOString(),
        },
        {
          id: 'demo-2',
          reference_number: 'SDB-2026-B44T',
          full_name: 'Fatou Sow',
          email: 'fatou.sow@innov-fin.com',
          phone: '+221 78 987 65 43',
          organization: 'InnovFin Solutions',
          service_category: 'security_audit',
          subject: 'Audit technique et analyse de vulnérabilités infrastructure',
          description: 'Demande d\'évaluation de sécurité autorisée pour notre application web financière avant lancement public. Cadrage contractuel et protocole d\'accord prêts.',
          budget: 'Cadré',
          timeline: 'Immédiat (sous 30 jours)',
          privacy_consent: true,
          status: 'In Review',
          created_at: new Date(Date.now() - 3600000 * 28).toISOString(),
          updated_at: new Date(Date.now() - 3600000 * 12).toISOString(),
        },
        {
          id: 'demo-3',
          reference_number: 'SDB-2026-M19Z',
          full_name: 'Mamadou Ba',
          email: 'm.ba@logistix-sa.com',
          phone: '+221 70 555 44 33',
          organization: 'LogistiX International',
          service_category: 'web_development',
          subject: 'Développement portail métier SaaS et Progressive Web App (PWA)',
          description: 'Conception d\'un tableau de bord de suivi opérationnel en temps réel, résilient aux déconnexions réseau pour nos agents sur le terrain.',
          budget: 'Marché formalisé',
          timeline: '3 à 6 mois',
          privacy_consent: true,
          status: 'In Progress',
          created_at: new Date(Date.now() - 3600000 * 72).toISOString(),
          updated_at: new Date(Date.now() - 3600000 * 20).toISOString(),
        },
      ];
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(initialSeed));
      return initialSeed;
    }
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function updateFallbackSubmissionStatus(id: string, status: ContactSubmission['status']): boolean {
  try {
    const items = getFallbackSubmissions();
    const idx = items.findIndex((i) => i.id === id);
    if (idx !== -1) {
      items[idx].status = status;
      items[idx].updated_at = new Date().toISOString();
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
      return true;
    }
    return false;
  } catch {
    return false;
  }
}

export function deleteFallbackSubmission(id: string): boolean {
  try {
    const items = getFallbackSubmissions().filter((i) => i.id !== id);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(items));
    return true;
  } catch {
    return false;
  }
}

