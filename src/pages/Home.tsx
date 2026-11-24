import React, { Suspense, lazy } from 'react';
import { SEO } from '../components/common/SEO';
import { IntroSplash } from '../components/home/IntroSplash';
import { Hero } from '../components/home/Hero';

// Sections chargées avec React.lazy sous la ligne de flottaison
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

// Fallback léger pendant le chargement progressif
const SectionLoader: React.FC = () => (
  <div className="w-full py-16 flex items-center justify-center bg-white text-slate-400">
    <div className="flex items-center space-x-2">
      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
      <span className="text-xs font-mono uppercase tracking-widest text-slate-500">Chargement...</span>
    </div>
  </div>
);

export const HomePage: React.FC = () => {
  return (
    <div className="relative w-full bg-white text-[#0B1B3D] min-h-screen overflow-x-hidden">
      
      {/* 1. SEO & Métadonnées complètes */}
      <SEO
        title="Alkeb.lab — Solutions numériques, LegalTech & cybersécurité au Sénégal"
        description="Alkeb.lab accompagne les organisations au Sénégal avec des solutions LegalTech souveraines, des audits de cybersécurité, du développement web et mobile, et du conseil numérique."
        canonicalPath="/"
      />

      {/* 2. Intro plein écran avec salutations multilingues (Bienvenue, Dalal ak jàmm, Welcome, أهلاً وسهلاً)
          Animations fondu + flou + glissement conservées, sessionStorage, bouton Passer. */}
      <IntroSplash />

      {/* 3. Hero Section (Au-dessus de la ligne de flottaison)
          - H1 animé mot par mot avec masque
          - Sous-titre avec mot tournant automatique
          - Lueurs ambiantes dérivantes et curseur réactif sans re-render */}
      <Hero />

      {/* 4. Sections sous la ligne de flottaison avec React.lazy & Suspense */}
      <Suspense fallback={<SectionLoader />}>
        
        {/* Chiffres clés avec compteurs animés au scroll */}
        <KeyFigures />

        {/* Pôles & Cartes de Services (cascade, élévation et bordure émeraude) */}
        <ServicesSection />

        {/* Pôle LegalTech et cadre des transactions électroniques */}
        <LegalTechSection />

        {/* Démonstrations Techniques & Capsules Vidéo HD avec modal YouTube */}
        <TechDemosSection />

        {/* À propos & Vision institutionnelle */}
        <HomeAboutSection />

        {/* Appel à l'action final */}
        <HomeCtaSection />

      </Suspense>

    </div>
  );
};
