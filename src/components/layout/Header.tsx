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
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-white/90 backdrop-blur-md border-b border-slate-100 py-3.5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo with modern crisp container */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="bg-slate-900 px-2 py-1.5 rounded-xl shadow-sm border border-slate-800 flex items-center justify-center transition-all group-hover:border-[#10B981] group-hover:scale-[1.02]">
              <img
                src="/logo/sdbsnx-logo.png"
                alt="SDBSNX Logo"
                className="h-8 sm:h-9 md:h-10 w-auto object-contain rounded-lg"
              />
            </div>
          </Link>

          {/* Desktop Navigation (Force-N Clean Style) */}
          <nav className="hidden lg:flex items-center space-x-1.5">
            <Link
              to="/"
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                isActive('/') 
                  ? 'bg-emerald-50 text-[#059669] font-bold border border-emerald-200/80 shadow-xs' 
                  : 'text-[#0B1B3D] hover:text-[#10B981] hover:bg-slate-50'
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
                className={`flex items-center px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                  location.pathname.startsWith('/a-propos') ||
                  location.pathname === '/vision' ||
                  location.pathname === '/mission' ||
                  location.pathname === '/valeurs' ||
                  location.pathname === '/philosophie'
                    ? 'text-[#059669] bg-emerald-50 border border-emerald-200/80 font-bold'
                    : 'text-[#0B1B3D] hover:text-[#10B981] hover:bg-slate-50'
                }`}
              >
                <span>Institution</span>
                <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
              </button>

              {aboutOpen && (
                <div className="absolute left-0 mt-1 w-64 rounded-2xl bg-white py-2 z-50 border border-slate-200 shadow-xl">
                  <Link
                    to="/a-propos"
                    className="block px-4 py-2.5 text-sm font-medium text-[#0B1B3D] hover:text-[#10B981] hover:bg-slate-50 transition-colors"
                  >
                    À propos de SDBSNX
                  </Link>
                  <Link
                    to="/vision"
                    className="block px-4 py-2.5 text-sm font-medium text-[#0B1B3D] hover:text-[#10B981] hover:bg-slate-50 transition-colors"
                  >
                    Notre Vision
                  </Link>
                  <Link
                    to="/mission"
                    className="block px-4 py-2.5 text-sm font-medium text-[#0B1B3D] hover:text-[#10B981] hover:bg-slate-50 transition-colors"
                  >
                    Notre Mission & Objectifs
                  </Link>
                  <Link
                    to="/valeurs"
                    className="block px-4 py-2.5 text-sm font-medium text-[#0B1B3D] hover:text-[#10B981] hover:bg-slate-50 transition-colors"
                  >
                    Nos Valeurs Clés
                  </Link>
                  <Link
                    to="/philosophie"
                    className="block px-4 py-2.5 text-sm font-medium text-[#0B1B3D] hover:text-[#10B981] hover:bg-slate-50 transition-colors"
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
                className={`flex items-center px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                  location.pathname.startsWith('/services')
                    ? 'text-[#059669] bg-emerald-50 border border-emerald-200/80 font-bold'
                    : 'text-[#0B1B3D] hover:text-[#10B981] hover:bg-slate-50'
                }`}
              >
                <span>Solutions & Services</span>
                <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
              </Link>

              {servicesOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-2xl bg-white py-2 z-50 border border-slate-200 shadow-xl">
                  <Link
                    to="/services/legaltech"
                    className="flex flex-col px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors">
                        Solutions LegalTech
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-100 text-[#047857] font-bold">
                        Spécialisé
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 mt-0.5">Bridging Law and Technology</span>
                  </Link>

                  <Link
                    to="/services/cybersecurite"
                    className="flex flex-col px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors">
                        Cybersécurité & Audits
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-blue-100 text-[#1D4ED8] font-bold">
                        Certifié
                      </span>
                    </div>
                    <span className="text-xs text-slate-500 mt-0.5">Évaluation des risques et conformité stricte</span>
                  </Link>

                  <Link
                    to="/services/developpement"
                    className="flex flex-col px-4 py-3 hover:bg-slate-50 transition-colors border-b border-slate-100 group"
                  >
                    <span className="text-sm font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors">
                      Développement Web & Mobile
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5">Plateformes critiques, SaaS & PWA</span>
                  </Link>

                  <Link
                    to="/services/conseil"
                    className="flex flex-col px-4 py-3 hover:bg-slate-50 transition-colors group"
                  >
                    <span className="text-sm font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors">
                      Conseil Technologique
                    </span>
                    <span className="text-xs text-slate-500 mt-0.5">Architecture & Transformation numérique</span>
                  </Link>

                  <div className="border-t border-slate-100 mt-1 pt-2 px-4 pb-1">
                    <Link
                      to="/services"
                      className="block text-xs font-bold text-[#10B981] hover:text-[#059669] hover:underline"
                    >
                      Voir tous les pôles de solutions →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3.5 py-2 text-sm font-semibold rounded-xl transition-colors ${
                isActive('/contact') 
                  ? 'bg-emerald-50 text-[#059669] font-bold border border-emerald-200/80 shadow-xs' 
                  : 'text-[#0B1B3D] hover:text-[#10B981] hover:bg-slate-50'
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
              className="p-2 text-slate-600 hover:text-[#0B1B3D] hover:bg-slate-100 rounded-xl transition-colors border border-slate-200"
              title="Portail Administration"
            >
              <Lock className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-bold bg-[#10B981] hover:bg-[#059669] text-white transition-all shadow-sm hover:shadow-md active:scale-[0.98]"
            >
              <span>Démarrer un Projet</span>
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              to="/admin/login"
              className="p-2 text-slate-600 hover:text-[#0B1B3D] bg-slate-50 border border-slate-200 rounded-xl"
              aria-label="Accès Administration"
            >
              <Lock className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#0B1B3D] hover:text-[#10B981] bg-slate-50 border border-slate-200 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#0B1B3D]" /> : <Menu className="w-5 h-5 text-[#0B1B3D]" />}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE FULL-SCREEN DRAWER (Clean, Force-N Style)                          */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 top-[56px] sm:top-[64px] z-50 bg-white flex flex-col border-t border-slate-200 lg:hidden">
          
          <div className="flex-1 overflow-y-auto overscroll-contain px-4 py-5 space-y-6 pb-28">
            
            {/* Quick Primary Links */}
            <div className="grid grid-cols-2 gap-2.5">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-xl text-center text-sm font-bold border transition-colors ${
                  isActive('/')
                    ? 'bg-emerald-50 text-[#059669] border-emerald-200'
                    : 'bg-slate-50 text-[#0B1B3D] border-slate-200 hover:border-[#10B981]'
                }`}
              >
                Accueil
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-xl text-center text-sm font-bold border transition-colors ${
                  isActive('/contact')
                    ? 'bg-emerald-50 text-[#059669] border-emerald-200'
                    : 'bg-slate-50 text-[#0B1B3D] border-slate-200 hover:border-[#10B981]'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Group 1: Pôles & Services */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-slate-200">
                <span className="text-xs font-mono uppercase tracking-wider text-[#059669] font-bold">
                  Solutions & Services
                </span>
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[11px] text-slate-500 hover:text-[#10B981] font-semibold"
                >
                  Tous les services →
                </Link>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  to="/services/legaltech"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#10B981] transition-colors"
                >
                  <div className="flex items-center space-x-3 min-w-0">
                    <Scale className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                    <div className="min-w-0">
                      <span className="text-sm font-bold text-[#0B1B3D] block truncate">Solutions LegalTech</span>
                      <span className="text-xs text-slate-500 block truncate">Bridging Law and Technology</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-emerald-100 text-[#047857] font-bold flex-shrink-0 ml-2">
                    Pôle
                  </span>
                </Link>

                <Link
                  to="/services/cybersecurite"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#10B981] transition-colors"
                >
                  <Shield className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-[#0B1B3D] block truncate">Cybersécurité & Audits</span>
                    <span className="text-xs text-slate-500 block truncate">Évaluation autorisée & Défense</span>
                  </div>
                </Link>

                <Link
                  to="/services/developpement"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#10B981] transition-colors"
                >
                  <Code className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-[#0B1B3D] block truncate">Développement Web & Mobile</span>
                    <span className="text-xs text-slate-500 block truncate">Applications métier, SaaS, PWA</span>
                  </div>
                </Link>

                <Link
                  to="/services/conseil"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#10B981] transition-colors"
                >
                  <Compass className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                  <div className="min-w-0">
                    <span className="text-sm font-bold text-[#0B1B3D] block truncate">Conseil Technologique</span>
                    <span className="text-xs text-slate-500 block truncate">Architecture & Urbanisation</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Group 2: Institution */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-[#059669] font-bold pb-1 block border-b border-slate-200">
                Institution & Valeurs
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <Link
                  to="/a-propos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#10B981] text-sm text-[#0B1B3D]"
                >
                  <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>À propos de SDBSNX</span>
                </Link>
                <Link
                  to="/vision"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#10B981] text-sm text-[#0B1B3D]"
                >
                  <Target className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Notre Vision</span>
                </Link>
                <Link
                  to="/mission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#10B981] text-sm text-[#0B1B3D]"
                >
                  <Layers className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Notre Mission</span>
                </Link>
                <Link
                  to="/valeurs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#10B981] text-sm text-[#0B1B3D]"
                >
                  <Award className="w-3.5 h-3.5 text-[#2563EB]" />
                  <span>Nos Valeurs Clés</span>
                </Link>
                <Link
                  to="/philosophie"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-[#10B981] text-sm text-[#0B1B3D] sm:col-span-2"
                >
                  <span className="text-[#10B981] font-bold">#</span>
                  <span>Notre Philosophie (The Standard We Live By)</span>
                </Link>
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-2 space-y-3 pb-6">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl text-sm font-bold bg-[#10B981] hover:bg-[#059669] text-white block transition-colors shadow-md"
              >
                Démarrer un Projet →
              </Link>

              <Link
                to="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-[#0B1B3D] bg-slate-50 border border-slate-200"
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
