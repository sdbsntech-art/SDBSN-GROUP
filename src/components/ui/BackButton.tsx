import React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

interface BackButtonProps {
  to?: string;
  label?: string;
  className?: string;
}

export const BackButton: React.FC<BackButtonProps> = ({ 
  to, 
  label = 'Retour', 
  className = '' 
}) => {
  const navigate = useNavigate();

  if (to) {
    return (
      <Link
        to={to}
        className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#0A0F1D] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors group mb-6 ${className}`}
      >
        <ArrowLeft className="w-3.5 h-3.5 text-brand-blue transition-transform group-hover:-translate-x-1" />
        <span>{label}</span>
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        if (window.history.length > 1) {
          navigate(-1);
        } else {
          navigate('/');
        }
      }}
      className={`inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-[#0A0F1D] hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 text-xs font-semibold transition-colors group mb-6 ${className}`}
    >
      <ArrowLeft className="w-3.5 h-3.5 text-brand-blue transition-transform group-hover:-translate-x-1" />
      <span>{label}</span>
    </button>
  );
};

