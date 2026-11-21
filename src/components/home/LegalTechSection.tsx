import React from 'react';
import { Link } from 'react-router-dom';
import { Scale, FileCheck, FileText, Lock, Layers, ShieldCheck, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export const LegalTechSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#123D3A] text-[#F3E3C3] relative border-b border-[#10B981]/20">
      <div className="max-w-7xl mx-auto space-y-16">
        
        {/* En-tête de la section LegalTech */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#0B2B2A] border border-[#10B981]/40 text-xs font-mono font-bold text-[#10B981] uppercase tracking-wider">
            <Scale className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Spécialité &amp; Pôle d&apos;Excellence</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#F3E3C3] tracking-tight font-display">
            Suite LegalTech Souveraine
            <span className="block text-[#10B981] mt-1">
              La Technologie au Service du Droit
            </span>
          </h2>

          <p className="text-[#F3E3C3]/80 text-sm sm:text-base leading-relaxed">
            Alkeb.dev conçoit en interne des progiciels haute sécurité pour équiper les cabinets d&apos;avocats, études notariales, directions juridiques d&apos;entreprises et institutions en Afrique. Conforme à la loi sénégalaise n° 2008-08 et aux standards OHADA.
          </p>
        </div>

        {/* 4 Piliers LegalTech Alkeb.dev */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Pilier 1 */}
          <div className="p-6 rounded-3xl bg-[#0B2B2A] border border-white/10 hover:border-[#10B981] shadow-lg hover:shadow-xl transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-[#123D3A] text-[#10B981] flex items-center justify-center border border-[#10B981]/30 group-hover:scale-105 transition-transform">
              <FileCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#F3E3C3] group-hover:text-[#10B981] transition-colors font-display">
              Parapheur &amp; Signature Certifiée
            </h3>
            <p className="text-xs text-[#F3E3C3]/75 leading-relaxed">
              Signature électronique sécurisée d&apos;actes, contrats et protocoles avec certificat cryptographique qualifié, horodatage certifié et valeur probatoire intégrale.
            </p>
            <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono font-semibold text-[#F3E3C3]/80">Loi 2008-08</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono font-semibold text-[#F3E3C3]/80">SHA-256</span>
              <span className="px-2 py-0.5 rounded bg-[#10B981]/20 text-[10px] font-mono font-semibold text-[#10B981]">Multi-signataires</span>
            </div>
          </div>

          {/* Pilier 2 */}
          <div className="p-6 rounded-3xl bg-[#0B2B2A] border border-white/10 hover:border-[#F2B134] shadow-lg hover:shadow-xl transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-[#123D3A] text-[#F2B134] flex items-center justify-center border border-[#F2B134]/30 group-hover:scale-105 transition-transform">
              <FileText className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#F3E3C3] group-hover:text-[#F2B134] transition-colors font-display">
              GED &amp; Gestion de Cabinet
            </h3>
            <p className="text-xs text-[#F3E3C3]/75 leading-relaxed">
              Centralisation et indexation des dossiers contentieux, classement automatique des pièces, suivi des diligences et calendrier des audiences avec alertes de forclusion.
            </p>
            <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono font-semibold text-[#F3E3C3]/80">Indexation OCR</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono font-semibold text-[#F3E3C3]/80">Dossiers Cloisonnés</span>
              <span className="px-2 py-0.5 rounded bg-[#F2B134]/20 text-[10px] font-mono font-semibold text-[#F2B134]">Rappels Audiences</span>
            </div>
          </div>

          {/* Pilier 3 */}
          <div className="p-6 rounded-3xl bg-[#0B2B2A] border border-white/10 hover:border-[#10B981] shadow-lg hover:shadow-xl transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-[#123D3A] text-[#10B981] flex items-center justify-center border border-[#10B981]/30 group-hover:scale-105 transition-transform">
              <Lock className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#F3E3C3] group-hover:text-[#10B981] transition-colors font-display">
              Coffre-Fort &amp; Valeur Probante
            </h3>
            <p className="text-xs text-[#F3E3C3]/75 leading-relaxed">
              Archivage chiffré de bout en bout (AES-256). Garantie d&apos;intégrité numérique sans risque d&apos;altération ni de fuite, avec journal d&apos;audit des consultations certifié.
            </p>
            <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono font-semibold text-[#F3E3C3]/80">AES-256</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono font-semibold text-[#F3E3C3]/80">Standards OHADA</span>
              <span className="px-2 py-0.5 rounded bg-[#10B981]/20 text-[10px] font-mono font-semibold text-[#10B981]">Audit Logs</span>
            </div>
          </div>

          {/* Pilier 4 */}
          <div className="p-6 rounded-3xl bg-[#0B2B2A] border border-white/10 hover:border-[#F2B134] shadow-lg hover:shadow-xl transition-all space-y-4 group">
            <div className="w-12 h-12 rounded-2xl bg-[#123D3A] text-[#F2B134] flex items-center justify-center border border-[#F2B134]/30 group-hover:scale-105 transition-transform">
              <Layers className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#F3E3C3] group-hover:text-[#F2B134] transition-colors font-display">
              Cycle des Contrats (CLM)
            </h3>
            <p className="text-xs text-[#F3E3C3]/75 leading-relaxed">
              Génération assistée d&apos;actes juridiques, circuits d&apos;approbation internes, suivi des échéances contractuelles et portail client confidentiel pour les justiciables.
            </p>
            <div className="pt-2 border-t border-white/10 flex flex-wrap gap-1.5">
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono font-semibold text-[#F3E3C3]/80">Workflows CLM</span>
              <span className="px-2 py-0.5 rounded bg-white/5 text-[10px] font-mono font-semibold text-[#F3E3C3]/80">Espace Sécurisé</span>
              <span className="px-2 py-0.5 rounded bg-[#F2B134]/20 text-[10px] font-mono font-semibold text-[#F2B134]">Portail Client</span>
            </div>
          </div>

        </div>

        {/* Bannière de conformité légale sénégalaise */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#0B2B2A] border border-[#10B981]/30 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-3 max-w-2xl">
              <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#10B981]/20 text-[#10B981] text-xs font-mono uppercase font-bold">
                <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                <span>Cadre Réglementaire &amp; Validité Juridique Sénégalaise</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-[#F3E3C3] leading-tight font-display">
                Une conformité rigoureuse avec la Loi n° 2008-08 &amp; la CDP
              </h3>
              <p className="text-xs sm:text-sm text-[#F3E3C3]/75 leading-relaxed">
                Toutes les solutions LegalTech conçues par Alkeb.dev s&apos;articulent autour du respect strict des textes de la République du Sénégal régissant les transactions électroniques, la protection des données à caractère personnel (Loi 2008-12) et les actes uniformes OHADA.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
              <Link
                to="/services/legaltech"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs bg-[#10B981] hover:bg-[#059669] text-[#0B2B2A] hover:text-white transition-all text-center shadow-md focus-visible:ring-2 focus-visible:ring-[#F2B134]"
              >
                Découvrir l&apos;Offre LegalTech
              </Link>
              <a
                href={getWhatsAppUrl('Bonjour Alkeb.dev, je souhaite une démonstration privée de votre suite LegalTech pour mon cabinet ou mon entreprise.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs text-[#F3E3C3] bg-white/5 hover:bg-white/10 border border-white/20 transition-all text-center flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-[#10B981]"
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
