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
  accentColor: 'emerald' | 'blue';
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
    accentColor: 'blue',
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
    accentColor: 'blue',
  },
];

const AnimatedCounter: React.FC<{
  target: number;
  prefix?: string;
  suffix?: string;
  isInView: boolean;
}> = ({ target, prefix = '', suffix = '', isInView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      setCount(target);
      return;
    }

    const duration = 1600;
    const startTime = performance.now();

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
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
  const isInView = useInView(sectionRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={sectionRef}
      className="relative py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 text-[#0B1B3D] border-b border-slate-200/80 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* En-tête */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12 space-y-2">
          <span className="inline-block px-3.5 py-1 rounded-full text-xs font-mono uppercase tracking-widest text-[#059669] bg-emerald-50 border border-emerald-200 font-bold">
            Impact Mesurable &amp; Rigueur
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-display">
            Des chiffres qui attestent de notre engagement.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Chaque réalisation d&apos;Alkeb.dev vise la pérennité, la sécurité absolue et la souveraineté technologique.
          </p>
        </div>

        {/* Grille des 4 chiffres clés en cascade avec animation au scroll */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {STATS_DATA.map((item, index) => {
            const Icon = item.icon;
            const isEmerald = item.accentColor === 'emerald';

            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 25 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#10B981] transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      isEmerald
                        ? 'bg-emerald-50 text-[#059669] group-hover:bg-[#10B981] group-hover:text-white'
                        : 'bg-blue-50 text-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`w-2 h-2 rounded-full ${isEmerald ? 'bg-[#10B981]' : 'bg-[#2563EB]'}`} />
                </div>

                <div
                  className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-1.5 ${
                    isEmerald ? 'text-[#059669]' : 'text-[#2563EB]'
                  }`}
                >
                  <AnimatedCounter
                    target={item.targetNumber}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    isInView={isInView}
                  />
                </div>

                <h3 className="text-sm font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors">
                  {item.label}
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
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
