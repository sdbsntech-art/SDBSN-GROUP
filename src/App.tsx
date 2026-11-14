import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { AppRoutes } from './routes';
import { initSecurityProtection } from './lib/securityProtection';

export const App: React.FC = () => {
  useEffect(() => {
    // Enable client-side anti-inspection, right-click, F12 and DevTools protection
    const cleanup = initSecurityProtection();
    return cleanup;
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <AppRoutes />
      </Layout>
    </BrowserRouter>
  );
};

export default App;

