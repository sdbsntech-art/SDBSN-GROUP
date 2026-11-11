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
      <div className="bg-[#15271F] p-5 rounded-2xl border border-[#24403A] shadow-2xl space-y-3">
        <div className="flex items-center space-x-2 text-[#F4F1EA]">
          <Shield className="w-4 h-4 text-[#10B981]" />
          <h4 className="text-sm font-bold">Respect de votre vie privée</h4>
        </div>
        
        <p className="text-xs text-[#9DB2A8] leading-relaxed">
          SDBSNX utilise des cookies essentiels au bon fonctionnement de la plateforme et à la sécurité de vos sessions. Aucun cookie publicitaire intrusif n&apos;est déposé sans votre accord.
        </p>

        <div className="flex items-center justify-between pt-1">
          <Link
            to="/politique-cookies"
            className="text-[11px] text-[#10B981] hover:text-[#6EE7B7] hover:underline font-medium"
          >
            Politique de cookies →
          </Link>

          <div className="flex items-center space-x-2">
            <button
              onClick={handleDecline}
              className="px-3 py-1.5 text-xs text-[#F4F1EA] hover:text-white bg-[#0E1B17] hover:bg-[#1C332A] rounded-lg transition-colors border border-[#24403A] flex items-center font-medium"
            >
              <X className="w-3 h-3 mr-1" />
              Essentiels
            </button>
            <button
              onClick={handleAccept}
              className="px-3 py-1.5 text-xs font-bold text-[#04231A] bg-[#10B981] hover:bg-[#059669] rounded-lg transition-colors shadow-sm flex items-center"
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
