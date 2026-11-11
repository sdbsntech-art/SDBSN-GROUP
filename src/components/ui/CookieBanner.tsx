import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sdbsnx_cookie_consent');
    if (!consent) {
      // Delay slightly for smooth page load
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('sdbsnx_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('sdbsnx_cookie_consent', 'essential_only');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 animate-in fade-in slide-in-from-bottom-5 duration-300">
      <div className="glass-panel-glow p-5 rounded-2xl border border-white/10 shadow-2xl space-y-3">
        <div className="flex items-center space-x-2 text-white">
          <Shield className="w-4 h-4 text-brand-blue" />
          <h4 className="text-sm font-semibold">Respect de votre vie privée</h4>
        </div>
        
        <p className="text-xs text-slate-300 leading-relaxed">
          SDBSNX utilise des cookies essentiels au bon fonctionnement de la plateforme et à la sécurité de vos sessions. Aucun cookie publicitaire intrusif n&apos;est déposé sans votre accord.
        </p>

        <div className="flex items-center justify-between pt-1">
          <Link
            to="/politique-cookies"
            className="text-[11px] text-brand-cyan hover:underline"
          >
            Consulter notre politique de cookies
          </Link>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 text-xs text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-colors border border-white/10 flex items-center"
            >
              <X className="w-3 h-3 mr-1" />
              Essentiels
            </button>
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 text-xs font-medium text-white bg-brand-blue hover:bg-brand-blue-hover rounded-lg transition-colors shadow-glow-sm flex items-center"
            >
              <Check className="w-3 h-3 mr-1" />
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

