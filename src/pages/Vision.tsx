import React from 'react';
import { Link } from 'react-router-dom';
import { Eye, Shield, Globe2, Sparkles, ArrowRight, Check } from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const VisionPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-[#050811]">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Navigation retour */}
        <div>
          <BackButton to="/" label="Retour à l'accueil" />
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0A0F1D] border border-white/10 text-xs font-mono text-brand-blue uppercase font-bold">
            <span>Perspective Stratégique</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Notre Vision
          </h1>
          <p className="text-slate-400 max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Bâtir un écosystème numérique africain souverain, protecteur et technologiquement exemplaire.
          </p>
        </div>

        {/* Vision Statement Banner */}
        <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-white/10 text-center space-y-6">
          <div className="p-3.5 w-fit mx-auto rounded-2xl bg-white/5 text-brand-blue border border-white/10">
            <Eye className="w-8 h-8" />
          </div>

          <span className="text-xs font-mono text-brand-blue uppercase tracking-widest font-bold block">
            DÉCLARATION DE VISION OFFICIELLE
          </span>

          <h2 className="text-xl sm:text-3xl md:text-4xl font-extrabold text-white max-w-3xl mx-auto leading-snug font-display">
            &ldquo;Participer à la construction d&apos;un environnement numérique africain plus innovant, plus sécurisé et plus accessible.&rdquo;
          </h2>

          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            L&apos;Afrique est à l&apos;aube d&apos;une transformation technologique sans précédent. Notre ambition est d&apos;élever les standards de résilience et de fiabilité de cette dynamique en concevant des infrastructures et logiciels conformes aux meilleures exigences mondiales.
          </p>
        </div>

        {/* The 3 Pillars of our Vision */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0F1D] border border-white/10 space-y-4 hover:border-brand-blue transition-colors">
            <div className="p-3 w-fit rounded-xl bg-white/5 text-brand-blue">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">Plus Innovant</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Stimuler l&apos;ingéniosité africaine en développant des produits logiciels sur-mesure (LegalTech, plateformes SaaS, PWA) qui adressent les défis spécifiques de nos marchés.
            </p>
            <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-400">
              <li className="flex items-center">
                <Check className="w-3.5 h-3.5 mr-2 text-brand-blue flex-shrink-0" />
                <span>Modernisation des flux administratifs</span>
              </li>
              <li className="flex items-center">
                <Check className="w-3.5 h-3.5 mr-2 text-brand-blue flex-shrink-0" />
                <span>Architectures cloud modernes</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0F1D] border border-white/10 space-y-4 hover:border-brand-blue transition-colors">
            <div className="p-3 w-fit rounded-xl bg-white/5 text-brand-blue">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">Plus Sécurisé</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Assurer la souveraineté et l&apos;intégrité des données d&apos;entreprises et institutionnelles face aux cybermenaces par des audits préventifs et le respect des normes internationales.
            </p>
            <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-400">
              <li className="flex items-center">
                <Check className="w-3.5 h-3.5 mr-2 text-brand-blue flex-shrink-0" />
                <span>Audits autorisés & remédiation</span>
              </li>
              <li className="flex items-center">
                <Check className="w-3.5 h-3.5 mr-2 text-brand-blue flex-shrink-0" />
                <span>Protection des actifs critiques</span>
              </li>
            </ul>
          </div>

          <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0F1D] border border-white/10 space-y-4 hover:border-brand-blue transition-colors">
            <div className="p-3 w-fit rounded-xl bg-white/5 text-brand-blue">
              <Globe2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-white font-display">Plus Accessible</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Démocratiser la technologie de pointe pour qu&apos;elle soit utilisable, intuitive et créatrice de valeur immédiate pour les entrepreneurs, administrations et citoyens.
            </p>
            <ul className="space-y-2 pt-2 border-t border-white/5 text-xs text-slate-400">
              <li className="flex items-center">
                <Check className="w-3.5 h-3.5 mr-2 text-brand-blue flex-shrink-0" />
                <span>Ergonomie UX orientée utilisateur</span>
              </li>
              <li className="flex items-center">
                <Check className="w-3.5 h-3.5 mr-2 text-brand-blue flex-shrink-0" />
                <span>Résilience réseau et mode PWA</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Next step navigation banner */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0A0F1D] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-white">Comment traduisons-nous cette vision en actions ?</h4>
            <p className="text-xs text-slate-400">Consultez notre mission concrète et nos objectifs opérationnels.</p>
          </div>
          <Link
            to="/mission"
            className="px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover transition-colors flex items-center justify-center flex-shrink-0"
          >
            <span>Découvrir notre Mission</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
          </Link>
        </div>

      </div>
    </div>
  );
};
