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
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-200 ${
        isScrolled || mobileMenuOpen
          ? 'bg-[#050811] border-b border-white/10 shadow-md py-3'
          : 'bg-[#050811]/80 backdrop-blur-md border-b border-white/5 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group flex-shrink-0">
            <div className="flex items-center justify-center p-1.5 rounded-lg bg-white/5 border border-white/10 group-hover:border-brand-blue transition-colors">
              <img
                src="/logo/sdbsnx-logo.png"
                alt="SDBSNX Logo"
                className="h-8 sm:h-9 w-auto object-contain"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link
              to="/"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/') ? 'text-white bg-brand-blue' : 'text-slate-300 hover:text-white hover:bg-white/5'
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
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname.startsWith('/a-propos') ||
                  location.pathname === '/vision' ||
                  location.pathname === '/mission' ||
                  location.pathname === '/valeurs' ||
                  location.pathname === '/philosophie'
                    ? 'text-white bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Institution</span>
                <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
              </button>

              {aboutOpen && (
                <div className="absolute left-0 mt-1 w-60 rounded-xl bg-[#0A0F1D] py-2 z-50 border border-white/10 shadow-2xl">
                  <Link
                    to="/a-propos"
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-brand-blue transition-colors"
                  >
                    À propos de SDBSNX
                  </Link>
                  <Link
                    to="/vision"
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-brand-blue transition-colors"
                  >
                    Notre Vision
                  </Link>
                  <Link
                    to="/mission"
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-brand-blue transition-colors"
                  >
                    Notre Mission & Objectifs
                  </Link>
                  <Link
                    to="/valeurs"
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-brand-blue transition-colors"
                  >
                    Nos Valeurs Clés
                  </Link>
                  <Link
                    to="/philosophie"
                    className="block px-4 py-2.5 text-sm text-slate-200 hover:text-white hover:bg-brand-blue transition-colors"
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
                className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                  location.pathname.startsWith('/services')
                    ? 'text-white bg-white/10'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Solutions & Services</span>
                <ChevronDown className="ml-1 w-4 h-4 opacity-70" />
              </Link>

              {servicesOpen && (
                <div className="absolute left-0 mt-1 w-80 rounded-xl bg-[#0A0F1D] py-2 z-50 border border-white/10 shadow-2xl">
                  <Link
                    to="/services/legaltech"
                    className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 group"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">
                        Solutions LegalTech
                      </span>
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-brand-blue text-white">
                        Spécialisé
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 mt-0.5">Bridging Law and Technology</span>
                  </Link>

                  <Link
                    to="/services/cybersecurite"
                    className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 group"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">
                      Cybersécurité & Audits
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5">Évaluation des risques et conformité stricte</span>
                  </Link>

                  <Link
                    to="/services/developpement"
                    className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 group"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">
                      Développement Web & Mobile
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5">Plateformes critiques, SaaS & PWA</span>
                  </Link>

                  <Link
                    to="/services/conseil"
                    className="flex flex-col px-4 py-3 hover:bg-white/5 transition-colors group"
                  >
                    <span className="text-sm font-semibold text-white group-hover:text-brand-blue transition-colors">
                      Conseil Technologique
                    </span>
                    <span className="text-xs text-slate-400 mt-0.5">Architecture & Transformation numérique</span>
                  </Link>

                  <div className="border-t border-white/10 mt-1 pt-1.5 px-4 pb-1">
                    <Link
                      to="/services"
                      className="block text-xs font-semibold text-brand-blue hover:underline"
                    >
                      Voir tous les services →
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                isActive('/contact') ? 'text-white bg-brand-blue' : 'text-slate-300 hover:text-white hover:bg-white/5'
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
              className="p-2 text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors border border-transparent hover:border-white/10"
              title="Portail Administration"
            >
              <Lock className="w-4 h-4" />
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center px-4 py-2 rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors active:scale-[0.98]"
            >
              <span>Start a Project</span>
              <ArrowRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex items-center space-x-2 lg:hidden">
            <Link
              to="/admin/login"
              className="p-2 text-slate-400 hover:text-white"
              aria-label="Accès Administration"
            >
              <Lock className="w-4 h-4" />
            </Link>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-lg text-slate-200 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-white" /> : <Menu className="w-5 h-5 text-white" />}
            </button>
          </div>

        </div>
      </div>

      {/* ========================================================================= */}
      {/* MOBILE FULL-SCREEN DRAWER (Completely scrollable, zero cut-off)          */}
      {/* ========================================================================= */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-[57px] sm:top-[65px] bottom-0 z-50 bg-[#050811] flex flex-col border-t border-white/10 lg:hidden">
          
          {/* Scrollable menu content */}
          <div className="flex-1 overflow-y-auto overscroll-contain px-5 py-6 space-y-6 pb-28">
            
            {/* Quick Primary Links */}
            <div className="grid grid-cols-2 gap-2.5">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-xl text-center text-sm font-bold border transition-colors ${
                  isActive('/')
                    ? 'bg-brand-blue text-white border-brand-blue'
                    : 'bg-[#0A0F1D] text-slate-200 border-white/10 hover:border-white/20'
                }`}
              >
                Accueil
              </Link>
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`p-3 rounded-xl text-center text-sm font-bold border transition-colors ${
                  isActive('/contact')
                    ? 'bg-brand-blue text-white border-brand-blue'
                    : 'bg-[#0A0F1D] text-slate-200 border-white/10 hover:border-white/20'
                }`}
              >
                Contact
              </Link>
            </div>

            {/* Group 1: Pôles & Services */}
            <div className="space-y-2">
              <div className="flex items-center justify-between pb-1 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold">
                  Solutions & Services
                </span>
                <Link
                  to="/services"
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-[11px] text-slate-400 hover:text-white"
                >
                  Tous les services →
                </Link>
              </div>

              <div className="space-y-2 pt-1">
                <Link
                  to="/services/legaltech"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-between p-3 rounded-xl bg-[#0A0F1D] border border-white/10 hover:border-brand-blue transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <Scale className="w-4 h-4 text-brand-blue flex-shrink-0" />
                    <div>
                      <span className="text-sm font-bold text-white block">Solutions LegalTech</span>
                      <span className="text-xs text-slate-400 block">Bridging Law and Technology</span>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono uppercase px-1.5 py-0.5 rounded bg-brand-blue text-white">
                    Pôle
                  </span>
                </Link>

                <Link
                  to="/services/cybersecurite"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-[#0A0F1D] border border-white/10 hover:border-brand-blue transition-colors"
                >
                  <Shield className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-white block">Cybersécurité & Audits</span>
                    <span className="text-xs text-slate-400 block">Évaluation autorisée & Défense</span>
                  </div>
                </Link>

                <Link
                  to="/services/developpement"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-[#0A0F1D] border border-white/10 hover:border-brand-blue transition-colors"
                >
                  <Code className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-white block">Développement Web & Mobile</span>
                    <span className="text-xs text-slate-400 block">Applications métier, SaaS, PWA</span>
                  </div>
                </Link>

                <Link
                  to="/services/conseil"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-3 p-3 rounded-xl bg-[#0A0F1D] border border-white/10 hover:border-brand-blue transition-colors"
                >
                  <Compass className="w-4 h-4 text-brand-blue flex-shrink-0" />
                  <div>
                    <span className="text-sm font-bold text-white block">Conseil Technologique</span>
                    <span className="text-xs text-slate-400 block">Architecture & Urbanisation</span>
                  </div>
                </Link>
              </div>
            </div>

            {/* Group 2: Institution */}
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase tracking-wider text-brand-blue font-bold pb-1 block border-b border-white/10">
                Institution & Valeurs
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <Link
                  to="/a-propos"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-[#0A0F1D] border border-white/10 hover:border-brand-blue text-sm text-slate-200"
                >
                  <Sparkles className="w-3.5 h-3.5 text-brand-blue" />
                  <span>À propos de SDBSNX</span>
                </Link>
                <Link
                  to="/vision"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-[#0A0F1D] border border-white/10 hover:border-brand-blue text-sm text-slate-200"
                >
                  <Target className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Notre Vision</span>
                </Link>
                <Link
                  to="/mission"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-[#0A0F1D] border border-white/10 hover:border-brand-blue text-sm text-slate-200"
                >
                  <Layers className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Notre Mission</span>
                </Link>
                <Link
                  to="/valeurs"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-[#0A0F1D] border border-white/10 hover:border-brand-blue text-sm text-slate-200"
                >
                  <Award className="w-3.5 h-3.5 text-brand-blue" />
                  <span>Nos Valeurs Clés</span>
                </Link>
                <Link
                  to="/philosophie"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center space-x-2.5 p-2.5 rounded-lg bg-[#0A0F1D] border border-white/10 hover:border-brand-blue text-sm text-slate-200 sm:col-span-2"
                >
                  <span className="text-brand-blue font-bold">#</span>
                  <span>Notre Philosophie (The Standard We Live By)</span>
                </Link>
              </div>
            </div>

            {/* Bottom Actions inside drawer */}
            <div className="pt-2 space-y-3">
              <Link
                to="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center py-3.5 rounded-xl text-sm font-bold text-white bg-brand-blue hover:bg-brand-blue-hover block transition-colors shadow-md"
              >
                Start a Project →
              </Link>

              <Link
                to="/admin/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center space-x-2 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white bg-white/5 border border-white/10"
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
