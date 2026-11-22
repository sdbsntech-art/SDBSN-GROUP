import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, MessageCircle, CheckCircle2, Zap, Award } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

const ROTATING_DOMAINS = [
  'LegalTech',
  'Cybersécurité',
  'Web et mobile',
  'Conseil numérique',
];

const HEADLINE_WORDS = [
  'Bâtir',
  'le',
  'futur',
  'numérique.',
  'Sécuriser',
  'ce',
  'qui',
  'compte.',
];

export const Hero: React.FC = () => {
  const containerRef = useRef<HTMLElement>(null);
  const [domainIndex, setDomainIndex] = useState(0);

  // Lueur interactive suivant la souris sans aucun re-render React
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mx', `${x}px`);
    containerRef.current.style.setProperty('--my', `${y}px`);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setDomainIndex((prev) => (prev + 1) % ROTATING_DOMAINS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative pt-8 pb-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200/60 overflow-hidden"
    >
      {/* 1. Lueur émeraude dérivante lente */}
      <div
        className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/50 rounded-full blur-3xl pointer-events-none glow-drift-emerald"
        aria-hidden="true"
      />

      {/* 2. Lueur bleue dérivante lente */}
      <div
        className="absolute bottom-0 left-10 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none glow-drift-gold"
        aria-hidden="true"
      />

      {/* 3. Lueur interactive suivant le curseur (--mx, --my) sans re-render */}
      <div
        className="absolute inset-0 mouse-glow-spotlight"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Colonne gauche : Contenu textuel et H1 avec animation mot par mot */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badge de réassurance institutionnelle */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs sm:text-sm font-bold text-[#059669] shadow-xs"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="tracking-wide">INNOVATION NUMÉRIQUE • CYBERSÉCURITÉ • SÉNÉGAL &amp; AFRIQUE</span>
            </motion.div>

            {/* H1 présent dans le DOM dès le départ (SEO strict) animé mot par mot avec masque */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1B3D] tracking-tight leading-[1.12] font-display">
              {HEADLINE_WORDS.map((word, index) => {
                const isEmeraldPart = index >= 4; // « Sécuriser ce qui compte. »
                return (
                  <span
                    key={index}
                    className="inline-block overflow-hidden align-top mr-2.5 sm:mr-3.5 mb-1"
                  >
                    <motion.span
                      initial={{ y: '105%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.1 + index * 0.07,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`inline-block ${
                        isEmeraldPart ? 'text-[#10B981]' : 'text-[#0B1B3D]'
                      }`}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </h1>

            {/* Sous-titre avec mot qui change automatiquement (AnimatePresence) */}
            <div className="space-y-3">
              <p className="text-base sm:text-xl font-medium text-slate-700 leading-relaxed max-w-2xl">
                Alkeb.dev propulse les organisations avec des solutions expertes en{' '}
                <span className="inline-block relative min-w-[200px] sm:min-w-[230px] font-bold text-[#10B981]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING_DOMAINS[domainIndex]}
                      initial={{ opacity: 0, y: 12, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -12, filter: 'blur(4px)' }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="absolute left-0 top-0 border-b-2 border-[#10B981] pb-0.5 whitespace-nowrap text-[#059669]"
                    >
                      {ROTATING_DOMAINS[domainIndex]}
                    </motion.span>
                  </AnimatePresence>
                  <span className="opacity-0 select-none">Conseil numérique</span>
                </span>
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed max-w-2xl">
                Des architectures logicielles souveraines, des audits de cybersécurité stricts et des plateformes LegalTech de premier plan au Sénégal et en Afrique.
              </p>
            </div>

            {/* Puces de propositions de valeur */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-600 font-medium"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span>Conception sur-mesure &amp; souveraine</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <span>Audits de sécurité &amp; conformité RGPD/CDP</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span>Pôle spécialisé LegalTech &amp; Dématérialisation</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                <span>Équipe d&apos;ingénieurs basés à Dakar</span>
              </div>
            </motion.div>

            {/* CTAs avec hover translateY */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center gap-3.5 pt-3 w-full sm:w-auto"
            >
              <Link
                to="/contact"
                className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold bg-[#10B981] hover:bg-[#059669] text-white transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 flex items-center justify-center space-x-2 group text-sm active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-[#10B981]"
              >
                <span>Démarrer un Projet</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={getWhatsAppUrl('Bonjour Alkeb.dev, je souhaite échanger au sujet de mon projet.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-[#0B1B3D] hover:text-[#059669] bg-white hover:bg-slate-50 border border-slate-300 shadow-sm hover:-translate-y-0.5 flex items-center justify-center space-x-2 text-sm transition-all focus-visible:ring-2 focus-visible:ring-[#10B981]"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>Échanger sur WhatsApp</span>
              </a>
            </motion.div>

            {/* Mini statistiques de réassurance */}
            <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
              <div>
                <span className="font-extrabold text-[#0B1B3D] text-base block font-display">+50 Projets</span>
                <span>Déployés avec succès</span>
              </div>
              <div className="h-7 w-px bg-slate-200" />
              <div>
                <span className="font-extrabold text-[#10B981] text-base block font-display">100% Souverain</span>
                <span>Données hébergées en sécurité</span>
              </div>
              <div className="h-7 w-px bg-slate-200" />
              <div>
                <span className="font-extrabold text-[#2563EB] text-base block font-display">Dakar &amp; International</span>
                <span>Accompagnement continu</span>
              </div>
            </div>

          </div>

          {/* Colonne droite : Carte visuelle avec badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-2xl bg-white group">
              
              <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                  alt="Équipe d'ingénieurs et talents technologiques africains Alkeb.dev"
                  className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                  width="1200"
                  height="825"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#10B981] text-white text-[11px] font-bold font-mono uppercase mb-1">
                    Excellence &amp; Innovation
                  </span>
                  <h2 className="text-base sm:text-lg font-bold leading-tight font-display">
                    L&apos;Ingénierie Numérique Africaine aux Standards Mondiaux
                  </h2>
                </div>
              </div>

              <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#10B981]">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-[#0B1B3D]">Security by Design</p>
                    <p className="text-[11px] text-slate-500">Audits certifiés &amp; dématérialisation</p>
                  </div>
                </div>

                <Link
                  to="/services"
                  className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center"
                >
                  <span>Explorer</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

            </div>

            {/* Badge flottant 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hidden sm:flex absolute -top-5 -left-5 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200 shadow-xl items-center space-x-3 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center font-bold">
                <Zap className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-extrabold text-[#0B1B3D]">Performances 99.9%</p>
                <p className="text-[10px] text-slate-500 font-medium">Haute disponibilité &amp; résilience</p>
              </div>
            </motion.div>

            {/* Badge flottant 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden sm:flex absolute -bottom-5 -right-5 bg-[#0B1B3D] text-white p-3.5 rounded-2xl border border-slate-800 shadow-xl items-center space-x-3 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-[#10B981] text-white flex items-center justify-center font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">Label d&apos;Excellence</p>
                <p className="text-[10px] text-slate-300 font-mono">Dakar • Abidjan • International</p>
              </div>
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};
