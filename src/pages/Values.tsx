import React from 'react';
import { Link } from 'react-router-dom';
import { InteractiveValues } from '../components/sections/InteractiveValues';
import { Shield, ArrowRight } from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const ValuesPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-[#050811]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Navigation retour */}
        <div>
          <BackButton to="/" label="Retour à l'accueil" />
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0A0F1D] border border-white/10 text-xs font-mono text-brand-blue uppercase font-bold">
            <span>Code d&apos;Éthique & Culture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            THE SDBSNX CORE VALUES
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Les sept piliers éthiques et opérationnels qui définissent l&apos;identité et la rigueur de SDBSNX dans chaque engagement.
          </p>
        </div>

        {/* Interactive Values Component */}
        <InteractiveValues />

        {/* Commitment Statement */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0A0F1D] border border-white/10 space-y-4">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-brand-blue" />
            <h3 className="text-base sm:text-lg font-bold text-white">Notre Règle d&apos;Or Opérationnelle</h3>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Chez SDBSNX, ces valeurs ne sont pas de simples déclarations d&apos;intention : elles sont inscrites dans nos procédures de contrôle qualité, dans nos revues de code, dans notre approche contractuelle et dans la relation avec chacun de nos collaborateurs et clients.
          </p>
          <div className="pt-2">
            <Link
              to="/philosophie"
              className="inline-flex items-center text-xs font-semibold text-white hover:text-brand-blue transition-colors"
            >
              <span>Découvrir notre philosophie et nos maximes (The Standard We Live By)</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
