import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  HeartHandshake, 
  Award, 
  Scale, 
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
    icon: <HeartHandshake className="w-7 h-7 text-[#2563EB]" />,
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
    id: 'purpose',
    number: '04',
    title: 'BUILDING WITH PURPOSE',
    tagline: 'Construire avec intention et utilité.',
    description: 'Refuser les technologies gadgets. Chaque brique logicielle développée doit répondre à un besoin réel et mesurable.',
    principles: [
      'Chaque fonctionnalité répond à un besoin métier',
      'Création de valeur durable pour nos partenaires',
      'Développement raisonné et soutenable'
    ],
    icon: <Lightbulb className="w-7 h-7 text-[#2563EB]" />,
  },
  {
    id: 'security',
    number: '05',
    title: 'SECURING THE FUTURE',
    tagline: 'Sécuriser durablement l\'avenir.',
    description: 'Intégrer la résilience, la confidentialité et la sécurité dès la conception de chaque produit ou infrastructure.',
    principles: [
      'Approche défensive proactive (Security by Design)',
      'Protection absolue des données et de la vie privée',
      'Résilience face aux menaces numériques émergentes'
    ],
    icon: <LockKeyhole className="w-7 h-7 text-[#10B981]" />,
  },
  {
    id: 'responsibility',
    number: '06',
    title: 'RESPONSIBILITY & ETHICS',
    tagline: 'Responsabilité sociétale et rigueur déontologique.',
    description: 'Assumer le rôle d\'acteur numérique de confiance, promoteur de bonnes pratiques et du respect strict des lois en vigueur.',
    principles: [
      'Respect scrupuleux du cadre juridique et déontologique',
      'Audits de sécurité strictement autorisés et encadrés',
      'Contribution active à l\'écosystème numérique africain'
    ],
    icon: <Scale className="w-7 h-7 text-[#2563EB]" />,
  },
];

export const InteractiveValues: React.FC = () => {
  const [activeValue, setActiveValue] = useState<ValueItem>(SDBSNX_VALUES[0]);

  return (
    <div className="relative w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
        
        {/* Left Column: Interactive Value Selector list */}
        <div className="lg:col-span-5 space-y-2.5">
          {SDBSNX_VALUES.map((val) => {
            const isSelected = activeValue.id === val.id;
            return (
              <button
                key={val.id}
                onClick={() => setActiveValue(val)}
                className={`w-full text-left p-4 rounded-2xl transition-all flex items-center justify-between border ${
                  isSelected
                    ? 'bg-emerald-50 border-[#10B981] text-[#0B1B3D] shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-600'
                }`}
              >
                <div className="flex items-center space-x-3.5 min-w-0">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded-md flex-shrink-0 ${
                    isSelected ? 'bg-[#10B981] text-white' : 'bg-slate-100 text-slate-600'
                  }`}>
                    {val.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className={`text-sm font-bold tracking-wide truncate ${isSelected ? 'text-[#0B1B3D]' : 'text-slate-800'}`}>
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-500 truncate">
                      {val.tagline}
                    </p>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                  isSelected ? 'text-[#10B981] translate-x-1' : 'text-slate-300'
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
              className="bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden"
            >
              {/* Watermark number */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-mono font-black text-slate-100 select-none pointer-events-none">
                {activeValue.number}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-100 text-[#10B981]">
                  {activeValue.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-[#059669] uppercase tracking-wider font-bold">
                    Principe #{activeValue.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] tracking-tight break-words font-display">
                    {activeValue.title}
                  </h3>
                </div>
              </div>

              <div className="mb-6 p-4 rounded-2xl bg-slate-50 border-l-4 border-[#10B981]">
                <p className="text-sm sm:text-base text-[#0B1B3D] font-medium italic">
                  &ldquo;{activeValue.tagline}&rdquo;
                </p>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {activeValue.description}
              </p>

              <div>
                <h4 className="text-xs uppercase font-mono font-bold text-[#0B1B3D] tracking-wider mb-3">
                  Engagements Concrets :
                </h4>
                <ul className="space-y-2.5">
                  {activeValue.principles.map((principle, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-700">
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
