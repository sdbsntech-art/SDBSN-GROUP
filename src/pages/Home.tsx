import React, { Suspense, lazy } from 'react';
import { SEO } from '../components/common/SEO';
import { IntroSplash } from '../components/home/IntroSplash';
import { Hero } from '../components/home/Hero';

// Chargement différé (React.lazy) des sections situées sous la ligne de flottaison
const KeyFigures = lazy(() =>
  import('../components/home/KeyFigures').then((m) => ({ default: m.KeyFigures }))
);

const ServicesSection = lazy(() =>
  import('../components/home/ServicesSection').then((m) => ({ default: m.ServicesSection }))
);

const LegalTechSection = lazy(() =>
  import('../components/home/LegalTechSection').then((m) => ({ default: m.LegalTechSection }))
);

const TechDemosSection = lazy(() =>
  import('../components/home/TechDemosSection').then((m) => ({ default: m.TechDemosSection }))
);

const HomeAboutSection = lazy(() =>
  import('../components/home/HomeAboutSection').then((m) => ({ default: m.HomeAboutSection }))
);

const HomeCtaSection = lazy(() =>
  import('../components/home/HomeCtaSection').then((m) => ({ default: m.HomeCtaSection }))
);

// Fallback ultra-léger pendant le chargement progressif
const SectionLoader: React.FC = () => (
  <div className="w-full py-16 flex items-center justify-center bg-[#0B2B2A] text-[#F3E3C3]/50">
    <div className="flex items-center space-x-2">
      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
      <span className="text-xs font-mono uppercase tracking-widest">Chargement...</span>
    </div>
  </div>
);

export const HomePage: React.FC = () => {
  return (
    <div className="relative w-full bg-[#0B2B2A] text-[#F3E3C3] min-h-screen overflow-x-hidden">
      
      {/* 1. SEO & Métadonnées complètes */}
      <SEO
        title="Alkeb.dev — Solutions numériques, LegalTech & cybersécurité au Sénégal"
        description="Alkeb.dev accompagne les organisations au Sénégal avec des solutions LegalTech souveraines, des audits de cybersécurité, du développement web et mobile, et du conseil numérique."
        canonicalPath="/"
      />

      {/* 2. Intro plein écran avec salutations multilingues (Bienvenue, Dalal ak jàmm, Welcome, أهلاً وسهلاً)
          Une seule fois par session (sessionStorage en try/catch), bouton Passer, désactivé si prefers-reduced-motion.
          L'overlay n'empêche pas les moteurs de recherche d'indexer le H1 situé dans le Hero. */}
      <IntroSplash />

      {/* 3. Hero Section (Au-dessus de la ligne de flottaison)
          - H1 mot par mot avec masque
          - Sous-titre avec mot tournant (LegalTech, Cybersécurité, Web et mobile, Conseil numérique)
          - Lueurs ambiantes dérivantes (or et émeraude)
          - Lueur qui suit le curseur via --mx et --my sans re-render React */}
      <Hero />

      {/* 4. Sections sous la ligne de flottaison chargées via React.lazy & Suspense */}
      <Suspense fallback={<SectionLoader />}>
        
        {/* Chiffres clés avec compteur animé au scroll */}
        <KeyFigures />

        {/* Pôles & Cartes de Services (apparition en cascade, hover avec bordure émeraude) */}
        <ServicesSection />

        {/* Pôle Spécialisé LegalTech & Signature Certifiée (Loi 2008-08) */}
        <LegalTechSection />

        {/* Démonstrations Techniques & Capsules Vidéo */}
        <TechDemosSection />

        {/* À propos & Vision institutionnelle */}
        <HomeAboutSection />

        {/* CTA final à fort impact */}
        <HomeCtaSection />

      </Suspense>

    </div>
  );
};
