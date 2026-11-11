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
        return <Shield className="w-7 h-7 text-[#10B981]" />;
      case 'Code':
        return <Code className="w-7 h-7 text-[#10B981]" />;
      case 'Compass':
        return <Compass className="w-7 h-7 text-[#10B981]" />;
      default:
        return <Code className="w-7 h-7 text-[#10B981]" />;
    }
  };

  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-[#0E1B17] text-[#F4F1EA]">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Navigation retour */}
        <div>
          <BackButton to="/" label="Retour à l'accueil" />
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#15271F] border border-[#24403A] text-xs font-mono text-[#6EE7B7] uppercase font-bold">
            <span>Catalogue d&apos;Expertises</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1EA] tracking-tight font-display">
            Nos Solutions & Services
          </h1>
          <p className="text-[#9DB2A8] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Quatre pôles d&apos;intervention spécialisés pour accompagner la transformation numérique, la résilience et la conformité de vos organisations.
          </p>
        </div>

        {/* Services List */}
        <div className="space-y-8 sm:space-y-12">
          {SERVICES_DATA.map((srv, index) => (
            <div
              key={srv.id}
              className="p-6 sm:p-10 rounded-3xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] shadow-lg transition-all"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
                
                {/* Column 1: Info */}
                <div className="lg:col-span-5 space-y-4">
                  <div className="flex items-center justify-between gap-3 flex-wrap">
                    <div className="flex items-center space-x-3">
                      <div className="p-3 rounded-2xl bg-[#0E1B17] border border-[#24403A] flex-shrink-0">
                        {getIcon(srv.iconName)}
                      </div>
                      <div>
                        <span className="text-[11px] font-mono uppercase tracking-wider text-[#6EE7B7] block font-bold">
                          Pôle #{String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="text-xs text-[#9DB2A8] block font-semibold">
                          {srv.categoryName}
                        </span>
                      </div>
                    </div>
                    {srv.badge && (
                      <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-[#10B981] text-[#04231A] font-bold whitespace-nowrap self-start sm:self-center">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h2 className="text-xl sm:text-3xl font-bold text-[#F4F1EA] font-display">
                    {srv.title}
                  </h2>

                  <p className="text-xs font-medium text-[#10B981]">
                    {srv.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-[#9DB2A8] leading-relaxed">
                    {srv.fullDescription}
                  </p>

                  {srv.regulatoryDisclaimer && (
                    <div className="p-3.5 rounded-xl bg-[#0E1B17] border border-[#F59E0B]/40 text-xs text-[#F59E0B] flex items-start space-x-2">
                      <ShieldAlert className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" />
                      <p>{srv.regulatoryDisclaimer}</p>
                    </div>
                  )}

                  <div className="pt-2">
                    <Link
                      to={`/services/${srv.slug}`}
                      className="inline-flex items-center px-4 py-2 rounded-lg text-xs font-bold text-[#04231A] bg-[#10B981] hover:bg-[#059669] transition-colors shadow-sm"
                    >
                      <span>Consulter la fiche détaillée</span>
                      <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                    </Link>
                  </div>
                </div>

                {/* Column 2: Capabilities & Features */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#F4F1EA] mb-3 font-bold">
                      Fonctionnalités & Périmètres Clés :
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {srv.features.map((feat, i) => (
                        <div key={i} className="flex items-start space-x-2 p-2.5 rounded-xl bg-[#0E1B17] border border-[#24403A]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span className="text-xs text-[#F4F1EA]/90">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-mono uppercase tracking-wider text-[#F4F1EA] mb-3 font-bold">
                      Applications Opérationnelles :
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {srv.capabilities.map((cap, i) => (
                        <div key={i} className="p-3.5 rounded-xl bg-[#0E1B17] border border-[#24403A] space-y-1">
                          <h4 className="text-xs font-bold text-[#F4F1EA]">{cap.title}</h4>
                          <p className="text-[11px] text-[#9DB2A8] leading-relaxed">{cap.desc}</p>
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
        <div className="p-8 sm:p-12 rounded-3xl bg-[#15271F] border border-[#24403A] text-center space-y-4 shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-[#F4F1EA] font-display">
            Un besoin spécifique ou un projet sur mesure ?
          </h3>
          <p className="text-xs sm:text-sm text-[#9DB2A8] max-w-xl mx-auto leading-relaxed">
            Nos ingénieurs et architectes étudient vos exigences pour concevoir une proposition technique adaptée.
          </p>
          <div className="pt-2">
            <Link
              to="/contact"
              className="inline-flex items-center px-6 py-3 rounded-xl text-xs font-bold text-[#04231A] bg-[#10B981] hover:bg-[#059669] transition-colors shadow-sm"
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
