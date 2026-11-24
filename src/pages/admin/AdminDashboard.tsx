import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Inbox, LogOut } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';

export const AdminDashboardPage: React.FC = () => {
  const [adminEmail, setAdminEmail] = useState('');
  const [authError, setAuthError] = useState<string | null>(null);
  const [logoutError, setLogoutError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loadAdmin = async () => {
      try {
        if (!isSupabaseConfigured()) {
          throw new Error('Supabase n’est pas configuré.');
        }

        const { data, error } = await supabase.auth.getUser();
        if (error) throw error;
        if (data.user?.email) setAdminEmail(data.user.email);
      } catch (error) {
        console.error('Unable to load the authenticated admin user:', error);
        setAuthError('Impossible de récupérer le compte administrateur. Veuillez vous reconnecter.');
      }
    };

    void loadAdmin();
  }, []);

  const handleLogout = async () => {
    setLogoutError(null);
    try {
      if (isSupabaseConfigured()) {
        const { error } = await supabase.auth.signOut();
        if (error) throw error;
      }
      navigate('/admin/login');
    } catch (error) {
      console.error('Unable to sign out the admin user:', error);
      setLogoutError('La déconnexion a échoué. Veuillez réessayer.');
    }
  };

  return (
    <div className="min-h-[70vh] bg-[#0B1B3D] text-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <header className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
              Alkeb.lab — Console d’administration
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display mt-2">
              Espace administrateur
            </h1>
            <p className="text-xs text-white/60 mt-2">
              Connecté en tant que <span className="text-emerald-400 font-mono">{adminEmail || '...'}</span>
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/"
              className="px-3.5 py-2 rounded-xl text-xs font-semibold text-white/80 hover:text-emerald-400 bg-white/5 hover:bg-white/10 border border-white/10 transition-colors"
            >
              Site public
            </Link>
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-red-300 hover:text-red-100 bg-red-950/40 hover:bg-red-900/60 border border-red-800 transition-colors flex items-center gap-1.5"
            >
              <LogOut className="w-3.5 h-3.5" />
              Déconnexion
            </button>
          </div>
        </header>

        {(authError || logoutError) && (
          <p role="alert" className="p-4 rounded-xl bg-red-950/50 border border-red-700/80 text-sm text-red-200">
            {authError || logoutError}
          </p>
        )}

        <section className="p-6 sm:p-8 rounded-2xl bg-white/5 border border-white/10 space-y-4">
          <div className="flex items-center gap-3 text-emerald-400">
            <Inbox className="w-5 h-5" />
            <h2 className="font-bold">Suivi des demandes</h2>
          </div>
          <p className="text-sm text-white/70 leading-relaxed">
            Les demandes de contact sont transmises à Web3Forms. Aucune copie contenant des données personnelles n’est conservée dans le stockage local de ce navigateur. Consultez votre espace Web3Forms pour les traiter.
          </p>
        </section>
      </div>
    </div>
  );
};
