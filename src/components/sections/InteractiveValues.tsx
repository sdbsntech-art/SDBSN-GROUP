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
    icon: <ShieldCheck className="w-7 h-7 text-brand-blue" />,
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
    icon: <HeartHandshake className="w-7 h-7 text-brand-blue" />,
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
    icon: <Award className="w-7 h-7 text-brand-blue" />,
  },
  {
    id: 'discipline',
    number: '04',
    title: 'DISCIPLINE AND RIGOR',
    tagline: 'La discipline et la rigueur dans chaque engagement.',
    description: 'La méthode prévaut sur l\'improvisation. Chaque projet bénéficie d\'une méthodologie éprouvée et d\'une rigueur opérationnelle constante.',
    principles: [
      'Respect strict des délais et cahiers des charges',
      'Audits de sécurité méthodiques et documentés',
      'Suivi régulier et traçabilité exemplaire'
    ],
    icon: <Scale className="w-7 h-7 text-brand-blue" />,
  },
  {
    id: 'accountability',
    number: '05',
    title: 'ACCOUNTABILITY',
    tagline: 'Assumer nos responsabilités et respecter nos engagements.',
    description: 'Nous répondons pleinement de la qualité de nos livrables et de la sécurité des solutions conçues pour nos partenaires.',
    principles: [
      'Garantie sur nos développements et architectures',
      'Responsabilité partagée et communication proactive',
      'Engagement à résoudre tout aléa sans faux-fuyant'
    ],
    icon: <CheckCircle2 className="w-7 h-7 text-brand-blue" />,
  },
  {
    id: 'innovation',
    number: '06',
    title: 'INNOVATION WITH PURPOSE',
    tagline: 'Innover pour résoudre des problèmes réels.',
    description: 'Refuser les effets de mode pour se concentrer sur des innovations technologiques qui résolvent des défis économiques et humains concrets.',
    principles: [
      'Adéquation technologique ciblée aux réalités locales',
      'Modernisation des processus juridiques et administratifs',
      'Valorisation de solutions fiables et durables'
    ],
    icon: <Lightbulb className="w-7 h-7 text-brand-blue" />,
  },
  {
    id: 'trust',
    number: '07',
    title: 'CONFIDENTIALITY AND TRUST',
    tagline: 'Protéger les informations et respecter la confiance accordée.',
    description: 'La confiance ne se décrète pas, elle se prouve par le strict respect du secret des affaires et la protection absolue des données sensibles.',
    principles: [
      'Accords de non-divulgation (NDA) rigoureux',
      'Cloisonnement étanche des données projets',
      'Chiffrement et conformité stricte aux lois sur les données'
    ],
    icon: <LockKeyhole className="w-7 h-7 text-brand-blue" />,
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
                className={`w-full text-left p-3.5 sm:p-4 rounded-xl transition-colors flex items-center justify-between border ${
                  isSelected
                    ? 'bg-[#0E1629] border-brand-blue text-white'
                    : 'bg-[#0A0F1D] border-white/10 hover:border-white/20 text-slate-300'
                }`}
              >
                <div className="flex items-center space-x-3 min-w-0">
                  <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded flex-shrink-0 ${
                    isSelected ? 'bg-brand-blue text-white' : 'bg-white/5 text-slate-400'
                  }`}>
                    {val.number}
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold tracking-wide truncate">
                      {val.title}
                    </h3>
                    <p className="text-xs text-slate-400 truncate">
                      {val.tagline}
                    </p>
                  </div>
                </div>
                <ArrowRight className={`w-4 h-4 flex-shrink-0 transition-transform ${
                  isSelected ? 'text-brand-blue translate-x-1' : 'text-slate-600'
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
              className="bg-[#0A0F1D] p-6 sm:p-10 rounded-2xl border border-white/10 relative overflow-hidden"
            >
              {/* Watermark number */}
              <div className="absolute top-4 right-6 text-6xl sm:text-7xl font-mono font-black text-white/[0.03] select-none pointer-events-none">
                {activeValue.number}
              </div>

              <div className="flex items-center space-x-4 mb-6">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10">
                  {activeValue.icon}
                </div>
                <div>
                  <span className="text-xs font-mono text-brand-blue uppercase tracking-wider font-bold">
                    Principe #{activeValue.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight break-words">
                    {activeValue.title}
                  </h3>
                </div>
              </div>

              <div className="mb-6 p-4 rounded-xl bg-[#050811] border-l-4 border-brand-blue">
                <p className="text-sm sm:text-base text-slate-200 font-medium italic">
                  &ldquo;{activeValue.tagline}&rdquo;
                </p>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {activeValue.description}
              </p>

              <div>
                <h4 className="text-xs uppercase font-mono font-bold text-slate-400 tracking-wider mb-3">
                  Engagements Concrets :
                </h4>
                <ul className="space-y-2.5">
                  {activeValue.principles.map((principle, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5 mr-3 flex-shrink-0" />
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
