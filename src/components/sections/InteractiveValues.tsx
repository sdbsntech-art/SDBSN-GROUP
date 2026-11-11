import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Scale, 
  CheckCircle2, 
  Lightbulb, 
  LockKeyhole,
  ArrowRight
} from 'lucide-react';

interface ValueItem {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  principles: string[];
  icon: React.ReactNode;
}

export const SDBSNX_VALUES: ValueItem[] = [
  {
    id: 'integrity',
    number: '01',
    title: 'INTEGRITY FIRST',
    tagline: 'L\'intégrité avant tout.',
    description: 'Agir avec honnêteté, transparence et responsabilité inébranlable dans chacune de nos décisions et relations professionnelles.',
    principles: [
      'Transparence technique et tarifaire absolue',
      'Refus strict des compromis éthiques',
      'Cohérence entre nos paroles et nos réalisations'
    ],
    icon: <ShieldCheck className="w-7 h-7 text-[#10B981]" />,
  },
  {
    id: 'service',
    number: '02',
    title: 'SERVICE BEFORE SELF',
    tagline: 'Le service avant soi.',
    description: 'Mettre nos compétences techniques et nos solutions au service de l\'intérêt collectif, de nos clients et du développement numérique durable.',
    principles: [
      'Priorité absolue à l\'impact réel sur le client',
      'Dévouement à l\'émancipation numérique africaine',
      'Écoute active et disponibilité professionnelle'
    ],
    icon: <HeartHandshake className="w-7 h-7 text-[#10B981]" />,
  },
  {
    id: 'excellence',
    number: '03',
    title: 'EXCELLENCE IN ALL WE DO',
    tagline: 'L\'excellence dans tout ce que nous faisons.',
    description: 'Dépasser les standards conventionnels pour livrer des architectures logicielles et des analyses de sécurité de classe mondiale.',
    principles: [
      'Code propre, documenté et testé',
      'Standards de sécurité rigoureux',
      'Amélioration continue de nos méthodes'
    ],
    icon: <Award className="w-7 h-7 text-[#10B981]" />,
  },
  {
    id: 'discipline',
    number: '04',
    title: 'DISCIPLINE AND RIGOR',
    tagline: 'La discipline et la rigueur dans chaque engagement.',
    description: 'La méthode et la persévérance surpassent l\'improvisation. Nous appliquons des processus éprouvés et une gouvernance stricte.',
    principles: [
      'Respect scrupuleux des cahiers des charges et délais',
      'Audits et revues par les pairs obligatoires',
      'Culture de la précision documentaire'
    ],
    icon: <Scale className="w-7 h-7 text-[#10B981]" />,
  },
  {
    id: 'accountability',
    number: '05',
    title: 'ACCOUNTABILITY',
    tagline: 'Assumer nos responsabilités et respecter nos engagements.',
    description: 'Nous répondons pleinement de nos livrables, de la sécurité de nos systèmes et de la pérennité de nos partenariats.',
    principles: [
      'Responsabilité technique totale de nos développements',
      'Gestion proactive et transparente des aléas',
      'Obligation de résultat et de fiabilité'
    ],
    icon: <CheckCircle2 className="w-7 h-7 text-[#10B981]" />,
  },
  {
    id: 'innovation',
    number: '06',
    title: 'INNOVATION WITH PURPOSE',
    tagline: 'Innover pour résoudre des problèmes réels.',
    description: 'L\'innovation technologique n\'est jamais une fin en soi : elle doit simplifier le droit, sécuriser les flux et créer de la valeur concrète.',
    principles: [
      'Solutions LegalTech orientées simplification et gain de temps',
      'Recherche et veille technologique constante',
      'Architecture logicielle modulaire et évolutive'
    ],
    icon: <Lightbulb className="w-7 h-7 text-[#10B981]" />,
  },
  {
    id: 'confidentiality',
    number: '07',
    title: 'CONFIDENTIALITY AND TRUST',
    tagline: 'Protéger les informations et respecter la confiance accordée.',
    description: 'Le secret des affaires, la confidentialité des données institutionnelles et judiciaires constituent un impératif non négociable.',
    principles: [
      'Chiffrement de bout en bout des données sensibles',
      'Accords de confidentialité stricts (NDA) sur chaque mission',
      'Isolement logique des environnements clients'
    ],
    icon: <LockKeyhole className="w-7 h-7 text-[#10B981]" />,
  },
];

export const InteractiveValues: React.FC = () => {
  const [activeValue, setActiveValue] = useState<ValueItem>(SDBSNX_VALUES[0]);

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Column: Interactive Value Selector list */}
        <div className="lg:col-span-5 space-y-2">
          {SDBSNX_VALUES.map((val) => {
            const isSelected = activeValue.id === val.id;
            return (
              <button
                key={val.id}
                onClick={() => setActiveValue(val)}
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-all flex items-center justify-between border ${
                  isSelected
                    ? 'bg-[#1C332A] border-[#10B981] text-[#F4F1EA] shadow-sm'
                    : 'bg-[#15271F] border-[#24403A] hover:border-[#10B981]/50 hover:bg-[#1C332A]/70 text-[#9DB2A8]'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded flex-shrink-0 ${
                    isSelected ? 'bg-[#10B981] text-[#04231A]' : 'bg-[#0E1B17] text-[#9DB2A8]'
                  }`}>
                    {val.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className={`text-sm font-bold tracking-wide truncate ${isSelected ? 'text-[#F4F1EA]' : 'text-[#F4F1EA]/90'}`}>
                      {val.title}
                    </h3>
                    <p className="text-xs text-[#9DB2A8] truncate">
                      {val.tagline}
                    </p>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                  isSelected ? 'text-[#10B981] translate-x-1' : 'text-[#24403A]'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Highlight Display */}
        <div className="lg:col-span-7 w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeValue.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-[#15271F] p-6 sm:p-10 rounded-2xl border border-[#24403A] shadow-sm relative overflow-hidden"
            >
              {/* Watermark number */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-mono font-black text-[#24403A]/40 select-none pointer-events-none">
                {activeValue.number}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-[#0E1B17] border border-[#24403A] text-[#10B981] [&_svg]:text-[#10B981] [&_svg]:stroke-[#10B981] shadow-inner">
                  {activeValue.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#6EE7B7] uppercase tracking-wider font-bold">
                    Principe #{activeValue.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F1EA] tracking-tight break-words">
                    {activeValue.title}
                  </h3>
                </div>
              </div>

              <div className="mb-6 p-4 rounded-xl bg-[#0E1B17] border-l-4 border-[#10B981]">
                <p className="text-sm sm:text-base text-[#F4F1EA] font-medium italic">
                  &ldquo;{activeValue.tagline}&rdquo;
                </p>
              </div>

              <p className="text-sm text-[#9DB2A8] leading-relaxed mb-6">
                {activeValue.description}
              </p>

              <div>
                <h4 className="text-xs uppercase font-mono font-bold text-[#F4F1EA] tracking-wider mb-3">
                  Engagements Concrets :
                </h4>
                <ul className="space-y-2.5">
                  {activeValue.principles.map((principle, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-[#F4F1EA]/90">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mt-1.5 mr-3 flex-shrink-0" />
                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </div>
  );
};
