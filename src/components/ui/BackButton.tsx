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

  const buttonClasses = `inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-xl bg-white hover:bg-slate-50 text-[#0B1B3D] hover:text-[#10B981] border border-slate-200 hover:border-[#10B981] text-xs font-semibold shadow-xs transition-all group mb-6 ${className}`;

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        <ArrowLeft className="w-3.5 h-3.5 text-[#10B981] transition-transform group-hover:-translate-x-1" />
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
      className={buttonClasses}
    >
      <ArrowLeft className="w-3.5 h-3.5 text-[#10B981] transition-transform group-hover:-translate-x-1" />
      <span>{label}</span>
    </button>
  );
};
