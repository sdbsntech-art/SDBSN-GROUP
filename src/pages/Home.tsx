import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  Code, 
  Compass, 
  ChevronDown
} from 'lucide-react';
import { InteractiveValues } from '../components/sections/InteractiveValues';
import { PhilosophyQuotes } from '../components/sections/PhilosophyQuotes';
import { SERVICES_DATA } from '../data/services';

export const HomePage: React.FC = () => {
  return (
    <div className="relative overflow-hidden w-full">
      
      {/* ========================================================================= */}
      {/* HERO SECTION (Solid Colors, Senior Minimalist Architecture)               */}
      {/* ========================================================================= */}
      <section className="relative min-h-[88vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-[#050811]">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Official Logo Display */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center p-3 sm:p-4 rounded-2xl bg-[#0A0F1D] border border-white/10 mb-2"
          >
            <img
              src="/logo/sdbsnx-logo.png"
              alt="SDBSNX Official Logo"
              className="h-12 sm:h-14 md:h-16 w-auto object-contain"
            />
          </motion.div>

          {/* Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#0A0F1D] border border-white/10 text-xs sm:text-sm font-semibold text-white">
              <span className="w-2 h-2 rounded-full bg-brand-blue" />
              <span>DIGITAL INNOVATION • CYBERSECURITY • EXCELLENCE</span>
            </div>
          </motion.div>

          {/* Main Hero Title - Solid Crisp Typography, NO Gradients */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.15] font-display">
              BUILDING THE FUTURE.
              <br />
              <span className="text-brand-blue">
                SECURING WHAT MATTERS.
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl font-normal text-slate-300 max-w-3xl mx-auto leading-relaxed">
              &ldquo;We build meaningful digital solutions through innovation, integrity and excellence.&rdquo;
            </p>
          </motion.div>

          {/* French Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            SDBSNX accompagne les entreprises, les entrepreneurs et les organisations dans leur transformation numérique grâce à des solutions technologiques innovantes, sécurisées et adaptées à leurs ambitions.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4 w-full sm:w-auto"
          >
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors flex items-center justify-center space-x-2 group text-sm"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/a-propos"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-200 hover:text-white bg-[#0A0F1D] hover:bg-white/10 transition-colors border border-white/10 flex items-center justify-center space-x-2 text-sm"
            >
              <span>Discover SDBSNX</span>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 flex flex-col items-center justify-center text-xs text-slate-400"
          >
            <span className="uppercase tracking-widest text-[11px] mb-2 font-mono">Explorer la plateforme</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-brand-blue" />
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INSTITUTIONAL PILLARS / METRICS OVERVIEW (Full Mobile-Safe Grid)          */}
      {/* ========================================================================= */}
      <section className="border-y border-white/10 bg-[#0A0F1D] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="p-5 rounded-2xl bg-[#0E1629] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-brand-blue text-xs font-mono font-bold uppercase tracking-wider">Engagement</span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1 break-words">Éthique & Rigueur</h4>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Transparence et intégrité au cœur de chaque contrat.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0E1629] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-brand-blue text-xs font-mono font-bold uppercase tracking-wider">Sécurité</span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1 break-words">Security by Design</h4>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Protection proactive et audits strictement autorisés.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0E1629] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-brand-blue text-xs font-mono font-bold uppercase tracking-wider">Innovation</span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1 break-words">Pôle LegalTech</h4>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Convergence du droit et de la technologie moderne.</p>
            </div>

            <div className="p-5 rounded-2xl bg-[#0E1629] border border-white/10 flex flex-col justify-between">
              <div>
                <span className="text-brand-blue text-xs font-mono font-bold uppercase tracking-wider">Rayonnement</span>
                <h4 className="text-lg sm:text-xl font-bold text-white mt-1 break-words">Afrique & Monde</h4>
              </div>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">Standard international adapté aux contextes locaux.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT OVERVIEW & CONVICTION                                               */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-[#050811]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0A0F1D] border border-white/10 text-xs text-brand-blue font-mono uppercase">
                <span>À propos de SDBSNX</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight font-display">
                Résoudre des défis réels grâce à la technologie.
              </h2>

              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                SDBSNX est une agence de solutions numériques d&apos;un genre nouveau. Nous ne concevons pas la technologie comme un simple ensemble de lignes de code ou un effet de mode, mais comme un levier fondamental de transformation économique, de souveraineté et d&apos;efficacité organisationnelle.
              </p>

              <div className="p-5 rounded-2xl bg-[#0A0F1D] border-l-4 border-brand-blue my-4">
                <p className="text-sm sm:text-base text-slate-100 font-medium italic">
                  &ldquo;La technologie n&apos;a de valeur que lorsqu&apos;elle répond à un besoin réel, améliore une situation et crée un impact positif.&rdquo;
                </p>
                <span className="block mt-2 text-xs text-brand-blue uppercase tracking-wider font-mono">
                  — Conviction Fondatrice SDBSNX
                </span>
              </div>

              <p className="text-slate-400 text-sm leading-relaxed">
                Notre mission s&apos;articule autour de la transformation numérique, de la sécurisation des infrastructures critiques et de la création d&apos;outils institutionnels et légaux de premier ordre, particulièrement sur le continent africain.
              </p>

              <div className="pt-2">
                <Link
                  to="/a-propos"
                  className="inline-flex items-center text-sm font-semibold text-white hover:text-brand-blue group"
                >
                  <span>En savoir plus sur notre histoire et nos engagements</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#0A0F1D] border border-white/10 space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-white/5 text-brand-blue">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">Solutions LegalTech</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Plateformes de dématérialisation et gestion documentaire dédiées aux acteurs du droit.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#0A0F1D] border border-white/10 space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-white/5 text-brand-blue">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">Cybersécurité</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Audits autorisés, cartographie des vulnérabilités et renforcement défensif.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#0A0F1D] border border-white/10 space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-white/5 text-brand-blue">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">Dév Web & Mobile</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Applications métier, portails SaaS, PWA performantes et résilientes.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#0A0F1D] border border-white/10 space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-white/5 text-brand-blue">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-white">Conseil Stratégique</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Accompagnement des dirigeants et architecture des systèmes d&apos;information.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SERVICES SUMMARY HIGHLIGHT                                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0F1D] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-blue px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Pôles d&apos;Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              Des solutions concrètes pour des ambitions élevées.
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Nos pôles spécialisés allient savoir-faire technique, rigueur d&apos;ingénierie et conformité légale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#050811] border border-white/10 hover:border-brand-blue transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      {srv.categoryName}
                    </span>
                    {srv.badge && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-blue text-white">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-blue transition-colors mb-1 font-display">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-medium text-slate-400 mb-4">
                    {srv.tagline}
                  </p>

                  <p className="text-sm text-slate-300 leading-relaxed mb-6">
                    {srv.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {srv.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-center text-xs text-slate-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-blue mr-2.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/5">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="inline-flex items-center text-xs font-semibold text-white group-hover:text-brand-blue transition-colors"
                  >
                    <span>Explorer ce pôle en détail</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-slate-200 hover:text-white bg-[#050811] hover:bg-white/10 border border-white/10 transition-colors"
            >
              <span>Découvrir l&apos;ensemble de nos offres de service</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE VALUES SECTION                                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-[#050811]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-blue px-3 py-1 rounded-full bg-[#0A0F1D] border border-white/10">
              Socle Éthique
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              THE SDBSNX CORE VALUES
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Nos valeurs ne sont pas des slogans. Elles constituent la boussole incontournable de chacun de nos engagements techniques et humains.
            </p>
          </div>

          <InteractiveValues />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHILOSOPHY SECTION (THE STANDARD WE LIVE BY)                              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#0A0F1D] border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-blue px-3 py-1 rounded-full bg-[#050811] border border-white/10">
              Notre Philosophie
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white font-display">
              THE STANDARD WE LIVE BY
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              Les principes cardinaux qui forgent la culture de rigueur, de discipline et de loyauté de l&apos;équipe SDBSNX.
            </p>
          </div>

          <PhilosophyQuotes />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INSTITUTIONAL CTA (Solid, Pure, No Gradient)                              */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#050811]">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#0A0F1D] border border-brand-blue text-center space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-white px-3 py-1 rounded-full bg-brand-blue inline-block">
              Collaboration & Partenariat
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight font-display">
              Prêt à concrétiser votre vision technologique ?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Discutons de vos besoins de transformation, d&apos;audits de sécurité ou de plateformes LegalTech. Chaque demande est traitée avec le plus haut niveau de confidentialité et de rigueur.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors flex items-center justify-center space-x-2 text-sm"
              >
                <span>Initier un Projet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 transition-colors text-sm"
              >
                <span>Consulter nos services</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
