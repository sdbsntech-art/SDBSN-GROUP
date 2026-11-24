import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import { supabase, isSupabaseConfigured } from '../../lib/supabase';
import { isAdminEmail } from '../../lib/adminAccess';

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
        if (!isSupabaseConfigured()) return;

        const { data: sessionData, error: sessionError } = await supabase.auth.getSession();
        if (sessionError) throw sessionError;
        if (!sessionData.session) return;

        const { data: userData, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;

        if (isMounted) setIsAuthenticated(isAdminEmail(userData.user?.email));
      } catch (error) {
        console.error('Unable to verify Supabase admin session:', error);
        if (isMounted) setIsAuthenticated(false);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    void checkAuth();

    const { data } = isSupabaseConfigured()
      ? supabase.auth.onAuthStateChange((_event, session) => {
          if (isMounted) {
            setIsAuthenticated(Boolean(session && isAdminEmail(session.user.email)));
          }
        })
      : { data: { subscription: null } };

    return () => {
      isMounted = false;
      data.subscription?.unsubscribe();
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
