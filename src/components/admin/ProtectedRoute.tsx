import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const checkAuth = async () => {
      try {
        if (isSupabaseConfigured()) {
          const { data } = await supabase.auth.getSession();
          if (data.session) {
            if (isMounted) {
              setIsAuthenticated(true);
              setLoading(false);
            }
            return;
          }
        }

        // Vérification locale
        const localToken = localStorage.getItem('sdbsnx_admin_token');
        if (localToken) {
          if (isMounted) {
            setIsAuthenticated(true);
            setLoading(false);
          }
          return;
        }

        if (isMounted) {
          setIsAuthenticated(false);
          setLoading(false);
        }
      } catch {
        if (isMounted) {
          setIsAuthenticated(false);
          setLoading(false);
        }
      }
    };

    checkAuth();

    // Écouteur d'état auth Supabase
    let authListener: any = null;
    if (isSupabaseConfigured()) {
      const { data } = supabase.auth.onAuthStateChange((_event, session) => {
        if (isMounted) {
          setIsAuthenticated(Boolean(session));
        }
      });
      authListener = data.subscription;
    }

    return () => {
      isMounted = false;
      if (authListener) {
        authListener.unsubscribe();
      }
    };
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center bg-[#0B2B2A]">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-[#10B981] border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-mono text-[#F3E3C3]/70">Vérification de la session administrateur Supabase...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};
