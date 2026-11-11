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
    <div className="relative overflow-hidden w-full bg-[#0E1B17] text-[#F4F1EA]">
      
      {/* ========================================================================= */}
      {/* HERO SECTION (Solid Cyber Forest & Emerald Institutional Elegance)        */}
      {/* ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-8 pb-16 px-4 sm:px-6 lg:px-8 bg-[#0E1B17]">
        <div className="max-w-5xl mx-auto text-center relative z-10 space-y-8">
          
          {/* Official Logo Display - Crisp White Badge against dark background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center justify-center p-2 mb-2"
          >
            <div className="bg-white px-3.5 py-2 sm:px-4 sm:py-2.5 rounded-2xl shadow-md border border-[#24403A] flex items-center justify-center">
              <img
                src="/logo/sdbsnx-logo.png"
                alt="SDBSNX Official Logo"
                className="h-12 sm:h-14 md:h-16 w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Institutional Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="flex items-center justify-center"
          >
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#15271F] border border-[#24403A] text-xs sm:text-sm font-bold text-[#6EE7B7] shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              <span className="tracking-wide">DIGITAL INNOVATION • CYBERSECURITY • EXCELLENCE</span>
            </div>
          </motion.div>

          {/* Main Hero Title - Solid Colors, Zero Gradients */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-4"
          >
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#F4F1EA] leading-[1.15] font-display">
              BUILDING THE FUTURE.
              <br />
              <span className="text-[#10B981]">
                SECURING WHAT MATTERS.
              </span>
            </h1>

            <p className="text-base sm:text-xl md:text-2xl font-normal text-[#F4F1EA]/90 max-w-3xl mx-auto leading-relaxed">
              &ldquo;We build meaningful digital solutions through innovation, integrity and excellence.&rdquo;
            </p>
          </motion.div>

          {/* French Narrative */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-sm sm:text-base text-[#9DB2A8] max-w-2xl mx-auto leading-relaxed"
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
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold bg-[#10B981] hover:bg-[#059669] text-[#04231A] transition-all shadow-sm flex items-center justify-center space-x-2 group text-sm active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>

            <Link
              to="/a-propos"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-[#F4F1EA] hover:text-[#6EE7B7] bg-[#15271F] hover:bg-[#1C332A] transition-colors border border-[#24403A] shadow-sm flex items-center justify-center space-x-2 text-sm"
            >
              <span>Discover SDBSNX</span>
            </Link>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="pt-8 flex flex-col items-center justify-center text-xs text-[#9DB2A8]"
          >
            <span className="uppercase tracking-widest text-[11px] mb-2 font-mono font-semibold text-[#9DB2A8]">Explorer la plateforme</span>
            <ChevronDown className="w-4 h-4 animate-bounce text-[#10B981]" />
          </motion.div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INSTITUTIONAL PILLARS OVERVIEW (Responsive, No Overflow, Pure Solid)      */}
      {/* ========================================================================= */}
      <section className="border-y border-[#24403A] bg-[#08100D] py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            
            <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] shadow-sm flex flex-col justify-between overflow-hidden min-w-0">
              <div className="min-w-0">
                <span className="text-[#6EE7B7] text-xs font-mono font-bold uppercase tracking-wider block">Engagement</span>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-[#F4F1EA] mt-1 break-words">Éthique & Rigueur</h4>
              </div>
              <p className="text-xs text-[#9DB2A8] mt-2.5 leading-relaxed">Transparence et intégrité au cœur de chaque contrat.</p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] shadow-sm flex flex-col justify-between overflow-hidden min-w-0">
              <div className="min-w-0">
                <span className="text-[#6EE7B7] text-xs font-mono font-bold uppercase tracking-wider block">Sécurité</span>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-[#F4F1EA] mt-1 break-words">Security by Design</h4>
              </div>
              <p className="text-xs text-[#9DB2A8] mt-2.5 leading-relaxed">Protection proactive et audits strictement autorisés.</p>
            </div>

            {/* Pôle LegalTech - Perfectly scaled without text overflow */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] shadow-sm flex flex-col justify-between overflow-hidden min-w-0">
              <div className="min-w-0">
                <span className="text-[#6EE7B7] text-xs font-mono font-bold uppercase tracking-wider block">Innovation</span>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-[#F4F1EA] mt-1 break-words">Pôle LegalTech</h4>
              </div>
              <p className="text-xs text-[#9DB2A8] mt-2.5 leading-relaxed">Convergence du droit et de la technologie moderne.</p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] shadow-sm flex flex-col justify-between overflow-hidden min-w-0">
              <div className="min-w-0">
                <span className="text-[#6EE7B7] text-xs font-mono font-bold uppercase tracking-wider block">Rayonnement</span>
                <h4 className="text-base sm:text-lg lg:text-xl font-bold text-[#F4F1EA] mt-1 break-words">Afrique & Monde</h4>
              </div>
              <p className="text-xs text-[#9DB2A8] mt-2.5 leading-relaxed">Standard international adapté aux contextes locaux.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT OVERVIEW & CONVICTION                                               */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-[#0E1B17]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#15271F] border border-[#24403A] text-xs text-[#6EE7B7] font-mono uppercase font-bold">
                <span>À propos de SDBSNX</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-bold text-[#F4F1EA] tracking-tight font-display">
                Résoudre des défis réels grâce à la technologie.
              </h2>

              <p className="text-[#9DB2A8] leading-relaxed text-sm sm:text-base">
                SDBSNX est une agence de solutions numériques d&apos;un genre nouveau. Nous ne concevons pas la technologie comme un simple ensemble de lignes de code ou un effet de mode, mais comme un levier fondamental de transformation économique, de souveraineté et d&apos;efficacité organisationnelle.
              </p>

              <div className="p-5 rounded-2xl bg-[#15271F] border-l-4 border-[#10B981] my-4 border border-[#24403A]">
                <p className="text-sm sm:text-base text-[#F4F1EA] font-medium italic">
                  &ldquo;La technologie n&apos;a de valeur que lorsqu&apos;elle répond à un besoin réel, améliore une situation et crée un impact positif.&rdquo;
                </p>
                <span className="block mt-2 text-xs text-[#6EE7B7] uppercase tracking-wider font-mono font-bold">
                  — Conviction Fondatrice SDBSNX
                </span>
              </div>

              <p className="text-[#9DB2A8] text-sm leading-relaxed">
                Notre mission s&apos;articule autour de la transformation numérique, de la sécurisation des infrastructures critiques et de la création d&apos;outils institutionnels et légaux de premier ordre, particulièrement sur le continent africain.
              </p>

              <div className="pt-2">
                <Link
                  to="/a-propos"
                  className="inline-flex items-center text-sm font-semibold text-[#10B981] hover:text-[#6EE7B7] group"
                >
                  <span>En savoir plus sur notre histoire et nos engagements</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] transition-colors space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#F4F1EA]">Solutions LegalTech</h3>
                  <p className="text-xs text-[#9DB2A8] leading-relaxed">
                    Plateformes de dématérialisation et gestion documentaire dédiées aux acteurs du droit.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] transition-colors space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#F4F1EA]">Cybersécurité</h3>
                  <p className="text-xs text-[#9DB2A8] leading-relaxed">
                    Audits autorisés, cartographie des vulnérabilités et renforcement défensif.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] transition-colors space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#F4F1EA]">Dév Web & Mobile</h3>
                  <p className="text-xs text-[#9DB2A8] leading-relaxed">
                    Applications métier, portails SaaS, PWA performantes et résilientes.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] transition-colors space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#F4F1EA]">Conseil Stratégique</h3>
                  <p className="text-xs text-[#9DB2A8] leading-relaxed">
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
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#08100D] border-t border-[#24403A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6EE7B7] px-3 py-1 rounded-full bg-[#15271F] border border-[#24403A] font-bold">
              Pôles d&apos;Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F4F1EA] font-display">
              Des solutions concrètes pour des ambitions élevées.
            </h2>
            <p className="text-[#9DB2A8] text-sm sm:text-base">
              Nos pôles spécialisés allient savoir-faire technique, rigueur d&apos;ingénierie et conformité légale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="p-6 sm:p-8 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] shadow-sm transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#9DB2A8] font-semibold">
                      {srv.categoryName}
                    </span>
                    {srv.badge && (
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#10B981] text-[#04231A] font-bold">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#F4F1EA] group-hover:text-[#6EE7B7] transition-colors mb-1 font-display">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-medium text-[#10B981] mb-4">
                    {srv.tagline}
                  </p>

                  <p className="text-sm text-[#9DB2A8] leading-relaxed mb-6">
                    {srv.shortDescription}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {srv.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-center text-xs text-[#F4F1EA]/80">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mr-2.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#24403A]">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#10B981] hover:text-[#6EE7B7] transition-colors"
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
              className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-[#F4F1EA] hover:text-[#6EE7B7] bg-[#15271F] hover:bg-[#1C332A] border border-[#24403A] shadow-sm transition-colors"
            >
              <span>Découvrir l&apos;ensemble de nos offres de service</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#10B981]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE VALUES SECTION                                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-[#0E1B17]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6EE7B7] px-3 py-1 rounded-full bg-[#15271F] border border-[#24403A] font-bold">
              Socle Éthique
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F4F1EA] font-display">
              THE SDBSNX CORE VALUES
            </h2>
            <p className="text-[#9DB2A8] text-sm sm:text-base">
              Nos valeurs ne sont pas des slogans. Elles constituent la boussole incontournable de chacun de nos engagements techniques et humains.
            </p>
          </div>

          <InteractiveValues />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHILOSOPHY SECTION (THE STANDARD WE LIVE BY)                              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-[#08100D] border-t border-[#24403A]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#6EE7B7] px-3 py-1 rounded-full bg-[#15271F] border border-[#24403A] font-bold">
              Notre Philosophie
            </span>
            <h2 className="text-2xl sm:text-4xl font-bold text-[#F4F1EA] font-display">
              THE STANDARD WE LIVE BY
            </h2>
            <p className="text-[#9DB2A8] text-sm sm:text-base">
              Les principes cardinaux qui forgent la culture de rigueur, de discipline et de loyauté de l&apos;équipe SDBSNX.
            </p>
          </div>

          <PhilosophyQuotes />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INSTITUTIONAL CTA                                                         */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-[#0E1B17]">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#15271F] border border-[#24403A] text-center space-y-6 shadow-xl">
            <span className="text-xs font-mono uppercase tracking-widest text-[#04231A] px-3.5 py-1 rounded-full bg-[#10B981] inline-block font-bold">
              Collaboration & Partenariat
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold text-[#F4F1EA] tracking-tight font-display">
              Prêt à concrétiser votre vision technologique ?
            </h2>

            <p className="text-sm sm:text-base text-[#9DB2A8] max-w-2xl mx-auto leading-relaxed">
              Discutons de vos besoins de transformation, d&apos;audits de sécurité ou de plateformes LegalTech. Chaque demande est traitée avec le plus haut niveau de confidentialité et de rigueur.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-[#04231A] bg-[#10B981] hover:bg-[#059669] transition-colors shadow-sm flex items-center justify-center space-x-2 text-sm"
              >
                <span>Initier un Projet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-semibold text-[#F4F1EA] hover:text-[#6EE7B7] bg-[#0E1B17] hover:bg-[#1C332A] border border-[#24403A] shadow-sm transition-colors text-sm"
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
