import { createClient } from '@supabase/supabase-js';

// Configuration Supabase depuis les variables d'environnement Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = (): boolean => {
  return Boolean(
    supabaseUrl &&
    supabaseAnonKey &&
    supabaseUrl.startsWith('https://') &&
    !supabaseUrl.includes('votre-projet')
  );
};

// Initialisation du client Supabase
// Si les identifiants ne sont pas encore renseignés dans .env, on initialise avec des fallbacks
// pour éviter un crash au démarrage de l'application tout en alertant l'administrateur.
export const supabase = createClient(
  isSupabaseConfigured() ? supabaseUrl : 'https://placeholder.supabase.co',
  isSupabaseConfigured() ? supabaseAnonKey : 'placeholder-anon-key',
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  }
);
