import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { SERVICES_DATA } from '../data/services';
import { 
  Scale, 
  Shield, 
  Code, 
  Compass, 
  ArrowRight, 
  CheckCircle2, 
  ShieldAlert, 
  Layers
} from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const ServiceDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Scale':
        return <Scale className="w-8 h-8 text-emerald-600" />;
      case 'Shield':
        return <Shield className="w-8 h-8 text-emerald-600" />;
      case 'Code':
        return <Code className="w-8 h-8 text-emerald-600" />;
      case 'Compass':
        return <Compass className="w-8 h-8 text-emerald-600" />;
      default:
        return <Code className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-slate-50 text-[#0B1B3D]">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Navigation retour */}
        <div>
          <BackButton to="/services" label="Retour aux services" />
        </div>

        {/* Hero Banner for this Service */}
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <div className="p-3.5 rounded-2xl bg-emerald-50 border border-emerald-200 shadow-sm">
              {getIcon(service.iconName)}
            </div>
            <div>
              <span className="text-xs font-mono uppercase tracking-widest text-emerald-600 font-bold block">
                {service.categoryName}
              </span>
              <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
                {service.title}
              </h1>
            </div>
          </div>

          <p className="text-base sm:text-lg text-emerald-600 font-semibold italic">
            &ldquo;{service.tagline}&rdquo;
          </p>

          <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-3xl">
            {service.fullDescription}
          </p>

          {/* Special Legal/Audit Regulatory Disclaimer */}
          {service.regulatoryDisclaimer && (
            <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-700 flex items-start space-x-3 leading-relaxed shadow-sm">
              <ShieldAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-700 block mb-0.5 font-bold">Cadre Réglementaire &amp; Déontologique :</strong>
                {service.regulatoryDisclaimer}
              </div>
            </div>
          )}
        </div>

        {/* Core Capabilities */}
        <div className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] font-display">
            Périmètres &amp; Domaines d&apos;Intervention
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {service.capabilities.map((cap, i) => (
              <div
                key={i}
                className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-emerald-400 transition-colors shadow-sm space-y-2"
              >
                <div className="flex items-center space-x-2 text-emerald-600">
                  <Layers className="w-4 h-4" />
                  <h3 className="text-base font-bold text-[#0B1B3D]">{cap.title}</h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-500 leading-relaxed">
                  {cap.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Feature List Checklist */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] font-display">
            Modules &amp; Spécifications Incluses
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.features.map((feat, i) => (
              <div key={i} className="flex items-start space-x-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#0B1B3D]/80 font-medium">{feat}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Project Contact CTA */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#0B1B3D] shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">
              Déployer cette solution pour votre structure
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-md">
              Demandez un cadrage préliminaire confidentiel avec notre équipe technique.
            </p>
          </div>

          <Link
            to="/contact"
            className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-[#04231A] bg-[#10B981] hover:bg-[#059669] shadow-sm flex items-center space-x-2 flex-shrink-0 transition-colors"
          >
            <span>Démarrer ce projet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </div>
  );
};
