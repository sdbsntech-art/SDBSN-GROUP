import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ShieldAlert, ArrowRight, ShieldCheck, Database, Info } from 'lucide-react';
import { BackButton } from '../../components/ui/BackButton';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';

const DEFAULT_ADMIN_EMAIL = 'sdbsntech@gmail.com';

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState(DEFAULT_ADMIN_EMAIL);
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      const cleanEmail = email.trim().toLowerCase();

      // 1. Authentification directe via Supabase si configuré
      if (isSupabaseConfigured()) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: cleanEmail,
          password: password,
        });

        if (error) {
          if (error.message.includes('Invalid login credentials')) {
            setErrorMessage('Identifiants incorrects. Vérifiez votre mot de passe configuré dans Supabase.');
          } else if (error.message.includes('Email not confirmed')) {
            setErrorMessage('Votre adresse email n\'a pas encore été confirmée dans Supabase. Validez-la ou désactivez "Confirm email" dans le tableau de bord Supabase.');
          } else {
            setErrorMessage(`Erreur Supabase : ${error.message}`);
          }
          setLoading(false);
          return;
        }

        if (data.session) {
          // Stockage du token de session pour compatibilité immédiate
          localStorage.setItem(
            'sdbsnx_admin_token',
            JSON.stringify({
              email: cleanEmail,
              userId: data.user?.id,
              loginAt: Date.now(),
              provider: 'supabase',
            })
          );
          navigate('/admin');
          return;
        }
      } else {
        // 2. Si les clés Supabase ne sont pas encore renseignées dans .env
        setErrorMessage(
          'Les clés VITE_SUPABASE_URL et VITE_SUPABASE_ANON_KEY ne sont pas encore configurées dans votre fichier .env. Veuillez ajouter vos clés Supabase pour activer la connexion.'
        );
      }
    } catch (err: any) {
      setErrorMessage(err?.message || 'Une erreur inattendue est survenue lors de l\'authentification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[85vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative bg-[#0B2B2A] text-[#F3E3C3]">
      <div className="max-w-md w-full space-y-8">
        
        <BackButton to="/" label="Retour au site public" />

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-[#123D3A] border border-[#10B981]/30 text-[#10B981] flex items-center justify-center mx-auto shadow-xl">
            <Lock className="w-7 h-7" />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-[#F2B134] font-bold block">
            ACCÈS RESTREINT • AUTHENTIFICATION SUPABASE
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-[#F3E3C3] font-display">
            Portail d&apos;Administration
          </h1>
          <p className="text-xs text-[#F3E3C3]/70">
            Console sécurisée pour la gestion et le suivi des requêtes d&apos;Alkeb.lab.
          </p>
        </div>

        {/* Login Box */}
        <div className="p-8 rounded-3xl bg-[#123D3A]/90 border border-[#10B981]/30 shadow-2xl space-y-6 backdrop-blur-md">
          
          {/* Notification statut Supabase */}
          {isSupabaseConfigured() ? (
            <div className="p-3.5 rounded-xl bg-[#0B2B2A] border border-[#10B981]/40 text-xs text-[#F3E3C3] flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Database className="w-4 h-4 text-[#10B981]" />
                <span className="font-semibold text-xs">Supabase Connecté</span>
              </div>
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
            </div>
          ) : (
            <div className="p-3.5 rounded-xl bg-amber-950/40 border border-amber-600/60 text-xs text-amber-200 space-y-2">
              <div className="flex items-center space-x-2 font-bold text-amber-300">
                <Info className="w-4 h-4 flex-shrink-0" />
                <span>Configuration Supabase requise</span>
              </div>
              <p className="text-[11px] text-amber-200/90 leading-relaxed">
                Renseignez <code className="bg-black/30 px-1 py-0.5 rounded text-white font-mono">VITE_SUPABASE_URL</code> et <code className="bg-black/30 px-1 py-0.5 rounded text-white font-mono">VITE_SUPABASE_ANON_KEY</code> dans votre fichier <code className="bg-black/30 px-1 py-0.5 rounded text-white font-mono">.env</code>.
              </p>
            </div>
          )}

          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-950/50 border border-red-700/80 text-xs text-red-200 flex items-start space-x-2">
              <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed">{errorMessage}</span>
            </div>
          )}

          <div className="p-3.5 rounded-xl bg-[#0B2B2A] border border-white/10 text-[11px] text-[#F3E3C3]/75 space-y-1">
            <div className="flex items-center space-x-1.5 text-[#10B981] font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Compte Administrateur Officiel</span>
            </div>
            <p>
              Connectez-vous avec votre adresse officielle :{' '}
              <code className="text-[#F2B134] bg-white/5 border border-white/10 px-1.5 py-0.5 rounded font-mono font-bold">
                sdbsntech@gmail.com
              </code>
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#F3E3C3] mb-1.5">
                Courriel Administrateur (Supabase Auth)
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-[#F3E3C3]/40 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="sdbsntech@gmail.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B2B2A] border border-white/15 text-[#F3E3C3] placeholder-white/30 text-sm focus:outline-none focus:border-[#10B981] transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#F3E3C3] mb-1.5">
                Mot de passe défini dans Supabase
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-[#F3E3C3]/40 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0B2B2A] border border-white/15 text-[#F3E3C3] placeholder-white/30 text-sm focus:outline-none focus:border-[#10B981] transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 rounded-xl font-bold text-[#0B2B2A] bg-[#10B981] hover:bg-[#059669] hover:text-white disabled:opacity-50 transition-all shadow-md flex items-center justify-center space-x-2 text-xs uppercase tracking-wider cursor-pointer focus-visible:ring-2 focus-visible:ring-[#F2B134]"
            >
              {loading ? (
                <span>Vérification auprès de Supabase...</span>
              ) : (
                <>
                  <span>Connexion avec Supabase</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="text-center pt-2 border-t border-white/10">
            <p className="text-[11px] text-[#F3E3C3]/60">
              Chiffrement TLS 1.3 • Supabase GoTrue Authentication
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
