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
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#0B2B2A] text-[#F3E3C3] relative overflow-hidden"
    >
      {/* Lueurs décoratives discrètes */}
      <div className="absolute top-1/4 left-0 w-96 h-96 rounded-full bg-[#10B981]/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 rounded-full bg-[#F2B134]/10 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* En-tête de section avec animation d'entrée */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-20 space-y-4"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#123D3A] border border-[#10B981]/30 text-xs font-mono uppercase tracking-wider text-[#10B981] font-bold">
            <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            <span>Pôles d&apos;Expertise Majeurs</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3E3C3] tracking-tight font-display">
            Des solutions sur-mesure pour des défis réels.
          </h2>

          <p className="text-sm sm:text-base text-[#F3E3C3]/80 leading-relaxed">
            De la dématérialisation juridique certifiée à la protection offensive de vos systèmes d&apos;information, nos équipes d&apos;ingénieurs déploient des architectures logicielles fiables et évolutives.
          </p>
        </motion.div>

        {/* Grille des cartes de services avec apparition en cascade et hover émeraude */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const Icon = ICONS_MAP[service.iconName] || Scale;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 35 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 35 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative rounded-3xl bg-[#123D3A]/80 border border-white/10 hover:border-[#10B981] p-8 sm:p-10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-[#10B981]/15 flex flex-col justify-between"
              >
                <div>
                  
                  {/* Badge & Icône */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-[#0B2B2A] border border-[#10B981]/30 flex items-center justify-center text-[#10B981] group-hover:bg-[#10B981] group-hover:text-[#0B2B2A] transition-colors duration-300">
                      <Icon className="w-7 h-7" />
                    </div>

                    {service.badge && (
                      <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-[#10B981]/20 text-[#10B981] border border-[#10B981]/30">
                        {service.badge}
                      </span>
                    )}
                  </div>

                  {/* Catégorie & Titre */}
                  <span className="text-xs font-mono uppercase tracking-widest text-[#F2B134] font-semibold block mb-1">
                    {service.categoryName}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#F3E3C3] group-hover:text-white transition-colors font-display mb-2">
                    {service.title}
                  </h3>

                  <p className="text-sm font-semibold text-[#10B981] mb-4">
                    {service.tagline}
                  </p>

                  <p className="text-sm text-[#F3E3C3]/75 leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Liste des fonctionnalités clés */}
                  <ul className="space-y-2.5 mb-8">
                    {service.features.slice(0, 4).map((feature, fIdx) => (
                      <li key={fIdx} className="flex items-start text-xs sm:text-sm text-[#F3E3C3]/90">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] mr-2.5 mt-0.5 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                </div>

                {/* Lien d'action au bas de carte */}
                <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                  <Link
                    to={`/services/${service.slug}`}
                    className="inline-flex items-center text-sm font-bold text-[#10B981] hover:text-[#F2B134] transition-colors focus-visible:ring-2 focus-visible:ring-[#10B981] rounded-lg py-1 px-2"
                  >
                    <span>Explorer l&apos;offre détaillée</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <span className="text-[11px] font-mono text-[#F3E3C3]/50">
                    Pôle #{index + 1}
                  </span>
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Bouton global vers l'ensemble des services */}
        <div className="mt-14 sm:mt-16 text-center">
          <Link
            to="/services"
            className="inline-flex items-center px-8 py-4 rounded-xl text-sm font-bold text-[#0B2B2A] bg-[#F2B134] hover:bg-[#DDA02A] transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-[#F2B134]/20 focus-visible:ring-2 focus-visible:ring-[#10B981]"
          >
            <span>Voir l&apos;ensemble de nos solutions logicielles</span>
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
};
