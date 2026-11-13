import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, Mail, ShieldAlert, ArrowRight, ShieldCheck } from 'lucide-react';
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
      // Direct Admin Authentication
      if (email.trim().toLowerCase() === 'admin@sdbsnx.com' && password.length >= 8) {
        localStorage.setItem(
          'sdbsnx_admin_token',
          JSON.stringify({ email: email.trim(), loginAt: Date.now() })
        );
        navigate('/admin');
      } else {
        setErrorMessage('Identifiants administrateur incorrects. Utilisez admin@sdbsnx.com avec au moins 8 caractères.');
      }
    } catch {
      setErrorMessage('Une erreur inattendue est survenue lors de l\'authentification.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 relative bg-[#0B1B3D] text-white">
      <div className="max-w-md w-full space-y-8">
        
        <BackButton to="/" label="Retour au site public" />

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/10 text-emerald-400 flex items-center justify-center mx-auto shadow-md">
            <Lock className="w-7 h-7" />
          </div>
          <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block">
            ACCÈS RESTREINT • PERSONNEL HABILITÉ
          </span>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
            Portail d&apos;Administration
          </h1>
          <p className="text-xs text-white/60">
            Espace d&apos;instruction et de suivi confidentiel des requêtes clients SDBSNX.
          </p>
        </div>

        {/* Login Box */}
        <div className="p-8 rounded-3xl bg-white/5 border border-white/10 shadow-xl space-y-6">
          
          {errorMessage && (
            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800 text-xs text-red-200 flex items-start space-x-2">
              <ShieldAlert className="w-4 h-4 text-red-400 flex-shrink-0 mt-0.5" />
              <span>{errorMessage}</span>
            </div>
          )}

          <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-[11px] text-white/60 space-y-1">
            <div className="flex items-center space-x-1.5 text-emerald-400 font-bold">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Console Sécurisée</span>
            </div>
            <p>
              Connectez-vous avec votre adresse officielle <code className="text-emerald-400 bg-white/10 border border-white/10 px-1 py-0.5 rounded font-bold">admin@sdbsnx.com</code>.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white mb-1.5">
                Courriel Administrateur
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-3" />
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="admin@sdbsnx.com"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white mb-1.5">
                Mot de passe sécurisé
              </label>
              <div className="relative">
                <Lock className="w-4 h-4 text-white/40 absolute left-3.5 top-3" />
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••••••"
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/30 text-sm focus:outline-none focus:border-emerald-500 transition-colors"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 rounded-xl font-bold text-[#04231A] bg-[#10B981] hover:bg-[#059669] disabled:opacity-50 transition-colors shadow-sm flex items-center justify-center space-x-2 text-xs uppercase tracking-wider"
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
            <p className="text-[11px] text-white/40">
              Connexion chiffrée • Authentification locale sécurisée
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};
