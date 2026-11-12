import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin, ArrowUpRight, Lock, MessageCircle } from 'lucide-react';
import { WHATSAPP_CONFIG, getWhatsAppUrl } from '../../lib/whatsapp';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#08100D] border-t border-[#24403A] text-[#9DB2A8] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block">
              <div className="bg-black/60 p-1.5 rounded-xl shadow-md border border-[#24403A] inline-flex items-center hover:border-[#10B981]/50 transition-all">
                <img
                  src="/logo/sdbsnx-logo.png"
                  alt="SDBSNX Logo"
                  className="h-10 sm:h-11 w-auto object-contain rounded-lg"
                />
              </div>
            </Link>

            <p className="text-sm text-[#9DB2A8] leading-relaxed max-w-sm">
              SDBSNX accompagne les entreprises, les entrepreneurs et les organisations dans leur transformation numérique grâce à des solutions technologiques innovantes, hautement sécurisées et adaptées à leurs ambitions.
            </p>

            <div className="space-y-1.5 text-xs text-[#9DB2A8]">
              <p className="font-bold text-[#F4F1EA] tracking-wide uppercase text-[11px] font-mono">
                SIGNATURE INSTITUTIONNELLE
              </p>
              <p className="italic text-[#6EE7B7] font-semibold">
                &ldquo;Integrity First. Service Before Self. Excellence in All We Do.&rdquo;
              </p>
              <p className="text-[#9DB2A8] font-medium">
                &ldquo;Building with Purpose. Securing the Future.&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-[#9DB2A8]">
              <span className="flex items-center text-[#F4F1EA] font-medium">
                <MapPin className="w-3.5 h-3.5 mr-1 text-[#10B981]" />
                Sénégal & International
              </span>
              <span className="text-[#24403A] hidden sm:inline">•</span>
              <a
                href="mailto:contact@sdbsnx.com"
                className="flex items-center text-[#F4F1EA] font-medium hover:text-[#6EE7B7] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 mr-1 text-[#10B981]" />
                contact@sdbsnx.com
              </a>
              <span className="text-[#24403A] hidden sm:inline">•</span>
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[#F4F1EA] font-medium hover:text-[#6EE7B7] transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5 mr-1 text-[#10B981]" />
                WhatsApp: {WHATSAPP_CONFIG.displayNumber}
              </a>
            </div>
          </div>

          {/* Navigation: Institution */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4F1EA] font-mono">
              Institution
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/a-propos" className="hover:text-[#6EE7B7] transition-colors">
                  À propos de SDBSNX
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:text-[#6EE7B7] transition-colors">
                  Notre Vision
                </Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-[#6EE7B7] transition-colors">
                  Notre Mission
                </Link>
              </li>
              <li>
                <Link to="/valeurs" className="hover:text-[#6EE7B7] transition-colors">
                  Nos Valeurs Clés
                </Link>
              </li>
              <li>
                <Link to="/philosophie" className="hover:text-[#6EE7B7] transition-colors">
                  Notre Philosophie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#6EE7B7] transition-colors">
                  Nous Contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Expertises */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4F1EA] font-mono">
              Pôles & Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/legaltech" className="hover:text-[#6EE7B7] flex items-center group transition-colors">
                  <span className="text-[#10B981] font-semibold group-hover:underline">Solutions LegalTech</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-70 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurite" className="hover:text-[#6EE7B7] transition-colors">
                  Cybersécurité & Audits
                </Link>
              </li>
              <li>
                <Link to="/services/developpement" className="hover:text-[#6EE7B7] transition-colors">
                  Développement Web & Mobile
                </Link>
              </li>
              <li>
                <Link to="/services/conseil" className="hover:text-[#6EE7B7] transition-colors">
                  Conseil Technologique
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-[#6EE7B7] transition-colors text-xs text-[#10B981] font-bold">
                  Vue d&apos;ensemble des services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Juridique & Conformité */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-[#F4F1EA] font-mono">
              Légal & Conformité
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/mentions-legales" className="hover:text-[#6EE7B7] transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="hover:text-[#6EE7B7] transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/politique-cookies" className="hover:text-[#6EE7B7] transition-colors">
                  Gestion des Cookies
                </Link>
              </li>
              <li>
                <Link to="/conditions-utilisation" className="hover:text-[#6EE7B7] transition-colors">
                  Conditions d&apos;Utilisation
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/admin/login"
                  className="inline-flex items-center text-xs text-[#9DB2A8] hover:text-[#10B981] transition-colors font-medium"
                >
                  <Lock className="w-3 h-3 mr-1" />
                  Espace d&apos;administration sécurisé
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Security & Audit Disclaimer Banner */}
        <div className="mt-12 pt-6 border-t border-[#24403A] flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-[#9DB2A8] gap-4">
          <div className="flex items-center space-x-2 text-[#9DB2A8] bg-[#15271F] p-3 rounded-xl border border-[#24403A] w-full sm:w-auto">
            <ShieldCheck className="w-4 h-4 text-[#10B981] flex-shrink-0" />
            <p>
              <strong className="text-[#F4F1EA]">Engagement de sécurité :</strong> Les audits de cybersécurité et évaluations techniques sont strictement réalisés dans un cadre contractuel et formellement autorisé.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-[#24403A] flex flex-col sm:flex-row items-center justify-between text-xs text-[#9DB2A8] gap-4">
          <p>© {new Date().getFullYear()} SDBSNX. Tous droits réservés.</p>
          <p className="text-[#9DB2A8] text-center sm:text-right font-mono text-[11px] font-semibold">
            SDBSNX — DIGITAL INNOVATION. SECURITY. EXCELLENCE.
          </p>
        </div>
      </div>
    </footer>
  );
};
