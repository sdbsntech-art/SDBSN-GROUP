import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from '../pages/Home';
import { AboutPage } from '../pages/About';
import { VisionPage } from '../pages/Vision';
import { MissionPage } from '../pages/Mission';
import { ValuesPage } from '../pages/Values';
import { PhilosophyPage } from '../pages/Philosophy';
import { ServicesIndexPage } from '../pages/ServicesIndex';
import { ServiceDetailPage } from '../pages/ServiceDetail';
import { ContactPage } from '../pages/Contact';
import { LegalNoticePage } from '../pages/LegalNotice';
import { PrivacyPolicyPage } from '../pages/PrivacyPolicy';
import { CookiesPolicyPage } from '../pages/CookiesPolicy';
import { TermsPage } from '../pages/Terms';
import { NotFoundPage } from '../pages/NotFound';
import { AdminLoginPage } from '../pages/admin/AdminLogin';
import { AdminDashboardPage } from '../pages/admin/AdminDashboard';
import { ProtectedRoute } from '../components/admin/ProtectedRoute';

export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/a-propos" element={<AboutPage />} />
      <Route path="/vision" element={<VisionPage />} />
      <Route path="/mission" element={<MissionPage />} />
      <Route path="/valeurs" element={<ValuesPage />} />
      <Route path="/philosophie" element={<PhilosophyPage />} />
      
      {/* Services routes */}
      <Route path="/services" element={<ServicesIndexPage />} />
      <Route path="/services/:slug" element={<ServiceDetailPage />} />

      {/* Contact & Legal */}
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/mentions-legales" element={<LegalNoticePage />} />
      <Route path="/politique-confidentialite" element={<PrivacyPolicyPage />} />
      <Route path="/politique-cookies" element={<CookiesPolicyPage />} />
      <Route path="/conditions-utilisation" element={<TermsPage />} />

      {/* Admin Space */}
      <Route path="/admin/login" element={<AdminLoginPage />} />
      <Route
        path="/admin"
        element={
          <ProtectedRoute>
            <AdminDashboardPage />
          </ProtectedRoute>
        }
      />

      {/* Custom 404 */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

