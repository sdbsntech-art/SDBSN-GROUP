import type { VercelRequest, VercelResponse } from '@vercel/node';
import { createClient } from '@supabase/supabase-js';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Authorization check
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'Accès non autorisé.' });
  }

  const token = authHeader.split(' ')[1];
  const supabaseUrl = process.env.SUPABASE_URL || process.env.VITE_SUPABASE_URL;
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!supabaseUrl || !supabaseServiceKey) {
    return res.status(503).json({ error: 'Service Supabase non configuré sur le serveur.' });
  }

  const supabase = createClient(supabaseUrl, supabaseServiceKey);

  // Verify caller's JWT token
  const { data: userData, error: userError } = await supabase.auth.getUser(token);
  if (userError || !userData.user) {
    return res.status(401).json({ error: 'Session invalide ou expirée.' });
  }

  try {
    const { data: requests, error } = await supabase
      .from('contact_requests')
      .select('status, service_category, created_at');

    if (error) {
      return res.status(500).json({ error: error.message });
    }

    const total = requests.length;
    const newRequests = requests.filter((r) => r.status === 'New').length;
    const inProgress = requests.filter((r) => r.status === 'In Progress' || r.status === 'In Review').length;
    const completed = requests.filter((r) => r.status === 'Completed').length;

    return res.status(200).json({
      total,
      newRequests,
      inProgress,
      completed,
    });
  } catch (err: any) {
    return res.status(500).json({ error: err.message });
  }
}

