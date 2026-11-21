import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Layers, Award, Users } from 'lucide-react';

interface StatItem {
  id: string;
  targetNumber: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  accentColor: 'emerald' | 'gold';
}

const STATS_DATA: StatItem[] = [
  {
    id: 'projects',
    targetNumber: 50,
    suffix: '+',
    label: 'Projets Déployés',
    sublabel: 'Plateformes web, mobiles & SaaS en production',
    icon: Layers,
    accentColor: 'emerald',
  },
  {
    id: 'security',
    targetNumber: 100,
    suffix: '%',
    label: 'Données Souveraines',
    sublabel: 'Hébergement sécurisé & conformité CDP / RGPD',
    icon: ShieldCheck,
    accentColor: 'gold',
  },
  {
    id: 'compliance',
    targetNumber: 2008,
    prefix: 'Loi ',
    suffix: '-08',
    label: 'Conformité Juridique',
    sublabel: 'Transactions électroniques & dématérialisation probatoire',
    icon: Award,
    accentColor: 'emerald',
  },
  {
    id: 'clients',
    targetNumber: 99,
    suffix: '.9%',
    label: 'Disponibilité & SLA',
    sublabel: 'Surveillance et résilience continue des architectures',
    icon: Users,
    accentColor: 'gold',
  },
];

// Sous-composant compteur individuel
const AnimatedCounter: React.FC<{
  target: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}> = ({ target, prefix = '', suffix = '', isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    // Détection prefers-reduced-motion
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setCount(target);
      return;
    }

    const duration = 1600; // ms
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing cubic out
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentVal = Math.floor(easeOut * target);

      setCount(currentVal);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        setCount(target);
      }
    };

    const animId = requestAnimationFrame(updateCounter);
    return () => cancelAnimationFrame(animId);
  }, [isInView, target]);

  return (
    <span className="tabular-nums">
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

export const KeyFigures: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-80px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#123D3A] text-[#F3E3C3] border-y border-[#10B981]/20 overflow-hidden"
    >
      {/* Lueurs décoratives d'ambiance */}
      <div className="absolute top-0 right-1/4 w-80 h-80 rounded-full bg-[#10B981]/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-[#F2B134]/10 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Titre de la section */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#F2B134] bg-white/5 border border-[#F2B134]/30 font-semibold">
            Impact Mesurable &amp; Rigueur
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#F3E3C3] font-display">
            Des chiffres qui attestent de notre engagement.
          </h2>
          <p className="text-sm sm:text-base text-[#F3E3C3]/75">
            Chaque réalisation d&apos;Alkeb.dev vise la pérennité, la sécurité absolue et la conformité stricte aux exigences de souveraineté.
          </p>
        </div>

        {/* Grille des 4 chiffres clés en cascade */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((item, index) => {
            const Icon = item.icon;
            const isEmerald = item.accentColor === 'emerald';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative p-6 sm:p-7 rounded-2xl bg-[#0B2B2A]/90 border border-white/10 hover:border-[#10B981]/60 shadow-xl transition-all duration-300 group hover:-translate-y-1"
              >
                {/* Icône de statut */}
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
                      isEmerald
                        ? 'bg-[#10B981]/20 text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#0B2B2A]'
                        : 'bg-[#F2B134]/20 text-[#F2B134] group-hover:bg-[#F2B134] group-hover:text-[#0B2B2A]'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                </div>

                {/* Valeur numérique animée */}
                <div
                  className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-2 ${
                    isEmerald ? 'text-[#10B981]' : 'text-[#F2B134]'
                  }`}
                >
                  <AnimatedCounter
                    target={item.targetNumber}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    isInView={isInView}
                  />
                </div>

                {/* Libellé et description */}
                <h3 className="text-base font-bold text-[#F3E3C3] group-hover:text-white transition-colors">
                  {item.label}
                </h3>
                <p className="text-xs text-[#F3E3C3]/70 mt-1 leading-relaxed">
                  {item.sublabel}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
