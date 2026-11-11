import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { CookieBanner } from '../ui/CookieBanner';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-[#050811] text-slate-100 selection:bg-brand-blue selection:text-white relative">
      <Header />
      <main className="flex-grow pt-20">
        {children}
      </main>
      <Footer />
      <CookieBanner />
    </div>
  );
};

