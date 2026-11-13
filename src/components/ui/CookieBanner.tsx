import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Check, X } from 'lucide-react';

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sdbsnx_cookie_consent');
    if (!consent) {
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
      <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-2xl space-y-3">
        <div className="flex items-center space-x-2 text-[#0B1B3D]">
          <Shield className="w-4 h-4 text-[#10B981]" />
          <h4 className="text-sm font-bold">Respect de votre vie privée</h4>
        </div>
        
        <p className="text-xs text-slate-600 leading-relaxed">
          SDBSNX utilise des cookies essentiels au bon fonctionnement de la plateforme et à la sécurité de vos sessions. Aucun cookie publicitaire intrusif n&apos;est déposé sans votre accord.
        </p>

        <div className="flex items-center justify-between pt-1">
          <Link
            to="/politique-cookies"
            className="text-[11px] text-[#10B981] hover:text-[#059669] hover:underline font-semibold"
          >
            Politique de cookies →
          </Link>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 text-xs text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors border border-slate-300 flex items-center font-medium"
            >
              <X className="w-3 h-3 mr-1" />
              Essentiels
            </button>
            <button
              onClick={handleAccept}
              className="px-3.5 py-1.5 text-xs font-bold text-white bg-[#10B981] hover:bg-[#059669] rounded-lg transition-colors shadow-xs flex items-center"
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
