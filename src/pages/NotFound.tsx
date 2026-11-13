import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, Home, Compass } from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-[#0B1B3D]">
      <div className="max-w-md w-full text-center space-y-6">
        
        <div>
          <BackButton to="/" label="Retour à l'accueil" />
        </div>

        <div className="w-20 h-20 rounded-3xl bg-emerald-50 border border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-sm">
          <ShieldAlert className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold">
            ERREUR 404 • RESSOURCE INTROUVABLE
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-[#0B1B3D] font-display">
            Page Non Trouvée
          </h1>
          <p className="text-sm text-slate-500 leading-relaxed">
            L&apos;adresse demandée n&apos;existe pas ou a été déplacée conformément à notre politique de sécurité et d&apos;intégrité web.
          </p>
        </div>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-[#04231A] bg-[#10B981] hover:bg-[#059669] shadow-sm flex items-center justify-center space-x-2 transition-colors"
          >
            <Home className="w-4 h-4" />
            <span>Retour à l&apos;accueil</span>
          </Link>
          <Link
            to="/services"
            className="w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-semibold text-[#0B1B3D] hover:text-emerald-700 bg-white hover:bg-slate-50 border border-slate-200 shadow-sm flex items-center justify-center space-x-2 transition-colors"
          >
            <Compass className="w-4 h-4 text-emerald-600" />
            <span>Explorer nos services</span>
          </Link>
        </div>

      </div>
    </div>
  );
};
