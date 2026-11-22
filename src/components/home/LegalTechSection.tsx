import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileCheck, FileText, Lock, Layers, ShieldCheck, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export const LegalTechSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white relative border-b border-slate-200 text-[#0B1B3D]">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-[#059669] uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Spécialité &amp; Fierté Technologique</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
            Pôle d&apos;Excellence LegalTech
            <span className="block text-[#10B981] mt-1">
              La Technologie au Service du Droit
            </span>
          </h2>

          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Alkeb.lab développe en interne des progiciels haute sécurité pour équiper les cabinets d&apos;avocats, études notariales, directions juridiques d&apos;entreprises et institutions en Afrique. Conforme à la loi sénégalaise n° 2008-08 et aux standards OHADA.
          </p>
        </div>

        {/* 4 Piliers de la LegalTech Alkeb.lab */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pilier 1 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#10B981] transition-all space-y-4 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center border border-emerald-200 group-hover:scale-110 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors font-display">
              Parapheur &amp; Signature Certifiée
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Signature électronique sécurisée d&apos;actes, contrats et protocoles avec certificat cryptographique qualifié, horodatage certifié et valeur probatoire intégrale.
            </p>
            <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Loi 2008-08</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">SHA-256</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-mono font-semibold text-emerald-700">Multi-signataires</span>
            </div>
          </div>

          {/* Pilier 2 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#10B981] transition-all space-y-4 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#059669] flex items-center justify-center border border-emerald-200 group-hover:scale-110 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors font-display">
              GED &amp; Gestion de Cabinet
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Centralisation et indexation des dossiers contentieux, classement automatique des pièces, suivi des diligences et calendrier des audiences avec alertes de forclusion.
            </p>
            <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Indexation OCR</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Dossiers Cloisonnés</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-mono font-semibold text-emerald-700">Rappels Audiences</span>
            </div>
          </div>

          {/* Pilier 3 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#10B981] transition-all space-y-4 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center border border-emerald-200 group-hover:scale-110 transition-transform">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors font-display">
              Coffre-Fort &amp; Valeur Probante
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Archivage chiffré de bout en bout (AES-256). Garantie d&apos;intégrité numérique sans risque d&apos;altération ni de fuite, avec journal d&apos;audit des consultations certifié.
            </p>
            <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">AES-256</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Standards OHADA</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-mono font-semibold text-emerald-700">Audit Logs</span>
            </div>
          </div>

          {/* Pilier 4 */}
          <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#10B981] transition-all space-y-4 group hover:-translate-y-1">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#059669] flex items-center justify-center border border-emerald-200 group-hover:scale-110 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors font-display">
              Cycle des Contrats (CLM)
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Génération assistée d&apos;actes juridiques, circuits d&apos;approbation internes, suivi des échéances contractuelles et portail client confidentiel pour les justiciables.
            </p>
            <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Workflows CLM</span>
              <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Espace Sécurisé</span>
              <span className="px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-mono font-semibold text-emerald-700">Portail Client</span>
            </div>
          </div>

        </div>

        {/* Bannière de conformité légale sénégalaise */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1B3D] text-white space-y-6 shadow-xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/10 text-[#6EE7B7] text-xs font-mono uppercase font-bold">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Cadre Réglementaire &amp; Validité Juridique Sénégalaise</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold leading-tight font-display">
                Une conformité rigoureuse avec la Loi n° 2008-08 &amp; la CDP
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Toutes les solutions LegalTech conçues par Alkeb.lab s&apos;articulent autour du respect strict des textes de la République du Sénégal régissant les transactions électroniques, la protection des données à caractère personnel (Loi 2008-12) et les actes uniformes OHADA.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <Link
                to="/services/legaltech"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-[#10B981] hover:bg-[#059669] text-[#04231A] transition-all shadow-sm text-center focus-visible:ring-2 focus-visible:ring-[#10B981]"
              >
                Découvrir l&apos;Offre LegalTech
              </Link>
              <a
                href={getWhatsAppUrl('Bonjour Alkeb.lab, je souhaite une démonstration privée de votre suite LegalTech pour mon cabinet ou mon entreprise.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#10B981]"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>Échanger avec nos Ingénieurs</span>
              </a>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
