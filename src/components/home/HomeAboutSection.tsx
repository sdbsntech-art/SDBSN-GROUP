import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, ShieldCheck, Code, Compass } from 'lucide-react';

export const HomeAboutSection: React.FC = () => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 text-[#0B1B3D] border-t border-slate-200 relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-[#059669] font-mono uppercase font-bold">
              <span>À propos d&apos;Alkeb.dev</span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
              Résoudre des défis réels grâce à la technologie.
            </h2>

            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Alkeb.dev est une agence technologique d&apos;un genre nouveau. Nous ne concevons pas le numérique comme un simple effet de mode, mais comme un levier fondamental de souveraineté, de transformation économique et d&apos;efficacité organisationnelle au Sénégal et en Afrique.
            </p>

            <div className="p-5 rounded-2xl bg-white border-l-4 border-[#10B981] my-4 border border-slate-200 shadow-xs">
              <p className="text-sm sm:text-base text-[#0B1B3D] font-medium italic">
                &ldquo;La technologie n&apos;a de valeur que lorsqu&apos;elle répond à un besoin réel, améliore une situation et crée un impact positif.&rdquo;
              </p>
              <span className="block mt-2 text-xs text-[#059669] uppercase tracking-wider font-mono font-bold">
                — Conviction Fondatrice Alkeb.dev
              </span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Notre mission s&apos;articule autour de la transformation numérique, de la sécurisation des infrastructures critiques et de la création d&apos;outils institutionnels et légaux de premier ordre.
            </p>

            <div className="pt-2">
              <Link
                to="/a-propos"
                className="inline-flex items-center text-sm font-bold text-[#10B981] hover:text-[#059669] group transition-colors"
              >
                <span>En savoir plus sur notre histoire et nos engagements</span>
                <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#10B981] hover:shadow-md transition-all space-y-3 hover:-translate-y-1">
                <div className="p-2.5 w-fit rounded-xl bg-emerald-50 text-[#10B981]">
                  <Scale className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#0B1B3D] font-display">Solutions LegalTech</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Plateformes de dématérialisation et gestion documentaire dédiées aux acteurs du droit.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#2563EB] hover:shadow-md transition-all space-y-3 hover:-translate-y-1">
                <div className="p-2.5 w-fit rounded-xl bg-blue-50 text-[#2563EB]">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#0B1B3D] font-display">Cybersécurité</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Audits autorisés, cartographie des vulnérabilités et renforcement défensif.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#10B981] hover:shadow-md transition-all space-y-3 hover:-translate-y-1">
                <div className="p-2.5 w-fit rounded-xl bg-emerald-50 text-[#10B981]">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#0B1B3D] font-display">Dév Web &amp; Mobile</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Applications métier, portails SaaS, PWA performantes et résilientes.
                </p>
              </div>

              <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#2563EB] hover:shadow-md transition-all space-y-3 hover:-translate-y-1">
                <div className="p-2.5 w-fit rounded-xl bg-blue-50 text-[#2563EB]">
                  <Compass className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#0B1B3D] font-display">Conseil Stratégique</h3>
                <p className="text-xs text-slate-600 leading-relaxed">
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
