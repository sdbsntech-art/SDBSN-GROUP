import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ShieldCheck, Layers } from 'lucide-react';

interface StatItem {
  id: string;
  targetNumber: number;
  suffix: string;
  prefix?: string;
  label: string;
  sublabel: string;
  icon: React.ElementType;
  accentColor: 'emerald' | 'navy';
}

const STATS_DATA: StatItem[] = [
  {
    id: 'projects',
    targetNumber: 10,
    suffix: '+',
    label: 'Projets',
    sublabel: 'Projets web, mobiles et solutions numériques',
    icon: Layers,
    accentColor: 'emerald',
  },
  {
    id: 'services',
    targetNumber: 4,
    suffix: '',
    label: 'Domaines de service',
    sublabel: 'LegalTech, informatique, cybersécurité et développement web',
    icon: ShieldCheck,
    accentColor: 'navy',
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
            Alkeb.lab en chiffres
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-display">
            Des services numériques concrets.
          </h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Découvrez les projets et domaines d&apos;intervention d&apos;Alkeb.lab.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 max-w-3xl mx-auto gap-5">
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
                        : 'bg-slate-100 text-[#0B1B3D] group-hover:bg-[#0B1B3D] group-hover:text-white'
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`w-2 h-2 rounded-full ${isEmerald ? 'bg-[#10B981]' : 'bg-[#0B1B3D]'}`} />
                </div>

                <div
                  className={`text-3xl sm:text-4xl font-extrabold font-display tracking-tight mb-1.5 ${
                    isEmerald ? 'text-[#059669]' : 'text-[#0B1B3D]'
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
