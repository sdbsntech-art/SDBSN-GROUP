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
    // Check fallback dev admin session in localStorage if Supabase is not configured or in offline dev mode
    const checkAuth = async () => {
      if (isSupabaseConfigured && supabase) {
        const { data: { session } } = await supabase.auth.getSession();
        setIsAuthenticated(Boolean(session));
      } else {
        // Fallback local session
        const localAdminSession = localStorage.getItem('sdbsnx_admin_token');
        setIsAuthenticated(Boolean(localAdminSession));
      }
      setLoading(false);
    };

    checkAuth();
  }, []);

  if (loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center space-y-3">
          <div className="w-8 h-8 border-2 border-brand-blue border-t-transparent rounded-full animate-spin mx-auto" />
          <p className="text-xs font-mono text-slate-400">Vérification des accréditations...</p>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return <>{children}</>;
};
