import React from 'react';
import { Link } from 'react-router-dom';
import { InteractiveValues } from '../components/sections/InteractiveValues';
import { Shield, ArrowRight } from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const ValuesPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-[#0E1B17] text-[#F4F1EA]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Navigation retour */}
        <div>
          <BackButton to="/" label="Retour à l'accueil" />
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#15271F] border border-[#24403A] text-xs font-mono text-[#6EE7B7] uppercase font-bold">
            <span>Code d&apos;Éthique & Culture</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1EA] tracking-tight font-display">
            THE SDBSNX CORE VALUES
          </h1>
          <p className="text-[#9DB2A8] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Les sept piliers éthiques et opérationnels qui définissent l&apos;identité et la rigueur de SDBSNX dans chaque engagement.
          </p>
        </div>

        {/* Interactive Values Component */}
        <InteractiveValues />

        {/* Commitment Statement */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#15271F] border border-[#24403A] space-y-4 shadow-sm">
          <div className="flex items-center space-x-3">
            <Shield className="w-5 h-5 text-[#10B981]" />
            <h3 className="text-base sm:text-lg font-bold text-[#F4F1EA]">Notre Règle d&apos;Or Opérationnelle</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#9DB2A8] leading-relaxed">
            Chez SDBSNX, ces valeurs ne sont pas de simples déclarations d&apos;intention : elles sont inscrites dans nos procédures de contrôle qualité, dans nos revues de code, dans notre approche contractuelle et dans la relation avec chacun de nos collaborateurs et clients.
          </p>
          <div className="pt-2">
            <Link
              to="/philosophie"
              className="inline-flex items-center text-xs font-bold text-[#10B981] hover:text-[#6EE7B7] transition-colors"
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
