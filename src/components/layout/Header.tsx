import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  ChevronDown, 
  ArrowRight, 
  Lock, 
  Scale, 
  Shield, 
  Code, 
  Compass, 
  Layers,
  Sparkles,
  Target,
  Award
} from 'lucide-react';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open to prevent background scrolling
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
    setAboutOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#0E1B17]/95 backdrop-blur-md border-b border-[#24403A] shadow-md py-3'
          : 'bg-[#0E1B17]/90 backdrop-blur-md border-b border-[#24403A]/60 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with cyber emerald container */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="bg-black/50 px-2 py-1 rounded-xl shadow-md border border-[#24403A] flex items-center justify-center transition-all group-hover:border-[#10B981] group-hover:scale-[1.02]">
              <img
                src="/logo/sdbsnx-logo.png"
                alt="SDBSNX Logo"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain rounded-lg"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-colors ${
                isActive('/') 
                  ? 'bg-[#10B981] text-[#04231A] font-bold shadow-sm' 
                  : 'text-[#F4F1EA] hover:text-[#6EE7B7] hover:bg-[#15271F]'
              }`}
            >
              Accueil
            </Link>

            {/* À propos Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setAboutOpen(true)}
              onMouseLeave={() => setAboutOpen(false)}
            >
              <button
                className={`flex items-center px-3.5 py-2 text-sm font-medium rounded-xl transition-colors ${
                  location.pathname.startsWith('/a-propos') ||
                  location.pathname === '/vision' ||
                  location.pathname === '/mission' ||
                  location.pathname === '/valeurs' ||
                  location.pathname === '/philosophie'
                    ? 'text-[#6EE7B7] bg-[#15271F] border border-[#24403A] font-semibold'
                    : 'text-[#F4F1EA] hover:text-[#6EE7B7] hover:bg-[#15271F]'
                }`}
              >
                <span>Institution</span>
                <ChevronDown className="ml-1 w-4 h-4 opacity-80" />
              </button>

              {aboutOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-xl bg-[#15271F] py-2 z-50 border border-[#24403A] shadow-2xl">
                  <Link
                    to="/a-propos"
                    className="block px-4 py-2.5 text-sm text-[#F4F1EA] hover:text-[#6EE7B7] hover:bg-[#1C332A] transition-colors"
                  >
                    À propos de SDBSNX
                  </Link>
                  <Link
                    to="/vision"
                    className="block px-4 py-2.5 text-sm text-[#F4F1EA] hover:text-[#6EE7B7] hover:bg-[#1C332A] transition-colors"
                  >
                    Notre Vision
                  </Link>
                  <Link
                    to="/mission"
                    className="block px-4 py-2.5 text-sm text-[#F4F1EA] hover:text-[#6EE7B7] hover:bg-[#1C332A] transition-colors"
                  >
                    Notre Mission & Objectifs
                  </Link>
                  <Link
                    to="/valeurs"
                    className="block px-4 py-2.5 text-sm text-[#F4F1EA] hover:text-[#6EE7B7] hover:bg-[#1C332A] transition-colors"
                  >
                    Nos Valeurs Clés
                  </Link>
                  <Link
                    to="/philosophie"
                    className="block px-4 py-2.5 text-sm text-[#F4F1EA] hover:text-[#6EE7B7] hover:bg-[#1C332A] transition-colors"
                  >
                    Notre Philosophie
                  </Link>
                </div>
              )}
            </div>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link
                to="/services"
                className={`flex items-center px-3.5 py-2 text-sm font-medium rounded-xl transition-colors ${
                  location.pathname.startsWith('/services')
                    ? 'text-[#6EE7B7] bg-[#15271F] border border-[#24403A] font-semibold'
                    : 'text-[#F4F1EA] hover:text-[#6EE7B7] hover:bg-[#15271F]'
                }`}
              >
                <span>Solutions & Services</span>
                <ChevronDown className="ml-1 w-4 h-4 opacity-80" />
              </Link>

              {servicesOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-xl bg-[#15271F] py-2 z-50 border border-[#24403A] shadow-2xl">
                  <Link
                    to="/services/legaltech"
                    className="flex flex-col px-4 py-3 hover:bg-[#1C332A] transition-colors border-b border-[#24403A] group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#F4F1EA] group-hover:text-[#6EE7B7] transition-colors">
                        Solutions LegalTech
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#10B981] text-[#04231A] font-bold">
                        Spécialisé
                      </span>
                    </div>
                    <span className="text-xs text-[#9DB2A8] mt-0.5">Bridging Law and Technology</span>
                  </Link>

                  <Link
                    to="/services/cybersecurite"
                    className="flex flex-col px-4 py-3 hover:bg-[#1C332A] transition-colors border-b border-[#24403A] group"
                  >
                    <span className="text-sm font-semibold text-[#F4F1EA] group-hover:text-[#6EE7B7] transition-colors">
                      Cybersécurité & Audits
                    </span>
                    <span className="text-xs text-[#9DB2A8] mt-0.5">Évaluation des risques et conformité stricte</span>
                  </Link>

                  <Link
                    to="/services/developpement"
                    className="flex flex-col px-4 py-3 hover:bg-[#1C332A] transition-colors border-b border-[#24403A] group"
                  >
                    <span className="text-sm font-semibold text-[#F4F1EA] group-hover:text-[#6EE7B7] transition-colors">
                      Développement Web & Mobile
                    </span>
                    <span className="text-xs text-[#9DB2A8] mt-0.5">Plateformes critiques, SaaS & PWA</span>
                  </Link>

                  <Link
                    to="/services/conseil"
                    className="flex flex-col px-4 py-3 hover:bg-[#1C332A] transition-colors group"
                  >
                    <span className="text-sm font-semibold text-[#F4F1EA] group-hover:text-[#6EE7B7] transition-colors">
                      Conseil Technologique
                    </span>
                    <span className="text-xs text-[#9DB2A8] mt-0.5">Architecture & Transformation numérique</span>
                  </Link>

                  <div className="border-t border-[#24403A] mt-1 pt-1.5 px-4 pb-1">
                    <Link
                      to="/services"
                      className="block text-xs font-semibold text-[#10B981] hover:text-[#6EE7B7] hover:underline"
                    >
                      Voir tous les services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3.5 py-2 text-sm font-medium rounded-xl transition-colors ${
                isActive('/contact') 
                  ? 'bg-[#10B981] text-[#04231A] font-bold shadow-sm' 
                  : 'text-[#F4F1EA] hover:text-[#6EE7B7] hover:bg-[#15271F]'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs Desktop */}
          <div className="hidden lg:flex items-center space-x-3">
            <Link
              to="/admin/login"
              aria-label="Portail Sécurisé"
              className="p-2 text-[#9DB2A8] hover:text-[#F4F1EA] hover:bg-[#15271F] rounded-xl transition-colors border border-[#24403A]"
              title="Portail Administration"
            >
              <Lock className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 rounded-xl text-sm font-bold bg-[#10B981] hover:bg-[#059669] text-[#04231A] transition-all shadow-sm active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              to="/admin/login"
              className="p-2 text-[#9DB2A8] hover:text-[#F4F1EA] bg-[#15271F] border border-[#24403A] rounded-lg"
              aria-label="Accès Administration"
            >
              <Lock className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-[#F4F1EA] hover:text-[#6EE7B7] bg-[#15271F] border border-[#24403A] focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#F4F1EA]" /> : <Menu className="w-5 h-5 text-[#F4F1EA]" />}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE FULL-SCREEN DRAWER (Completely responsive, scrollable, no cutoff)  */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[56px] sm:top-[64px] z-50 bg-[#0E1B17] flex flex-col border-t border-[#24403A] lg:hidden">
          
          {/* Scrollable container with plenty of bottom padding */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-5 space-y-6 pb-28">
            
            {/* Quick Primary Links */}
            <div className="grid grid-cols-2 gap-2.5">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-xl text-center text-sm font-bold border transition-colors ${
                  isActive('/')
                    ? 'bg-[#10B981] text-[#04231A] border-[#10B981]'
                    : 'bg-[#15271F] text-[#F4F1EA] border-[#24403A] hover:border-[#10B981]'
                }`}
              >
                Accueil
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-xl text-center text-sm font-bold border transition-colors ${
                  isActive('/contact')
                    ? 'bg-[#10B981] text-[#04231A] border-[#10B981]'
                    : 'bg-[#15271F] text-[#F4F1EA] border-[#24403A] hover:border-[#10B981]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Group 1: Pôles & Services */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-[#24403A]">
                <span className="text-xs font-mono uppercase tracking-wider text-[#6EE7B7] font-bold">
                  Solutions & Services
                </span>
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[11px] text-[#9DB2A8] hover:text-[#10B981] font-medium"
                >
                  Tous les services →
                </Link>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  to="/services/legaltech"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] hover:bg-[#1C332A] transition-colors"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <Scale className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-bold text-[#F4F1EA] block truncate">Solutions LegalTech</span>
                      <span className="text-xs text-[#9DB2A8] block truncate">Bridging Law and Technology</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-[#10B981] text-[#04231A] font-bold flex-shrink-0 ml-2">
                    Pôle
                  </span>
                </Link>

                <Link
                  to="/services/cybersecurite"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] hover:bg-[#1C332A] transition-colors"
                >
                  <Shield className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-[#F4F1EA] block truncate">Cybersécurité & Audits</span>
                    <span className="text-xs text-[#9DB2A8] block truncate">Évaluation autorisée & Défense</span>
                  </div>
                </Link>

                <Link
                  to="/services/developpement"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] hover:bg-[#1C332A] transition-colors"
                >
                  <Code className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-[#F4F1EA] block truncate">Développement Web & Mobile</span>
                    <span className="text-xs text-[#9DB2A8] block truncate">Applications métier, SaaS, PWA</span>
                  </div>
                </Link>

                <Link
                  to="/services/conseil"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] hover:bg-[#1C332A] transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-[#F4F1EA] block truncate">Conseil Technologique</span>
                    <span className="text-xs text-[#9DB2A8] block truncate">Architecture & Urbanisation</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Group 2: Institution */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#6EE7B7] font-bold pb-1 block border-b border-[#24403A]">
                Institution & Valeurs
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <Link
                  to="/a-propos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-[#15271F] border border-[#24403A] hover:border-[#10B981] text-sm text-[#F4F1EA]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>À propos de SDBSNX</span>
                </Link>
                <Link
                  to="/vision"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-[#15271F] border border-[#24403A] hover:border-[#10B981] text-sm text-[#F4F1EA]"
                >
                  <Target className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Notre Vision</span>
                </Link>
                <Link
                  to="/mission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-[#15271F] border border-[#24403A] hover:border-[#10B981] text-sm text-[#F4F1EA]"
                >
                  <Layers className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Notre Mission</span>
                </Link>
                <Link
                  to="/valeurs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-[#15271F] border border-[#24403A] hover:border-[#10B981] text-sm text-[#F4F1EA]"
                >
                  <Award className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Nos Valeurs Clés</span>
                </Link>
                <Link
                  to="/philosophie"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-[#15271F] border border-[#24403A] hover:border-[#10B981] text-sm text-[#F4F1EA] sm:col-span-2"
                >
                  <span className="text-[#10B981] font-bold">#</span>
                  <span>Notre Philosophie (The Standard We Live By)</span>
                </Link>
              </div>
            </div>

            {/* Bottom Actions inside drawer - Fully visible & accessible */}
            <div className="pt-2 space-y-3 pb-6">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl text-sm font-bold bg-[#10B981] hover:bg-[#059669] text-[#04231A] block transition-colors shadow-md"
              >
                Start a Project →
              </Link>

              <Link
                to="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-semibold text-[#9DB2A8] hover:text-[#F4F1EA] bg-[#15271F] border border-[#24403A]"
              >
                <Lock className="w-3.5 h-3.5" />
                <span>Portail Administrateur Sécurisé</span>
              </Link>
            </div>

          </div>
        </div>
      )}
    </header>
  );
};
