import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, ShieldCheck, Code, Compass } from 'lucide-react';

export const HomeAboutSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-24 px-4 sm:px-6 lg:px-8 bg-[#123D3A] text-[#F3E3C3] border-t border-[#10B981]/20 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-[#0B2B2A] border border-[#10B981]/30 text-xs text-[#10B981] font-mono uppercase font-bold">
              <span>À propos d&apos;Alkeb.dev</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F3E3C3] tracking-tight font-display">
              Résoudre des défis réels grâce à la technologie.
            </h2>

            <p className="text-[#F3E3C3]/80 leading-relaxed text-sm sm:text-base">
              Alkeb.dev est une agence technologique d&apos;un genre nouveau. Nous ne concevons pas le numérique comme un simple effet de mode, mais comme un levier fondamental de souveraineté, de transformation économique et d&apos;efficacité organisationnelle au Sénégal et en Afrique.
            </p>

            <div className="p-5 rounded-2xl bg-[#0B2B2A] border-l-4 border-[#10B981] my-4 border border-white/10 shadow-lg">
              <p className="text-sm sm:text-base text-[#F3E3C3] font-medium italic">
                &ldquo;La technologie n&apos;a de valeur que lorsqu&apos;elle répond à un besoin réel, améliore une situation et crée un impact positif.&rdquo;
              </p>
              <span className="block mt-2 text-xs text-[#F2B134] uppercase tracking-wider font-mono font-bold">
                — Conviction Fondatrice Alkeb.dev
              </span>
            </div>

            <p className="text-[#F3E3C3]/75 text-sm leading-relaxed">
              Notre mission s&apos;articule autour de la transformation numérique, de la sécurisation des infrastructures critiques et de la création d&apos;outils institutionnels et légaux de premier ordre.
            </p>

            <div className="pt-2">
              <Link
                to="/a-propos"
                className="inline-flex items-center text-sm font-bold text-[#10B981] hover:text-[#F2B134] group transition-colors"
              >
                <span>En savoir plus sur notre histoire et nos engagements</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 sm:p-6 rounded-2xl bg-[#0B2B2A] border border-white/10 hover:border-[#10B981] hover:shadow-xl transition-all space-y-3">
                <div className="p-2.5 w-fit rounded-xl bg-[#123D3A] text-[#10B981] border border-[#10B981]/30">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#F3E3C3] font-display">Solutions LegalTech</h3>
                <p className="text-xs text-[#F3E3C3]/70 leading-relaxed">
                  Plateformes de dématérialisation et gestion documentaire dédiées aux acteurs du droit.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#0B2B2A] border border-white/10 hover:border-[#F2B134] hover:shadow-xl transition-all space-y-3">
                <div className="p-2.5 w-fit rounded-xl bg-[#123D3A] text-[#F2B134] border border-[#F2B134]/30">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#F3E3C3] font-display">Cybersécurité</h3>
                <p className="text-xs text-[#F3E3C3]/70 leading-relaxed">
                  Audits autorisés, cartographie des vulnérabilités et renforcement défensif.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#0B2B2A] border border-white/10 hover:border-[#10B981] hover:shadow-xl transition-all space-y-3">
                <div className="p-2.5 w-fit rounded-xl bg-[#123D3A] text-[#10B981] border border-[#10B981]/30">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#F3E3C3] font-display">Dév Web &amp; Mobile</h3>
                <p className="text-xs text-[#F3E3C3]/70 leading-relaxed">
                  Applications métier, portails SaaS, PWA performantes et résilientes.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#0B2B2A] border border-white/10 hover:border-[#F2B134] hover:shadow-xl transition-all space-y-3">
                <div className="p-2.5 w-fit rounded-xl bg-[#123D3A] text-[#F2B134] border border-[#F2B134]/30">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#F3E3C3] font-display">Conseil Stratégique</h3>
                <p className="text-xs text-[#F3E3C3]/70 leading-relaxed">
                  Accompagnement des dirigeants et architecture des systèmes d&apos;information.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
