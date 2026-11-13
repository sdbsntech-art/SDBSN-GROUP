import React from 'react';
import { Link } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services';
import { 
  Scale, 
  Shield, 
  Code, 
  Compass, 
  ArrowRight, 
  CheckCircle2,
  ShieldAlert
} from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const ServicesIndexPage: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-7 h-7 text-[#10B981]" />;
      case 'Shield':
        return <Shield className="w-7 h-7 text-[#2563EB]" />;
      case 'Code':
        return <Code className="w-7 h-7 text-[#10B981]" />;
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#2563EB]" />;
      default:
        return <Code className="w-7 h-7 text-[#10B981]" />;
    }
  };

  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-slate-50 text-[#0B1B3D]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Navigation retour */}
        <div>
          <BackButton to="/" label="Retour à l'accueil" />
        </div>

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-[#059669] uppercase font-bold">
            <span>Catalogue d&apos;Expertises</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
            Nos Solutions & Services
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Quatre pôles d&apos;intervention spécialisés pour accompagner la transformation numérique, la résilience et la conformité de vos organisations au Sénégal et en Afrique.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8 sm:space-y-12">
          {SERVICES_DATA.map((srv, index) => (
            <div
              key={srv.id}
              className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 hover:border-[#10B981] shadow-xs hover:shadow-xl transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                
                {/* Column 1: Info */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 flex-shrink-0">
                        {getIcon(srv.iconName)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#059669] block font-bold">
                          Pôle #{String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs text-slate-500 block font-semibold">
                          {srv.categoryName}
                        </span>
                      </div>
                    </div>
                    {srv.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-100 text-[#047857] font-bold whitespace-nowrap self-start sm:self-center">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-3xl font-bold text-[#0B1B3D] font-display">
                    {srv.title}
                  </h2>

                  <p className="text-xs font-semibold text-[#059669]">
                    {srv.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {srv.fullDescription}
                  </p>

                  {srv.regulatoryDisclaimer && (
                    <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-800 flex items-start space-x-2">
                      <ShieldAlert className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p>{srv.regulatoryDisclaimer}</p>
                    </div>
                  )}

                  <div className="pt-2">
                    <Link
                      to={`/services/${srv.slug}`}
                      className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-bold text-white bg-[#10B981] hover:bg-[#059669] transition-colors shadow-sm"
                    >
                      <span>Consulter la fiche détaillée</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>

                {/* Column 2: Capabilities & Features */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#0B1B3D] mb-3 font-bold">
                      Fonctionnalités & Périmètres Clés :
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start space-x-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-slate-700">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#0B1B3D] mb-3 font-bold">
                      Applications Opérationnelles :
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {srv.capabilities.map((cap, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 space-y-1">
                          <h4 className="text-xs font-bold text-[#0B1B3D]">{cap.title}</h4>
                          <p className="text-[11px] text-slate-500 leading-relaxed">{cap.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Global CTA */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0B1B3D] text-white text-center space-y-4 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold font-display">
            Un besoin spécifique ou un projet sur mesure ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
            Nos ingénieurs et architectes étudient vos exigences pour concevoir une proposition technique adaptée.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl text-xs font-bold text-white bg-[#10B981] hover:bg-[#059669] transition-colors shadow-sm"
            >
              <span>Demander une étude technique</span>
              <ArrowRight className="w-4 h-4 ml-1.5" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
