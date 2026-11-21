import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../../lib/whatsapp';

export const HomeCtaSection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 relative bg-[#0B2B2A] text-[#F3E3C3] border-t border-[#10B981]/20">
      <div className="max-w-5xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#123D3A] text-white text-center space-y-6 shadow-2xl relative overflow-hidden border border-[#10B981]/30">
          
          {/* Lueurs décoratives */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#10B981]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#F2B134]/15 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-[#0B2B2A] px-4 py-1.5 rounded-full bg-[#10B981] inline-block font-bold">
            Collaboration &amp; Partenariat
          </span>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#F3E3C3] tracking-tight font-display">
            Prêt à concrétiser votre vision technologique ?
          </h2>

          <p className="text-sm sm:text-base text-[#F3E3C3]/80 max-w-2xl mx-auto leading-relaxed">
            Discutons de vos besoins de transformation, d&apos;audits de sécurité ou de plateformes LegalTech. Chaque demande est traitée avec le plus haut niveau de réactivité et de stricte confidentialité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#0B2B2A] bg-[#10B981] hover:bg-[#059669] hover:text-white transition-all shadow-md flex items-center justify-center space-x-2 text-sm focus-visible:ring-2 focus-visible:ring-[#F2B134]"
            >
              <span>Initier un Projet</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </Link>
            
            <a
              href={getWhatsAppUrl('Bonjour Alkeb.dev, je souhaite démarrer un projet technologique.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-xl font-bold text-[#F3E3C3] bg-[#0B2B2A] hover:bg-[#071F1E] border border-white/20 shadow-sm transition-all text-sm flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-[#10B981]"
            >
              <MessageCircle className="w-4 h-4 text-[#10B981]" />
              <span>WhatsApp Direct ({WHATSAPP_CONFIG.displayNumber})</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

