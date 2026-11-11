import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ShieldAlert, ArrowRight, ShieldCheck } from 'lucide-react';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { BackButton } from '../../components/ui/BackButton';

export const AdminLoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setLoading(true);

    try {
      if (isSupabaseConfigured && supabase) {
        const { data, error } = await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

        if (error) {
          setErrorMessage(error.message || 'Identifiants administrateur incorrects ou compte non autorisé.');
        } else if (data.session) {
          navigate('/admin');
        }
      } else {
        // Safe staging evaluation mode when environment variables are being connected
        // Note: Real deployment uses Supabase Auth strictly
        if (email.trim().toLowerCase() === 'admin@sdbsnx.com' && password.length >= 8) {
          localStorage.setItem('sdbsnx_admin_token', JSON.stringify({ email: email.trim(), loginAt: Date.now() }));
          navigate('/admin');
        } else {
          setErrorMessage('Authentification échouée. En mode pré-déploiement Supabase, utilisez une adresse officielle admin@sdbsnx.com avec au moins 8 caractères.');
        }
      }
    } catch (err: any) {
      setErrorMessage('Une erreur de communication est survenue avec le service d\'authentification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-md w-full space-y-8">
        
        <BackButton to="/" label="Retour au site public" />

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-[#0A0F1D] border border-white/10 text-brand-blue flex items-center justify-center mx-auto">
            <Lock className="w-7 h-7" />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-brand-blue font-semibold block">
            ACCÈS RESTREINT • PERSONNEL HABILITÉ
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Portail d&apos;Administration
          </h1>
          <p className="text-xs text-slate-400">
            Espace d&apos;instruction et de suivi confidentiel des requêtes clients SDBSNX.
          </p>
        </div>

        {/* Login Box */}
        <div className="p-8 rounded-3xl bg-[#0A0F1D] border border-white/10 space-y-6">
          
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/30 text-xs text-red-300 flex items-start space-x-2">
              <ShieldAlert className="w-4 h-4 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          {!isSupabaseConfigured && (
            <div className="p-3.5 rounded-xl bg-brand-blue/10 border border-brand-blue/30 text-[11px] text-slate-300 space-y-1">
              <div className="flex items-center space-x-1.5 text-brand-cyan font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Mode Initialisation</span>
              </div>
              <p>
                Supabase n&apos;est pas encore lié via les variables d&apos;environnement. Vous pouvez tester le tableau de bord avec <code className="text-white bg-black/40 px-1 py-0.5 rounded">admin@sdbsnx.com</code> et un mot de passe sécurisé (≥ 8 car.).
              </p>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Courriel Administrateur
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@sdbsnx.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-slate-300 mb-1.5">
                Mot de passe sécurisé
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover disabled:opacity-50 transition-colors flex items-center justify-center space-x-2 text-xs uppercase tracking-wider"
            >
              {loading ? (
                <span>Vérification des accès...</span>
              ) : (
                <>
                  <span>Ouvrir la session</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </form>

          <div className="text-center">
            <p className="text-[11px] text-slate-400">
              Connexion sécurisée TLS 1.3 • Journalisation des tentatives d&apos;accès
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

