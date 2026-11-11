import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, Compass } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full text-center space-y-6">
        
        <div className="w-20 h-20 rounded-3xl bg-[#0A0F1D] border border-brand-blue/30 text-brand-blue flex items-center justify-center mx-auto">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-cyan font-semibold">
            ERREUR 404 • RESSOURCE INTROUVABLE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white font-display">
            Page Non Trouvée
          </h1>
          <p className="text-sm text-slate-400 leading-relaxed">
            L&apos;adresse demandée n&apos;existe pas ou a été déplacée conformément à notre politique de sécurité et d&apos;intégrité web.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover flex items-center justify-center space-x-2"
          >
            <Home className="w-4 h-4" />
            <span>Retour à l&apos;accueil</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white glass-panel hover:bg-white/10 border border-white/10 flex items-center justify-center space-x-2"
          >
            <Compass className="w-4 h-4" />
            <span>Explorer nos services</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
