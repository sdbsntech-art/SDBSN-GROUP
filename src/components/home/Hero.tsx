import React, { useRef, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ShieldCheck, Scale, Code, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

const ROTATING_DOMAINS = [
  'LegalTech',
  'Cybersécurité',
  'Web et mobile',
  'Conseil numérique',
];

// Mots du titre principal pour l'animation mot par mot avec masque
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

  // Mise à jour de la lueur suivant la souris via variables CSS sans re-render React
  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    containerRef.current.style.setProperty('--mx', `${x}px`);
    containerRef.current.style.setProperty('--my', `${y}px`);
  };

  // Rotation automatique du mot clé dans le sous-titre
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
      className="relative min-h-[92vh] flex items-center pt-28 pb-20 px-4 sm:px-6 lg:px-8 bg-[#0B2B2A] text-[#F3E3C3] overflow-hidden select-none"
    >
      {/* 1. Lueur 1 : Émeraude flottante dérivante */}
      <div
        className="absolute -top-20 -left-20 w-[420px] sm:w-[600px] h-[420px] sm:h-[600px] rounded-full bg-[#10B981]/25 blur-[120px] pointer-events-none glow-drift-emerald"
        aria-hidden="true"
      />

      {/* 2. Lueur 2 : Or solaire flottante dérivante */}
      <div
        className="absolute top-1/3 -right-24 w-[380px] sm:w-[550px] h-[380px] sm:h-[550px] rounded-full bg-[#F2B134]/20 blur-[130px] pointer-events-none glow-drift-gold"
        aria-hidden="true"
      />

      {/* 3. Lueur interactive liée à la souris (--mx, --my) sans aucun re-render */}
      <div
        className="absolute inset-0 mouse-glow-spotlight"
        aria-hidden="true"
      />

      {/* Grille de motifs subtils pour profondeur optique */}
      <div
        className="absolute inset-0 bg-[radial-gradient(#F3E3C3_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Colonne gauche : Contenu textuel et H1 mot par mot */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Badge de réassurance institutionnelle */}
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="inline-flex items-center space-x-2.5 px-4 py-1.5 rounded-full bg-[#123D3A]/80 border border-[#10B981]/30 text-xs sm:text-sm font-medium text-[#F3E3C3] shadow-lg backdrop-blur-md"
            >
              <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono tracking-wider text-[#F2B134] uppercase text-[11px] sm:text-xs font-semibold">
                Sénégal • Afrique de l&apos;Ouest • Hub d&apos;Excellence
              </span>
            </motion.div>

            {/* H1 Présent dans le DOM dès le départ (SEO strict) avec animation mot par mot via masque */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-[1.1] font-display text-[#F3E3C3]">
              {HEADLINE_WORDS.map((word, index) => {
                const isEmeraldPart = index >= 4; // « Sécuriser ce qui compte »
                return (
                  <span
                    key={index}
                    className="inline-block overflow-hidden align-top mr-3 sm:mr-4 mb-1"
                  >
                    <motion.span
                      initial={{ y: '105%', opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        duration: 0.65,
                        delay: 0.15 + index * 0.08,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                      className={`inline-block ${
                        isEmeraldPart ? 'text-[#10B981]' : 'text-[#F3E3C3]'
                      }`}
                    >
                      {word}
                    </motion.span>
                  </span>
                );
              })}
            </h1>

            {/* Sous-titre dynamique avec AnimatePresence */}
            <div className="space-y-3">
              <p className="text-lg sm:text-2xl font-normal text-[#F3E3C3]/90 leading-relaxed max-w-2xl">
                Plateforme de solutions numériques de pointe au Sénégal spécialisée en{' '}
                <span className="inline-block relative min-w-[210px] sm:min-w-[240px] font-bold text-[#F2B134]">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={ROTATING_DOMAINS[domainIndex]}
                      initial={{ opacity: 0, y: 14, filter: 'blur(4px)' }}
                      animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                      exit={{ opacity: 0, y: -14, filter: 'blur(4px)' }}
                      transition={{ duration: 0.45, ease: 'easeOut' }}
                      className="absolute left-0 top-0 border-b-2 border-[#10B981] pb-0.5 whitespace-nowrap"
                    >
                      {ROTATING_DOMAINS[domainIndex]}
                    </motion.span>
                  </AnimatePresence>
                  {/* Espace invisible pour réserver la hauteur du mot clé */}
                  <span className="opacity-0 select-none">Conseil numérique</span>
                </span>
              </p>

              <p className="text-sm sm:text-base text-[#F3E3C3]/75 leading-relaxed max-w-xl">
                Alkeb.dev accompagne les cabinets d&apos;avocats, banques, institutions publiques et entreprises ambitieuses avec des architectures souveraines, sécurisées et conformes aux normes internationales.
              </p>
            </div>

            {/* Boutons d'action avec animations légères (transform & opacity) et focus visible */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center px-8 py-4 rounded-xl font-bold text-sm bg-[#10B981] text-[#0B2B2A] hover:bg-[#059669] hover:text-white transition-all duration-300 shadow-lg shadow-[#10B981]/20 hover:-translate-y-0.5 hover:shadow-[#10B981]/40 focus-visible:ring-2 focus-visible:ring-[#F2B134] focus-visible:outline-none"
              >
                <span>Démarrer un Projet</span>
                <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <a
                href={getWhatsAppUrl('Bonjour Alkeb.dev, je souhaite échanger directement avec votre équipe technique.')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-7 py-4 rounded-xl font-bold text-sm text-[#F3E3C3] bg-[#123D3A] hover:bg-[#174B47] border border-[#10B981]/40 transition-all duration-300 hover:-translate-y-0.5 shadow-md focus-visible:ring-2 focus-visible:ring-[#10B981] focus-visible:outline-none"
              >
                <MessageCircle className="w-4 h-4 mr-2 text-[#10B981]" />
                <span>WhatsApp Direct</span>
              </a>

              <Link
                to="/services"
                className="inline-flex items-center justify-center px-6 py-4 rounded-xl font-semibold text-sm text-[#F3E3C3]/80 hover:text-white hover:bg-white/5 transition-all duration-200"
              >
                Découvrir nos pôles
              </Link>
            </motion.div>

            {/* Badges de garanties sous les boutons */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#123D3A]">
              <div className="flex items-center space-x-2 text-xs text-[#F3E3C3]/80">
                <Scale className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span>LegalTech Loi 2008-08</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#F3E3C3]/80">
                <ShieldCheck className="w-4 h-4 text-[#F2B134] flex-shrink-0" />
                <span>Audits OWASP & Pentest</span>
              </div>
              <div className="flex items-center space-x-2 text-xs text-[#F3E3C3]/80">
                <Code className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                <span>Ingénierie Dakar</span>
              </div>
            </div>

          </div>

          {/* Colonne droite : Carte visuelle premium */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
            className="lg:col-span-5 relative"
          >
            {/* Halo lumineux d'arrière-plan de la carte */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#10B981]/30 via-[#F2B134]/15 to-transparent rounded-3xl blur-2xl -z-10" />

            {/* Conteneur principal de la carte */}
            <div className="relative rounded-3xl bg-[#123D3A]/90 border border-[#10B981]/30 shadow-2xl p-6 sm:p-8 backdrop-blur-xl space-y-6">
              
              {/* En-tête de carte façon console / studio */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10">
                <div className="flex items-center space-x-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80" />
                  <span className="w-3 h-3 rounded-full bg-[#F2B134]/80" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]" />
                </div>
                <span className="text-[11px] font-mono tracking-widest text-[#F2B134] uppercase font-semibold">
                  Alkeb.dev Core Engine
                </span>
              </div>

              {/* Visuel illustration d'ingénieurs africains de haut niveau */}
              <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-[#0B2B2A]">
                <img
                  src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1000&q=80"
                  alt="Équipe d'ingénieurs et chercheurs en technologies de pointe Alkeb.dev à Dakar"
                  className="w-full h-full object-cover object-center"
                  width="1000"
                  height="625"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B2B2A] via-[#0B2B2A]/30 to-transparent" />
                
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <span className="inline-block px-2 py-0.5 rounded bg-[#10B981] text-[#0B2B2A] font-mono font-bold text-[10px] uppercase mb-1">
                    Souveraineté Numérique
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-[#F3E3C3]">
                    L&apos;excellence technologique ouest-africaine
                  </p>
                </div>
              </div>

              {/* Métriques clés en temps réel */}
              <div className="grid grid-cols-2 gap-3 pt-1">
                <div className="p-3.5 rounded-xl bg-[#0B2B2A]/80 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-[#F3E3C3]/60 uppercase">Disponibilité</span>
                  <p className="text-xl font-bold text-[#10B981] font-display">99.9% SLA</p>
                  <span className="text-[11px] text-[#F3E3C3]/75 block">Haute résilience cloud</span>
                </div>
                <div className="p-3.5 rounded-xl bg-[#0B2B2A]/80 border border-white/5 space-y-1">
                  <span className="text-[10px] font-mono text-[#F3E3C3]/60 uppercase">Conformité</span>
                  <p className="text-xl font-bold text-[#F2B134] font-display">Loi 2008-08</p>
                  <span className="text-[11px] text-[#F3E3C3]/75 block">Valeur probatoire intégrale</span>
                </div>
              </div>

              {/* Badge flottant bas */}
              <div className="p-3 rounded-xl bg-[#10B981]/15 border border-[#10B981]/40 flex items-center justify-between text-xs">
                <span className="text-[#F3E3C3] font-medium">Besoins d&apos;une étude personnalisée ?</span>
                <Link
                  to="/contact"
                  className="font-bold text-[#10B981] hover:text-[#F2B134] transition-colors flex items-center"
                >
                  <span>Consulter</span>
                  <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

