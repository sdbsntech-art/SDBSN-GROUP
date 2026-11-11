import React from 'react';
import { Link } from 'react-router-dom';
import { PhilosophyQuotes } from '../components/sections/PhilosophyQuotes';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const PhilosophyPage: React.FC = () => {
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
            <span>Principes Directeurs & Maximes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1EA] tracking-tight font-display">
            THE STANDARD WE LIVE BY
          </h1>
          <p className="text-[#9DB2A8] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            La rigueur d&apos;action et la constance d&apos;esprit qui guident nos ingénieurs, nos consultants et nos dirigeants au quotidien.
          </p>
        </div>

        {/* Philosophy Intro Banner */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#15271F] border border-[#24403A] border-l-4 border-l-[#10B981] space-y-3 shadow-md">
          <div className="flex items-center space-x-2 text-[#6EE7B7]">
            <Sparkles className="w-5 h-5 text-[#10B981]" />
            <span className="text-xs font-mono uppercase tracking-wider font-bold">
              Notre Philosophie Fondamentale
            </span>
          </div>
          <p className="text-sm sm:text-lg text-[#F4F1EA] leading-relaxed">
            La technologie sans éthique est une fragilité. Chez SDBSNX, nous cultivons une discipline intellectuelle et opérationnelle où chaque réalisation est mesurée à l&apos;aune de son utilité réelle, de sa robustesse et du respect strict de la parole donnée.
          </p>
        </div>

        {/* The 10 Quotes Grid */}
        <PhilosophyQuotes />

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#15271F] border border-[#24403A] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#F4F1EA]">Adhérer à cette exigence pour vos projets</h4>
            <p className="text-xs text-[#9DB2A8]">Échangeons en toute franchise sur vos défis numériques et réglementaires.</p>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg text-xs font-bold text-[#04231A] bg-[#10B981] hover:bg-[#059669] shadow-sm transition-colors flex items-center justify-center flex-shrink-0"
          >
            <span>Démarrer un échange</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
