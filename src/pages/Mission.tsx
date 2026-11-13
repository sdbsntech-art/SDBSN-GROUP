import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  ShieldCheck, 
  Code2, 
  Scale, 
  Sparkles, 
  Handshake, 
  Award,
  ArrowRight
} from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const MissionPage: React.FC = () => {
  const objectives = [
    {
      num: '01',
      title: 'Développer des plateformes numériques de qualité',
      desc: 'Livrer des logiciels et applications fiables, maintenables, sécurisés et évolutifs qui respectent scrupuleusement les exigences métier.',
      icon: <Code2 className="w-5 h-5 text-emerald-600" />,
    },
    {
      num: '02',
      title: 'Promouvoir les bonnes pratiques de cybersécurité',
      desc: 'Défendre le patrimoine informationnel des organisations par la sensibilisation, la rigueur technique et les audits préventifs autorisés.',
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600" />,
    },
    {
      num: '03',
      title: 'Accompagner les entreprises dans leur digitalisation',
      desc: 'Fournir un conseil avisé et impartial pour moderniser les processus organisationnels sans rupture d\'activité ni complexité inutile.',
      icon: <Target className="w-5 h-5 text-emerald-600" />,
    },
    {
      num: '04',
      title: 'Développer des solutions LegalTech pionnières',
      desc: 'Faire converger le droit et les technologies de l\'information afin de fluidifier, tracer et dématérialiser les formalités juridiques et administratives.',
      icon: <Scale className="w-5 h-5 text-emerald-600" />,
    },
    {
      num: '05',
      title: 'Encourager une innovation responsable',
      desc: 'Privilégier les technologies durables, économes et adaptées aux réalités économiques locales plutôt que les artifices éphémères.',
      icon: <Sparkles className="w-5 h-5 text-emerald-600" />,
    },
    {
      num: '06',
      title: 'Construire des partenariats durables',
      desc: 'Établir des relations de confiance pérennes fondées sur la transparence contractuelle, l\'écoute mutuelle et le succès partagé.',
      icon: <Handshake className="w-5 h-5 text-emerald-600" />,
    },
    {
      num: '07',
      title: 'Placer l\'éthique et la transparence au centre',
      desc: 'Faire de l\'intégrité la règle inconditionnelle de chaque échange technique, financier et institutionnel.',
      icon: <Award className="w-5 h-5 text-emerald-600" />,
    },
  ];

  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-slate-50 text-[#0B1B3D]">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Navigation retour */}
        <div>
          <BackButton to="/" label="Retour à l'accueil" />
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 uppercase font-bold">
            <span>Mandat &amp; Objectifs Stratégiques</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
            Notre Mission &amp; Objectifs
          </h1>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Ce que nous accomplissons chaque jour avec rigueur, méthode et dévouement au service de l&apos;écosystème.
          </p>
        </div>

        {/* Mission Statement */}
        <div className="p-6 sm:p-12 rounded-3xl bg-white border border-slate-200 border-l-4 border-l-emerald-500 space-y-4 shadow-sm">
          <span className="text-xs font-mono text-emerald-600 uppercase tracking-widest font-bold block">
            DÉCLARATION DE MISSION
          </span>
          <h2 className="text-xl sm:text-3xl font-bold text-[#0B1B3D] italic leading-snug">
            &ldquo;Mettre nos compétences technologiques au service des entreprises, des organisations et des populations.&rdquo;
          </h2>
          <p className="text-xs sm:text-base text-slate-500 leading-relaxed">
            La mission de SDBSNX ne s&apos;arrête pas à la fourniture de code source : elle consiste à donner aux dirigeants, professionnels du droit et organisations les moyens techniques de protéger leurs opérations et de se développer en toute confiance.
          </p>
        </div>

        {/* Objectives Section */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl sm:text-3xl font-bold text-[#0B1B3D] font-display">
              Nos 7 Objectifs Stratégiques
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-2">
              Les axes directeurs qui orientent nos investissements en recherche, ingénierie et gouvernance.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {objectives.map((obj) => (
              <div
                key={obj.num}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 shadow-sm transition-all space-y-3"
              >
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                    {obj.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-slate-400">
                    {obj.num}
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-[#0B1B3D] tracking-wide">
                  {obj.title}
                </h4>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {obj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to action */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0B1B3D] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Prêt à collaborer autour de ces objectifs ?</h4>
            <p className="text-xs text-slate-300">Démarrez votre projet avec notre équipe d&apos;ingénieurs et consultants.</p>
          </div>
          <Link
            to="/contact"
            className="px-5 py-2.5 rounded-lg text-xs font-bold text-[#04231A] bg-[#10B981] hover:bg-[#059669] shadow-sm transition-colors flex items-center justify-center flex-shrink-0"
          >
            <span>Nous Contacter</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
