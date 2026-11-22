import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Greeting {
  text: string;
  lang: string;
  label: string;
}

const GREETINGS: Greeting[] = [
  { text: 'Bienvenue', lang: 'fr', label: 'Français' },
  { text: 'Dalal ak jàmm', lang: 'wo', label: 'Wolof' },
  { text: 'Welcome', lang: 'en', label: 'English' },
  { text: 'أهلاً وسهلاً', lang: 'ar', label: 'العربية' },
];

const STORAGE_KEY = 'alkeb_intro_completed';

interface IntroSplashProps {
  onComplete?: () => void;
}

export const IntroSplash: React.FC<IntroSplashProps> = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState<boolean>(() => {
    if (typeof window === 'undefined') return false;
    try {
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (prefersReduced) return false;
      const alreadySeen = window.sessionStorage.getItem(STORAGE_KEY);
      return alreadySeen !== 'true';
    } catch {
      return false;
    }
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const dismissIntro = useCallback(() => {
    try {
      window.sessionStorage.setItem(STORAGE_KEY, 'true');
    } catch {
      // Ignorer si storage non accessible
    }
    setIsVisible(false);
    if (onComplete) onComplete();
  }, [onComplete]);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => {
        if (prev < GREETINGS.length - 1) {
          return prev + 1;
        } else {
          clearInterval(timer);
          setTimeout(dismissIntro, 850);
          return prev;
        }
      });
    }, 1100);

    return () => clearInterval(timer);
  }, [isVisible, dismissIntro]);

  if (!isVisible) return null;

  const currentGreeting = GREETINGS[currentIndex];

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          aria-label="Écran d'accueil Alkeb.dev"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0B1B3D] text-white select-none overflow-hidden"
        >
          {/* Lueurs décoratives */}
          <div className="absolute top-1/4 left-1/3 w-80 sm:w-96 h-80 sm:h-96 rounded-full bg-[#10B981]/20 blur-3xl pointer-events-none glow-drift-emerald" />
          <div className="absolute bottom-1/4 right-1/3 w-72 sm:w-80 h-72 sm:h-80 rounded-full bg-[#2563EB]/25 blur-3xl pointer-events-none glow-drift-gold" />

          {/* Bouton Passer */}
          <button
            type="button"
            onClick={dismissIntro}
            className="absolute top-6 right-6 sm:top-8 sm:right-8 px-4 py-2 rounded-full text-xs sm:text-sm font-medium tracking-wide text-white/80 hover:text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#10B981]"
          >
            Passer ✕
          </button>

          {/* Salutation animée */}
          <div className="relative z-10 flex flex-col items-center justify-center min-h-[160px] px-6 text-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentGreeting.text}
                initial={{ opacity: 0, y: 24, filter: 'blur(10px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
                transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                className="flex flex-col items-center"
              >
                <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white font-display">
                  {currentGreeting.text}
                </span>

                <span className="mt-3 text-xs sm:text-sm font-mono tracking-widest uppercase text-[#10B981] font-semibold">
                  Alkeb.dev • {currentGreeting.label}
                </span>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Indicateur de progression */}
          <div className="absolute bottom-10 flex items-center space-x-2">
            {GREETINGS.map((g, idx) => (
              <span
                key={g.text}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex
                    ? 'w-8 bg-[#10B981]'
                    : idx < currentIndex
                    ? 'w-2 bg-white/60'
                    : 'w-2 bg-white/20'
                }`}
              />
            ))}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};
