import React from 'react';
import { Link } from 'react-router-dom';
import { PhilosophyQuotes } from '../components/sections/PhilosophyQuotes';
import { Sparkles, ArrowRight } from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const PhilosophyPage: React.FC = () => {
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
            <span>Principes Directeurs & Maximes</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            THE STANDARD WE LIVE BY
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            La rigueur d&apos;action et la constance d&apos;esprit qui guident nos ingénieurs, nos consultants et nos dirigeants au quotidien.
          </p>
        </div>

        {/* Philosophy Intro Banner */}
        <div className="p-6 sm:p-10 rounded-2xl bg-[#0A0F1D] border border-white/10 border-l-4 border-l-brand-blue space-y-3">
          <div className="flex items-center space-x-2 text-brand-blue">
            <Sparkles className="w-5 h-5" />
            <span className="text-xs font-mono uppercase tracking-wider font-bold">
              Notre Philosophie Fondamentale
            </span>
          </div>
          <p className="text-sm sm:text-lg text-slate-200 leading-relaxed">
            La technologie sans éthique est une fragilité. Chez SDBSNX, nous cultivons une discipline intellectuelle et opérationnelle où chaque réalisation est mesurée à l&apos;aune de son utilité réelle, de sa robustesse et du respect strict de la parole donnée.
          </p>
        </div>

        {/* The 10 Quotes Grid */}
        <PhilosophyQuotes />

        {/* Bottom Banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0F1D] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Adhérer à cette exigence pour vos projets</h4>
            <p className="text-xs text-slate-400">Échangeons en toute franchise sur vos défis numériques et réglementaires.</p>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors flex items-center justify-center flex-shrink-0"
          >
            <span>Démarrer un échange</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
