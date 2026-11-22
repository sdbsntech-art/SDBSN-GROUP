import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, CheckCircle2, Shield, Scale, Code, Compass } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';

const ICONS_MAP: Record<string, React.ElementType> = {
  Scale,
  Shield,
  Code,
  Compass,
};

export const ServicesSection: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-60px' });

  return (
    <section
      ref={containerRef}
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white text-[#0B1B3D] border-t border-slate-200 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* En-tête */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-14 space-y-3"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono uppercase tracking-wider text-[#059669] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Pôles d&apos;Excellence</span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
            Des solutions concrètes pour des ambitions élevées.
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
            Nos pôles spécialisés allient savoir-faire technique, rigueur d&apos;ingénierie et conformité légale au Sénégal et en Afrique.
          </p>
        </motion.div>

        {/* Grille des cartes avec animation d'apparition en cascade et hover émeraude */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = ICONS_MAP[service.iconName] || Scale;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.12,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-3xl bg-white border border-slate-200 hover:border-[#10B981] p-6 sm:p-8 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Badge & Icône */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#10B981] group-hover:scale-105 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>

                    {service.badge && (
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-emerald-100 text-[#047857]">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold block mb-1">
                    {service.categoryName}
                  </span>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors font-display mb-1">
                    {service.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#059669] mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Liste des fonctionnalités */}
                  <ul className="space-y-2.5 mb-6">
                    {service.features.slice(0, 4).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] mr-2 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Lien bas de carte */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#10B981] hover:text-[#059669] transition-colors focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-lg py-1"
                  >
                    <span>Explorer ce pôle en détail</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bouton global */}
        <div className="mt-12 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-7 py-3.5 rounded-xl text-sm font-bold text-[#0B1B3D] hover:text-[#10B981] bg-slate-50 hover:bg-slate-100 border border-slate-300 shadow-xs transition-all hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-[#10B981]"
          >
            <span>Découvrir l&apos;ensemble de nos offres de service</span>
            <ArrowRight className="w-4 h-4 ml-2 text-[#10B981]" />
          </Link>
        </div>

      </div>
    </section>
  );
};
