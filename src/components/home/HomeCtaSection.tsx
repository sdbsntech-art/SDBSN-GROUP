import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../../lib/whatsapp';

export const HomeCtaSection: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white to-slate-100 border-t border-slate-200">
      <div className="max-w-5xl mx-auto">
        <div className="p-8 sm:p-14 rounded-3xl bg-[#0B1B3D] text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
          
          {/* Lueurs décoratives */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#10B981]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#059669]/20 rounded-full blur-3xl pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-white px-3.5 py-1 rounded-full bg-[#10B981] inline-block font-bold">
            Collaboration &amp; Partenariat
          </span>

          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
            Prêt à concrétiser votre vision technologique ?
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discutons de vos besoins de transformation, d&apos;audits de sécurité ou de plateformes LegalTech. Chaque demande est traitée avec le plus haut niveau de réactivité et de stricte confidentialité.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-[#10B981] hover:bg-[#059669] transition-all shadow-md flex items-center justify-center space-x-2 text-sm focus-visible:ring-2 focus-visible:ring-[#10B981]"
            >
              <span>Initier un Projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            
            <a
              href={getWhatsAppUrl('Bonjour Alkeb.lab, je souhaite démarrer un projet technologique.')}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 shadow-sm transition-all text-sm flex items-center justify-center space-x-2 focus-visible:ring-2 focus-visible:ring-[#10B981]"
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
