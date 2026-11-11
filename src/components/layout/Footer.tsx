import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Mail, MapPin, ArrowUpRight, Lock } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#050811] border-t border-white/10 text-slate-400 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block p-1.5 rounded-lg bg-white/5 border border-white/10">
              <img
                src="/logo/sdbsnx-logo.png"
                alt="SDBSNX Logo"
                className="h-9 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-slate-300 leading-relaxed max-w-sm">
              SDBSNX accompagne les entreprises, les entrepreneurs et les organisations dans leur transformation numérique grâce à des solutions technologiques innovantes, hautement sécurisées et adaptées à leurs ambitions.
            </p>

            <div className="space-y-1.5 text-xs text-slate-400">
              <p className="font-bold text-white tracking-wide uppercase text-[11px] font-mono">
                SIGNATURE INSTITUTIONNELLE
              </p>
              <p className="italic text-brand-blue font-medium">
                &ldquo;Integrity First. Service Before Self. Excellence in All We Do.&rdquo;
              </p>
              <p className="text-slate-400">
                &ldquo;Building with Purpose. Securing the Future.&rdquo;
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs text-slate-400">
              <span className="flex items-center text-slate-300">
                <MapPin className="w-3.5 h-3.5 mr-1 text-brand-blue" />
                Sénégal & International
              </span>
              <span className="text-slate-600 hidden sm:inline">•</span>
              <span className="flex items-center text-slate-300">
                <Mail className="w-3.5 h-3.5 mr-1 text-brand-blue" />
                contact@sdbsnx.com
              </span>
            </div>
          </div>

          {/* Navigation: Institution */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Institution
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/a-propos" className="hover:text-white transition-colors">
                  À propos de SDBSNX
                </Link>
              </li>
              <li>
                <Link to="/vision" className="hover:text-white transition-colors">
                  Notre Vision
                </Link>
              </li>
              <li>
                <Link to="/mission" className="hover:text-white transition-colors">
                  Notre Mission
                </Link>
              </li>
              <li>
                <Link to="/valeurs" className="hover:text-white transition-colors">
                  Nos Valeurs Clés
                </Link>
              </li>
              <li>
                <Link to="/philosophie" className="hover:text-white transition-colors">
                  Notre Philosophie
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Nous Contacter
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions & Expertises */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Pôles & Solutions
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/legaltech" className="hover:text-white flex items-center group transition-colors">
                  <span className="text-brand-blue group-hover:underline">Solutions LegalTech</span>
                  <ArrowUpRight className="w-3 h-3 ml-1 opacity-60 group-hover:opacity-100" />
                </Link>
              </li>
              <li>
                <Link to="/services/cybersecurite" className="hover:text-white transition-colors">
                  Cybersécurité & Audits
                </Link>
              </li>
              <li>
                <Link to="/services/developpement" className="hover:text-white transition-colors">
                  Développement Web & Mobile
                </Link>
              </li>
              <li>
                <Link to="/services/conseil" className="hover:text-white transition-colors">
                  Conseil Technologique
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors text-xs text-brand-blue font-semibold">
                  Vue d&apos;ensemble des services
                </Link>
              </li>
            </ul>
          </div>

          {/* Juridique & Conformité */}
          <div className="space-y-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-white font-mono">
              Légal & Conformité
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/mentions-legales" className="hover:text-white transition-colors">
                  Mentions Légales
                </Link>
              </li>
              <li>
                <Link to="/politique-confidentialite" className="hover:text-white transition-colors">
                  Politique de Confidentialité
                </Link>
              </li>
              <li>
                <Link to="/politique-cookies" className="hover:text-white transition-colors">
                  Gestion des Cookies
                </Link>
              </li>
              <li>
                <Link to="/conditions-utilisation" className="hover:text-white transition-colors">
                  Conditions d&apos;Utilisation
                </Link>
              </li>
              <li className="pt-2">
                <Link
                  to="/admin/login"
                  className="inline-flex items-center text-xs text-slate-400 hover:text-white transition-colors"
                >
                  <Lock className="w-3 h-3 mr-1" />
                  Espace d&apos;administration sécurisé
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Security & Audit Disclaimer Banner */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between text-xs text-slate-400 gap-4">
          <div className="flex items-center space-x-2 text-slate-400">
            <ShieldCheck className="w-4 h-4 text-brand-blue flex-shrink-0" />
            <p>
              <strong className="text-slate-300">Engagement de sécurité :</strong> Les audits de cybersécurité et évaluations techniques sont strictement réalisés dans un cadre contractuel et formellement autorisé.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} SDBSNX. Tous droits réservés.</p>
          <p className="text-slate-400 text-center sm:text-right font-mono text-[11px]">
            SDBSNX — DIGITAL INNOVATION. SECURITY. EXCELLENCE.
          </p>
        </div>
      </div>
    </footer>
  );
};
