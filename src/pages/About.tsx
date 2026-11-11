import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Lightbulb, 
  ShieldCheck, 
  Cpu, 
  Building2, 
  Users, 
  ArrowRight 
} from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-8 sm:py-16 px-4 sm:px-6 lg:px-8 relative bg-[#0E1B17] text-[#F4F1EA]">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Navigation retour */}
        <div>
          <BackButton to="/" label="Retour à l'accueil" />
        </div>

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#15271F] border border-[#24403A] text-xs font-mono text-[#6EE7B7] uppercase font-bold">
            <span>Présentation Institutionnelle</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1EA] tracking-tight font-display">
            À propos de SDBSNX
          </h1>
          <p className="text-[#9DB2A8] max-w-2xl mx-auto text-sm sm:text-base leading-relaxed">
            Une agence de solutions numériques guidée par la rigueur, la cybersécurité et l&apos;impact concret au service du progrès économique et sociétal.
          </p>
        </div>

        {/* Core Conviction Banner */}
        <div className="relative p-6 sm:p-10 rounded-2xl bg-[#15271F] border border-[#24403A] border-l-4 border-l-[#10B981] space-y-3 shadow-md">
          <span className="text-xs font-mono text-[#6EE7B7] uppercase tracking-wider font-bold">
            Notre Conviction Fondatrice
          </span>
          <blockquote className="text-lg sm:text-2xl font-medium text-[#F4F1EA] italic leading-relaxed">
            &ldquo;La technologie n&apos;a de valeur que lorsqu&apos;elle répond à un besoin réel, améliore une situation et crée un impact positif.&rdquo;
          </blockquote>
          <p className="text-xs sm:text-sm text-[#9DB2A8] leading-relaxed">
            Chez SDBSNX, nous refusons l&apos;artifice et les promesses technologiques creuses. Chaque ligne de code et chaque architecture répondent à des impératifs d&apos;utilité, de sécurité et d&apos;efficacité mesurable.
          </p>
        </div>

        {/* Narrative & Positioning */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div className="space-y-3 text-[#9DB2A8] text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F4F1EA] font-display">
              Résoudre des problèmes concrets par l&apos;ingénierie
            </h2>
            <p>
              Fondée avec la volonté de rehausser les standards de qualité et de sécurité des services numériques en Afrique et sur le marché international, SDBSNX réunit des compétences spécialisées en génie logiciel, en cybersécurité et en LegalTech.
            </p>
            <p>
              Nous accompagnons aussi bien les administrations publiques, les directions juridiques et les grands groupes que les entrepreneurs visionnaires désireux de bâtir des plateformes durables.
            </p>
          </div>

          <div className="space-y-3 text-[#9DB2A8] text-sm sm:text-base leading-relaxed">
            <h2 className="text-xl sm:text-2xl font-bold text-[#F4F1EA] font-display">
              Une culture de discipline et de sécurité
            </h2>
            <p>
              La sécurité n&apos;est pas une option ajoutée à la hâte en fin de projet. Dès la conception technique (Security by Design), nos équipes intègrent les impératifs de confidentialité, de résilience et de conformité réglementaire.
            </p>
            <p>
              Notre approche méthodique repose sur des processus documentés, des tests systématiques et une gouvernance transparente.
            </p>
          </div>
        </div>

        {/* 6 Key Commitments */}
        <div className="space-y-6">
          <div className="text-center max-w-xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-[#F4F1EA] font-display">
              Notre engagement s&apos;exprime dans 6 domaines clés :
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] shadow-sm transition-all space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                <Lightbulb className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F4F1EA]">L&apos;Innovation Utile</h4>
              <p className="text-xs text-[#9DB2A8] leading-relaxed">
                Rechercher constamment des solutions pionnières pour débloquer les freins opérationnels de nos clients.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] shadow-sm transition-all space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                <Target className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F4F1EA]">La Transformation Numérique</h4>
              <p className="text-xs text-[#9DB2A8] leading-relaxed">
                Moderniser les processus traditionnels et accompagner les équipes vers des flux 100% digitalisés.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] shadow-sm transition-all space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F4F1EA]">La Sécurité Informatique</h4>
              <p className="text-xs text-[#9DB2A8] leading-relaxed">
                Protéger les données souveraines et évaluer les vulnérabilités dans un cadre contractuel rigoureux.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] shadow-sm transition-all space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                <Cpu className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F4F1EA]">L&apos;Entrepreneuriat Tech</h4>
              <p className="text-xs text-[#9DB2A8] leading-relaxed">
                Catalyser la création de plateformes technologiques pérennes pour les porteurs de projets ambitieux.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] shadow-sm transition-all space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                <Building2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F4F1EA]">La Modernisation Institutionnelle</h4>
              <p className="text-xs text-[#9DB2A8] leading-relaxed">
                Apporter aux organisations publiques et privées des outils d&apos;efficacité administrative sans faille.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-[#15271F] border border-[#24403A] hover:border-[#10B981] shadow-sm transition-all space-y-3">
              <div className="p-2.5 w-fit rounded-lg bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                <Users className="w-5 h-5" />
              </div>
              <h4 className="text-base font-bold text-[#F4F1EA]">L&apos;Accessibilité Numérique</h4>
              <p className="text-xs text-[#9DB2A8] leading-relaxed">
                Concevoir des interfaces intuitives et utilisables par tous, indépendamment du niveau de technicité.
              </p>
            </div>
          </div>
        </div>

        {/* Footer CTAs */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#15271F] border border-[#24403A] flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-bold text-[#F4F1EA]">Découvrez nos fondements directeurs</h4>
            <p className="text-xs text-[#9DB2A8]">Explorez notre vision, notre mission et notre socle de valeurs.</p>
          </div>
          <div className="flex items-center space-x-3 w-full sm:w-auto justify-center">
            <Link
              to="/vision"
              className="px-4 py-2.5 rounded-lg text-xs font-semibold text-[#F4F1EA] hover:text-[#6EE7B7] bg-[#0E1B17] hover:bg-[#1C332A] border border-[#24403A] shadow-sm transition-colors"
            >
              Notre Vision
            </Link>
            <Link
              to="/valeurs"
              className="px-4 py-2.5 rounded-lg text-xs font-bold text-[#04231A] bg-[#10B981] hover:bg-[#059669] shadow-sm transition-colors flex items-center"
            >
              <span>Nos Valeurs</span>
              <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};
