import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  Scale, 
  Code, 
  Compass, 
  ChevronDown,
  Play,
  CheckCircle2,
  Clock,
  MessageCircle,
  X,
  Award,
  Zap,
  ExternalLink,
  FileText,
  Lock,
  Layers,
  ShieldAlert,
  FileCheck
} from 'lucide-react';
import { InteractiveValues } from '../components/sections/InteractiveValues';
import { PhilosophyQuotes } from '../components/sections/PhilosophyQuotes';
import { SERVICES_DATA } from '../data/services';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../lib/whatsapp';

interface TechDemoSolution {
  id: string;
  episode: string;
  title: string;
  department: string;
  targetAudience: string;
  category: string;
  categoryColor: 'emerald' | 'blue';
  duration: string;
  views: string;
  thumbnail: string;
  techTags: string[];
  youtubeId: string;
  youtubeUrl: string;
  videoSourceAuthor: string;
  videoTopic: string;
  summary: string;
  metric: string;
  inHousePillar: string;
}

const TECH_DEMO_SOLUTIONS: TechDemoSolution[] = [
  {
    id: 'solution-legaltech',
    episode: 'DÉMO #01',
    title: 'Plateforme LegalTech, Parapheur & Signature Électronique Certifiée',
    department: 'Pôle Ingénierie LegalTech SDBSNX',
    targetAudience: 'Cabinets d\'Avocats, Études Notariales & Directions Juridiques',
    category: 'LegalTech & Dématérialisation',
    categoryColor: 'emerald',
    duration: '03:45 min',
    views: 'Architecture LegalTech',
    thumbnail: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80',
    techTags: ['Loi 2008-08', 'Signature SHA-256', 'GED Chiffrée', 'Coffre-fort AES-256'],
    youtubeId: 'CqEsIDrEASs',
    youtubeUrl: 'https://www.youtube.com/watch?v=CqEsIDrEASs',
    videoSourceAuthor: 'Rootstack Technology Insights (Licence libre de diffusion API)',
    videoTopic: 'Architecture des technologies juridiques et automatisation documentaire',
    summary: 'Présentation des principes d\'architecture logicielle développés en interne chez SDBSNX : gestion électronique de documents (GED) juridique, archivage à valeur probante conforme à la loi sénégalaise n° 2008-08, et signature électronique sécurisée par empreinte cryptographique SHA-256.',
    metric: 'Traçabilité probatoire 100% infalsifiable & réduction drastique des délais administratifs',
    inHousePillar: 'Conception logicielle souveraine conforme aux règles déontologiques et réglementations OHADA & Sénégal.'
  },
  {
    id: 'solution-cybersecurity',
    episode: 'DÉMO #02',
    title: 'Suite Cybersécurité Offensive, Audit de Code & Résilience des SI',
    department: 'Laboratoire Cybersécurité SDBSNX',
    targetAudience: 'Banques, Fintechs, Opérateurs & Systèmes d\'Information Critiques',
    category: 'Cybersécurité & Défense',
    categoryColor: 'blue',
    duration: '05:30 min',
    views: 'Audit & Pentesting',
    thumbnail: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    techTags: ['Pentesting OWASP', 'Audit Code Stat/Dyn', 'Durcissement Cloud', 'Chiffrement TLS 1.3'],
    youtubeId: 'xUmf-aGC5qc',
    youtubeUrl: 'https://www.youtube.com/watch?v=xUmf-aGC5qc',
    videoSourceAuthor: 'Lumiverse Security Lab (Licence libre de diffusion API)',
    videoTopic: 'Défense des flux financiers, détection des menaces et résilience des plateformes bancaires',
    summary: 'Méthodologie d\'audit et d\'évaluation technique appliquée par SDBSNX : détection des vecteurs d\'intrusion selon les standards OWASP, tests de pénétration des endpoints, sécurisation des API transactionnelles et surveillance continue de la conformité.',
    metric: 'Neutralisation préventive de 100% des vulnérabilités critiques identifiées',
    inHousePillar: 'Missions d\'audit exécutées sous convention formelle d\'autorisation écrite avec protocole d\'accord préalable.'
  },
  {
    id: 'solution-software-saas',
    episode: 'DÉMO #03',
    title: 'Développement d\'Applications Web, Mobiles PWA & Plateformes SaaS',
    department: 'Pôle Développement Applicatif SDBSNX',
    targetAudience: 'Startups à fort volume, Entreprises en expansion & PME',
    category: 'Ingénierie Logicielle',
    categoryColor: 'emerald',
    duration: '04:12 min',
    views: 'Architecture SaaS Cloud',
    thumbnail: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    techTags: ['React / TypeScript', 'Node.js Microservices', 'PWA Offline-First', 'PostgreSQL / APIs'],
    youtubeId: 'oFRfMkxCoss',
    youtubeUrl: 'https://www.youtube.com/watch?v=oFRfMkxCoss',
    videoSourceAuthor: 'Uplatz Enterprise Architecture (Licence libre de diffusion API)',
    videoTopic: 'Conception d\'architectures cloud distribuées pour plateformes métiers à fort trafic',
    summary: 'Démonstration des modèles d\'ingénierie logicielle conçus chez SDBSNX : découplage micro-services, applications progressives (PWA) synchronisées hors-ligne, persistance des états en temps réel et performances optimisées pour les environnements réseau africains.',
    metric: 'Temps de réponse inférieur à 200ms sur réseaux mobiles & évolutivité prouvée',
    inHousePillar: 'Code source proprietary ou open-source audité, zéro dépendance opaque, tests automatisés continus.'
  },
  {
    id: 'solution-consulting-govtech',
    episode: 'DÉMO #04',
    title: 'Schéma Directeur SI, Modernisation Institutionnelle & Urbanisation',
    department: 'Pôle Conseil & Architecture SI SDBSNX',
    targetAudience: 'Institutions Publiques, Agences d\'État & Organisations Régionales',
    category: 'Conseil & Urbanisation SI',
    categoryColor: 'blue',
    duration: '04:40 min',
    views: 'Modernisation & GovTech',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    techTags: ['Schéma Directeur', 'Interopérabilité SI', 'Gouvernance Données', 'Portail Usagers'],
    youtubeId: 'f-ugxtNzbCY',
    youtubeUrl: 'https://www.youtube.com/watch?v=f-ugxtNzbCY',
    videoSourceAuthor: 'techUK Digital Insights (Licence libre de diffusion API)',
    videoTopic: 'Impact et méthodologies de transformation numérique des organisations et services publics',
    summary: 'Approche stratégique éprouvée de SDBSNX pour moderniser les processus administratifs : cartographie des systèmes hérités (legacy), dématérialisation des démarches citoyennes, gouvernance sécurisée des données et conduite du changement.',
    metric: 'Dématérialisation complète des flux documentaires et satisfaction usagers certifiée',
    inHousePillar: 'Gouvernance alignée sur la souveraineté numérique et le strict respect des lois de protection des données.'
  }
];

export const HomePage: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<TechDemoSolution | null>(null);

  return (
    <div className="relative overflow-hidden w-full bg-white text-[#0B1B3D]">
      
      {/* ========================================================================= */}
      {/* HERO SECTION (Force-N Style: Clean White Base, Navy, Emerald & African Visual) */}
      {/* ========================================================================= */}
      <section className="relative pt-6 pb-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200/60 overflow-hidden">
        
        {/* Subtle decorative background glow rings */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-emerald-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-0" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              {/* Program & Institutional Badge (Force-N Inspired) */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/80 text-xs sm:text-sm font-bold text-[#059669] shadow-xs"
              >
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] animate-pulse" />
                <span className="tracking-wide">INNOVATION NUMÉRIQUE • CYBERSÉCURITÉ • SÉNÉGAL & AFRIQUE</span>
              </motion.div>

              {/* Main Headline */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="space-y-3"
              >
                <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-[#0B1B3D] tracking-tight leading-[1.12] font-display">
                  Bâtir le futur numérique.
                  <br />
                  <span className="text-[#10B981]">
                    Sécuriser ce qui compte.
                  </span>
                </h1>

                <p className="text-base sm:text-xl font-medium text-slate-700 leading-relaxed max-w-2xl">
                  SDBSNX propulse les entreprises, startups et institutions d&apos;Afrique avec des solutions logicielles d&apos;excellence, des audits de cybersécurité stricts et des plateformes LegalTech de pointe.
                </p>
              </motion.div>

              {/* Key Value Proposition Bullets */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 text-xs sm:text-sm text-slate-600 font-medium"
              >
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Conception sur-mesure & souveraine</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                  <span>Audits de sécurité & conformité RGPD/CDP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0" />
                  <span>Pôle spécialisé LegalTech & Dématérialisation</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-[#2563EB] flex-shrink-0" />
                  <span>Équipe d&apos;ingénieurs basés à Dakar</span>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-center gap-3.5 pt-3 w-full sm:w-auto"
              >
                <Link
                  to="/contact"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl font-bold bg-[#10B981] hover:bg-[#059669] text-white transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 group text-sm active:scale-[0.98]"
                >
                  <span>Démarrer un Projet</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={getWhatsAppUrl('Bonjour SDBSNX, je souhaite échanger au sujet de mon projet.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-[#0B1B3D] hover:text-[#059669] bg-white hover:bg-slate-50 border border-slate-300 shadow-sm flex items-center justify-center space-x-2 text-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-[#10B981]" />
                  <span>Échanger sur WhatsApp</span>
                </a>
              </motion.div>

              {/* Social Proof Mini Stats */}
              <div className="pt-4 border-t border-slate-200/80 flex flex-wrap items-center gap-6 text-xs text-slate-500 font-medium">
                <div>
                  <span className="font-extrabold text-[#0B1B3D] text-base block font-display">+50 Projets</span>
                  <span>Déployés avec succès</span>
                </div>
                <div className="h-7 w-px bg-slate-200" />
                <div>
                  <span className="font-extrabold text-[#10B981] text-base block font-display">100% Souverain</span>
                  <span>Données hébergées en sécurité</span>
                </div>
                <div className="h-7 w-px bg-slate-200" />
                <div>
                  <span className="font-extrabold text-[#2563EB] text-base block font-display">Dakar & International</span>
                  <span>Accompagnement continu</span>
                </div>
              </div>

            </div>

            {/* Right Visual Column (African Tech Professionals Showcase) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative"
            >
              {/* Main Visual Card Container */}
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl overflow-hidden border-2 border-slate-200/90 shadow-2xl bg-white group">
                
                {/* Hero Image featuring young African tech professionals */}
                <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80"
                    alt="Équipe d'ingénieurs et talents technologiques africains SDBSNX"
                    className="w-full h-full object-cover object-top sm:object-center group-hover:scale-105 transition-transform duration-700"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent" />
                  
                  {/* Overlay text on image */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <span className="inline-block px-2.5 py-0.5 rounded-full bg-[#10B981] text-white text-[11px] font-bold font-mono uppercase mb-1">
                      Excellence & Innovation
                    </span>
                    <h2 className="text-base sm:text-lg font-bold leading-tight font-display">
                      L&apos;Ingénierie Numérique Africaine aux Standards Mondiaux
                    </h2>
                  </div>
                </div>

                {/* Card Sub-Banner */}
                <div className="p-4 bg-white border-t border-slate-100 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center text-[#10B981]">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-[#0B1B3D]">Security by Design</p>
                      <p className="text-[11px] text-slate-500">Audits certifiés & dématérialisation</p>
                    </div>
                  </div>

                  <Link
                    to="/services"
                    className="text-xs font-bold text-[#2563EB] hover:text-[#1D4ED8] flex items-center"
                  >
                    <span>Explorer</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </div>

              </div>

              {/* Floating Badge 1 (Top Left) */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="hidden sm:flex absolute -top-5 -left-5 bg-white/95 backdrop-blur-md p-3 rounded-2xl border border-slate-200 shadow-xl items-center space-x-3 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-emerald-100 text-[#059669] flex items-center justify-center font-bold">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-extrabold text-[#0B1B3D]">Performances 99.9%</p>
                  <p className="text-[10px] text-slate-500 font-medium">Haute disponibilité & résilience</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 (Bottom Right) */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="hidden sm:flex absolute -bottom-5 -right-5 bg-[#0B1B3D] text-white p-3.5 rounded-2xl border border-slate-800 shadow-xl items-center space-x-3 z-20"
              >
                <div className="w-9 h-9 rounded-xl bg-[#10B981] text-white flex items-center justify-center font-bold">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white">Label d&apos;Excellence</p>
                  <p className="text-[10px] text-slate-300 font-mono">Dakar • Abidjan • International</p>
                </div>
              </motion.div>

            </motion.div>

          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="pt-10 flex flex-col items-center justify-center text-xs text-slate-400">
          <span className="uppercase tracking-widest text-[10px] mb-1 font-mono font-semibold text-slate-500">
            Explorer nos réalisations
          </span>
          <ChevronDown className="w-4 h-4 animate-bounce text-[#10B981]" />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INSTITUTIONAL PILLARS OVERVIEW (Clean Cards with Emerald & Blue Accents)  */}
      {/* ========================================================================= */}
      <section className="border-b border-slate-200/80 bg-slate-50 py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#10B981] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#059669] text-xs font-mono font-bold uppercase tracking-wider">
                  Engagement
                </span>
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              </div>
              <h4 className="text-base font-bold text-[#0B1B3D]">Éthique & Rigueur</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Transparence absolue et gouvernance exemplaire au cœur de chaque contrat et partenariat.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#2563EB] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2563EB] text-xs font-mono font-bold uppercase tracking-wider">
                  Sécurité
                </span>
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              </div>
              <h4 className="text-base font-bold text-[#0B1B3D]">Security by Design</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Protection proactive des systèmes d&apos;information et audits strictement encadrés.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#10B981] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#059669] text-xs font-mono font-bold uppercase tracking-wider">
                  Innovation
                </span>
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
              </div>
              <h4 className="text-base font-bold text-[#0B1B3D]">Pôle LegalTech</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Convergence inédite du droit et du génie logiciel pour dématérialiser les cabinets et directions juridiques.
              </p>
            </div>

            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 shadow-xs hover:shadow-md hover:border-[#2563EB] transition-all">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[#2563EB] text-xs font-mono font-bold uppercase tracking-wider">
                  Rayonnement
                </span>
                <span className="w-2 h-2 rounded-full bg-[#2563EB]" />
              </div>
              <h4 className="text-base font-bold text-[#0B1B3D]">Sénégal & Afrique</h4>
              <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                Solutions adaptées aux réalités des marchés locaux avec le niveau d&apos;exigence international.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAJOR DEDICATED SECTION: PÔLE D'EXCELLENCE LEGALTECH SOUVERAINE             */}
      {/* ========================================================================= */}
      <section className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white relative border-b border-slate-200">
        <div className="max-w-7xl mx-auto space-y-16">
          
          {/* Section Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-[#059669] uppercase tracking-wider">
              <Scale className="w-3.5 h-3.5 text-[#10B981]" />
              <span>Spécialité &amp; Fierté Technologique</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
              Pôle d&apos;Excellence LegalTech
              <span className="block text-[#10B981] mt-1">
                La Technologie au Service du Droit
              </span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              SDBSNX développe en interne des progiciels haute sécurité pour équiper les cabinets d&apos;avocats, études notariales, directions juridiques d&apos;entreprises et institutions en Afrique. Conforme à la loi sénégalaise n° 2008-08 et aux standards OHADA.
            </p>
          </div>

          {/* 4 Pillars Grid of SDBSNX LegalTech */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            
            {/* Pillar 1 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#10B981] transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center border border-emerald-200 group-hover:scale-110 transition-transform">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors">
                Parapheur &amp; Signature Certifiée
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Signature électronique sécurisée d&apos;actes, contrats et protocoles avec certificat cryptographique qualifié, horodatage certifié et valeur probatoire intégrale.
              </p>
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Loi 2008-08</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">SHA-256</span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-mono font-semibold text-emerald-700">Multi-signataires</span>
              </div>
            </div>

            {/* Pillar 2 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#2563EB] transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-200 group-hover:scale-110 transition-transform">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors">
                GED &amp; Gestion de Cabinet
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Centralisation et indexation des dossiers contentieux, classement automatique des pièces, suivi des diligences et calendrier des audiences avec alertes de forclusion.
              </p>
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Indexation OCR</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Dossiers Cloisonnés</span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[10px] font-mono font-semibold text-blue-700">Rappels Audiences</span>
              </div>
            </div>

            {/* Pillar 3 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#10B981] transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-[#10B981] flex items-center justify-center border border-emerald-200 group-hover:scale-110 transition-transform">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors">
                Coffre-Fort &amp; Valeur Probante
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Archivage chiffré de bout en bout (AES-256). Garantie d&apos;intégrité numérique sans risque d&apos;altération ni de fuite, avec journal d&apos;audit des consultations certifié.
              </p>
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">AES-256</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Standards OHADA</span>
                <span className="px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-mono font-semibold text-emerald-700">Audit Logs</span>
              </div>
            </div>

            {/* Pillar 4 */}
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#2563EB] transition-all space-y-4 group">
              <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#2563EB] flex items-center justify-center border border-blue-200 group-hover:scale-110 transition-transform">
                <Layers className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-[#0B1B3D] group-hover:text-[#2563EB] transition-colors">
                Cycle des Contrats (CLM)
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Génération assistée d&apos;actes juridiques, circuits d&apos;approbation internes, suivi des échéances contractuelles et portail client confidentiel pour les justiciables.
              </p>
              <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1.5">
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Workflows CLM</span>
                <span className="px-2 py-0.5 rounded bg-slate-100 text-[10px] font-mono font-semibold text-slate-700">Espace Sécurisé</span>
                <span className="px-2 py-0.5 rounded bg-blue-50 text-[10px] font-mono font-semibold text-blue-700">Portail Client</span>
              </div>
            </div>

          </div>

          {/* Legal Compliance & OHADA Highlight Banner */}
          <div className="p-8 sm:p-10 rounded-3xl bg-[#0B1B3D] text-white space-y-6 shadow-xl relative overflow-hidden">
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-white/10 text-[#6EE7B7] text-xs font-mono uppercase font-bold">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Cadre Réglementaire &amp; Validité Juridique Sénégalaise</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-extrabold leading-tight">
                  Une conformité rigoureuse avec la Loi n° 2008-08 &amp; la CDP
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Toutes les solutions LegalTech conçues par SDBSNX s&apos;articulent autour du respect strict des textes de la République du Sénégal régissant les transactions électroniques, la protection des données à caractère personnel (Loi 2008-12) et les actes uniformes OHADA.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-3 w-full lg:w-auto">
                <Link
                  to="/services/legaltech"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs bg-[#10B981] hover:bg-[#059669] text-[#04231A] transition-all shadow-sm text-center"
                >
                  Découvrir l&apos;Offre LegalTech
                </Link>
                <a
                  href={getWhatsAppUrl('Bonjour SDBSNX, je souhaite une démonstration privée de votre suite LegalTech pour mon cabinet ou mon entreprise.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl font-bold text-xs text-white bg-white/10 hover:bg-white/20 border border-white/20 transition-all text-center flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-[#10B981]" />
                  <span>Échanger avec nos Ingénieurs</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* TECHNICAL SOLUTIONS & INTERACTIVE DEMONSTRATIONS                          */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#059669] px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-bold">
              <Play className="w-3 h-3 fill-current" />
              <span>Démonstrations Techniques &amp; Savoir-Faire</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
              Nos Solutions &amp; Démonstrations en Vidéo
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Explorez les architectures logicielles, standards de sécurité et méthodologies appliqués par SDBSNX dans la conception de ses plateformes métiers.
            </p>
          </div>

          {/* Solutions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TECH_DEMO_SOLUTIONS.map((sol) => (
              <div
                key={sol.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                onClick={() => setActiveSolution(sol)}
              >
                {/* Thumbnail with Play Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={sol.thumbnail}
                    alt={sol.title}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-95"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/85 via-[#0B1B3D]/25 to-transparent" />
                  
                  {/* Episode Badge */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#0B1B3D]/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    {sol.episode}
                  </span>

                  {/* YouTube HD Pill */}
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-red-600/90 text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                    Vidéo Démo HD
                  </span>

                  {/* Duration Pill */}
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 backdrop-blur-xs text-white text-[10px] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#10B981]" />
                    {sol.duration}
                  </span>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#10B981] group-hover:bg-[#059669] text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition-all duration-200 pl-0.5 border-2 border-white/40">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className={`font-mono text-[11px] font-bold uppercase ${
                        sol.categoryColor === 'emerald' ? 'text-[#059669]' : 'text-[#2563EB]'
                      }`}>
                        {sol.category}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1 text-[10px] font-mono">
                        {sol.views}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors line-clamp-2 leading-snug">
                      {sol.title}
                    </h3>

                    <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                      Cible : {sol.targetAudience}
                    </p>
                  </div>

                  {/* Tech Tags */}
                  <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                    {sol.techTags.slice(0, 2).map((tag, idx) => (
                      <span key={idx} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-700 font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Department & Action */}
                  <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#10B981] group-hover:text-[#059669]">
                    <span className="flex items-center gap-1 text-[11px] text-slate-700 font-semibold truncate max-w-[170px]">
                      {sol.department}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <span>Démo</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Legal Notice & Neutrality Disclaimer */}
          <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed text-center sm:text-left flex items-start gap-3">
            <ShieldAlert className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
            <p>
              <strong>Transparence &amp; Déontologie :</strong> Les capsules vidéo ci-dessus sont des démonstrations et synthèses technologiques présentées à titre pédagogique pour illustrer les principes d&apos;ingénierie que SDBSNX applique. L&apos;ensemble de nos solutions, progiciels et plateformes sont conçus, développés et sécurisés sur-mesure dans nos laboratoires à Dakar pour chaque client et partenaire.
            </p>
          </div>

          {/* Banner under Solutions */}
          <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-blue-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D]">
                Vous souhaitez déployer l&apos;une de ces solutions pour votre structure ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Nos ingénieurs et consultants vous accompagnent du cadrage fonctionnel jusqu&apos;à la mise en production sécurisée.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/contact"
                className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#10B981] hover:bg-[#059669] transition-all shadow-sm flex items-center gap-1.5"
              >
                <span>Demander une Consultation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <a
                href={getWhatsAppUrl('Bonjour, j\'ai vu vos solutions techniques et je souhaite une étude pour mon projet.')}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 rounded-xl font-bold text-xs text-[#0B1B3D] bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs flex items-center gap-1.5"
              >
                <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
                <span>WhatsApp Direct</span>
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* SOLUTION INTERACTIVE DETAIL MODAL WITH YOUTUBE EMBED                      */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeSolution && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/85 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setActiveSolution(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="px-5 py-3.5 bg-[#0B1B3D] text-white flex items-center justify-between gap-3 border-b border-slate-800 flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="px-2.5 py-1 rounded-md bg-[#10B981] text-[#04231A] text-[11px] font-mono font-bold uppercase flex items-center gap-1.5 shadow-xs">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#04231A] animate-pulse" />
                    {activeSolution.episode}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {activeSolution.category}
                  </span>
                  <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded bg-red-600/90 text-white text-[10px] font-bold uppercase">
                    Démo Technique HD
                  </span>
                </div>

                <button
                  onClick={() => setActiveSolution(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center cursor-pointer"
                  aria-label="Fermer la modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* YouTube Live Player Embed */}
              <div className="relative aspect-video w-full bg-black flex-shrink-0">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeSolution.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={activeSolution.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Scrollable Body */}
              <div className="p-5 sm:p-7 space-y-5 text-sm text-slate-600 overflow-y-auto">
                {/* Title */}
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-[#059669] tracking-wider block mb-1">
                    {activeSolution.department}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#0B1B3D] leading-snug font-display">
                    {activeSolution.title}
                  </h3>
                  <div className="flex items-center gap-4 text-xs text-slate-500 mt-2 font-medium">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                      Durée : {activeSolution.duration}
                    </span>
                    <span>•</span>
                    <span className="text-[#2563EB] font-semibold">
                      Public cible : {activeSolution.targetAudience}
                    </span>
                  </div>
                </div>

                {/* Tech Tags Badge Group */}
                <div className="flex flex-wrap gap-2">
                  {activeSolution.techTags.map((tag, i) => (
                    <span key={i} className="px-3 py-1 rounded-lg bg-emerald-50 border border-emerald-200 text-xs font-mono font-bold text-emerald-800">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Architecture Summary */}
                <div className="space-y-2">
                  <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Architecture &amp; Capacités Techniques SDBSNX
                  </h5>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    {activeSolution.summary}
                  </p>
                </div>

                {/* Key Metric Highlight */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center space-x-3 text-[#064E3B]">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  <span className="font-bold text-sm sm:text-base">{activeSolution.metric}</span>
                </div>

                {/* In-House Commitment */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-1">
                  <span className="text-[11px] font-mono uppercase text-slate-400 font-bold block">
                    Garantie d&apos;Ingénierie Interne SDBSNX
                  </span>
                  <p className="text-xs sm:text-sm text-slate-700 font-medium">
                    {activeSolution.inHousePillar}
                  </p>
                </div>

                {/* Video Origin & Legal Notice */}
                <div className="p-3.5 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-800 leading-relaxed">
                  <strong>Notice de diffusion :</strong> {activeSolution.videoSourceAuthor}. Thématique : {activeSolution.videoTopic}. Vidéo de référence technique partagée via l&apos;API officielle YouTube. SDBSNX conçoit et déploie ses propres progiciels propriétaires de façon autonome.
                </div>

                {/* Modal Footer CTAs */}
                <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="flex flex-col sm:flex-row items-center gap-2.5 w-full sm:w-auto">
                    <a
                      href={getWhatsAppUrl(`Bonjour SDBSNX, je souhaite une démonstration personnalisée pour la solution : ${activeSolution.title}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-[#10B981] hover:bg-[#059669] text-[#04231A] flex items-center justify-center gap-2 transition-all shadow-sm"
                    >
                      <MessageCircle className="w-4 h-4" />
                      <span>Demander une Démo sur WhatsApp</span>
                    </a>

                    <a
                      href={activeSolution.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full sm:w-auto px-4 py-2.5 rounded-xl font-semibold text-xs text-slate-700 hover:text-red-600 bg-slate-100 hover:bg-slate-200 flex items-center justify-center gap-1.5 transition-colors border border-slate-200"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Voir la vidéo sur YouTube</span>
                    </a>
                  </div>

                  <button
                    onClick={() => setActiveSolution(null)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 transition-colors cursor-pointer"
                  >
                    Fermer
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ========================================================================= */}
      {/* ABOUT OVERVIEW (Clean Light Background with Rich African Tech Vision)      */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs text-[#059669] font-mono uppercase font-bold">
                <span>À propos de SDBSNX</span>
              </div>

              <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
                Résoudre des défis réels grâce à la technologie.
              </h2>

              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                SDBSNX est une agence technologique d&apos;un genre nouveau. Nous ne concevons pas le numérique comme un simple effet de mode, mais comme un levier fondamental de souveraineté, de transformation économique et d&apos;efficacité organisationnelle au Sénégal et en Afrique.
              </p>

              <div className="p-5 rounded-2xl bg-white border-l-4 border-[#10B981] my-4 border border-slate-200 shadow-xs">
                <p className="text-sm sm:text-base text-[#0B1B3D] font-medium italic">
                  &ldquo;La technologie n&apos;a de valeur que lorsqu&apos;elle répond à un besoin réel, améliore une situation et crée un impact positif.&rdquo;
                </p>
                <span className="block mt-2 text-xs text-[#059669] uppercase tracking-wider font-mono font-bold">
                  — Conviction Fondatrice SDBSNX
                </span>
              </div>

              <p className="text-slate-600 text-sm leading-relaxed">
                Notre mission s&apos;articule autour de la transformation numérique, de la sécurisation des infrastructures critiques et de la création d&apos;outils institutionnels et légaux de premier ordre, particulièrement sur le continent africain.
              </p>

              <div className="pt-2">
                <Link
                  to="/a-propos"
                  className="inline-flex items-center text-sm font-bold text-[#10B981] hover:text-[#059669] group"
                >
                  <span>En savoir plus sur notre histoire et nos engagements</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#10B981] hover:shadow-md transition-all space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-emerald-50 text-[#10B981]">
                    <Scale className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B3D]">Solutions LegalTech</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Plateformes de dématérialisation et gestion documentaire dédiées aux acteurs du droit.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#2563EB] hover:shadow-md transition-all space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-blue-50 text-[#2563EB]">
                    <ShieldCheck className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B3D]">Cybersécurité</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Audits autorisés, cartographie des vulnérabilités et renforcement défensif.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#10B981] hover:shadow-md transition-all space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-emerald-50 text-[#10B981]">
                    <Code className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B3D]">Dév Web & Mobile</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Applications métier, portails SaaS, PWA performantes et résilientes.
                  </p>
                </div>

                <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 hover:border-[#2563EB] hover:shadow-md transition-all space-y-3">
                  <div className="p-2.5 w-fit rounded-xl bg-blue-50 text-[#2563EB]">
                    <Compass className="w-6 h-6" />
                  </div>
                  <h3 className="text-base font-bold text-[#0B1B3D]">Conseil Stratégique</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Accompagnement des dirigeants et architecture des systèmes d&apos;information.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* SERVICES SUMMARY HIGHLIGHT                                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-bold">
              Pôles d&apos;Excellence
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] font-display">
              Des solutions concrètes pour des ambitions élevées.
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Nos pôles spécialisés allient savoir-faire technique, rigueur d&apos;ingénierie et conformité légale.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {SERVICES_DATA.map((srv) => (
              <div
                key={srv.id}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-[#10B981] shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono uppercase tracking-wider text-slate-500 font-semibold">
                      {srv.categoryName}
                    </span>
                    {srv.badge && (
                      <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-emerald-100 text-[#047857] font-bold">
                        {srv.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors mb-1 font-display">
                    {srv.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#059669] mb-4">
                    {srv.tagline}
                  </p>

                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {srv.shortDescription}
                  </p>

                  <ul className="space-y-2.5 mb-6">
                    {srv.features.slice(0, 4).map((f, i) => (
                      <li key={i} className="flex items-center text-xs text-slate-700">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] mr-2.5 flex-shrink-0" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <Link
                    to={`/services/${srv.slug}`}
                    className="inline-flex items-center text-xs font-bold text-[#10B981] hover:text-[#059669] transition-colors"
                  >
                    <span>Explorer ce pôle en détail</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/services"
              className="inline-flex items-center px-7 py-3 rounded-xl text-sm font-bold text-[#0B1B3D] hover:text-[#10B981] bg-slate-50 hover:bg-slate-100 border border-slate-300 shadow-xs transition-colors"
            >
              <span>Découvrir l&apos;ensemble de nos offres de service</span>
              <ArrowRight className="w-4 h-4 ml-2 text-[#10B981]" />
            </Link>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* INTERACTIVE VALUES SECTION                                                */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-bold">
              Socle Éthique
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] font-display">
              THE SDBSNX CORE VALUES
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Nos valeurs ne sont pas des slogans. Elles constituent la boussole incontournable de chacun de nos engagements techniques et humains.
            </p>
          </div>

          <InteractiveValues />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* PHILOSOPHY SECTION (THE STANDARD WE LIVE BY)                              */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#059669] px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-bold">
              Notre Philosophie
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] font-display">
              THE STANDARD WE LIVE BY
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Les principes cardinaux qui forgent la culture de rigueur, de discipline et de loyauté de l&apos;équipe SDBSNX.
            </p>
          </div>

          <PhilosophyQuotes />
        </div>
      </section>

      {/* ========================================================================= */}
      {/* HIGH-CONVERTING FINAL CTA (Deep Navy & Emerald)                           */}
      {/* ========================================================================= */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative bg-gradient-to-b from-white to-slate-100 border-t border-slate-200">
        <div className="max-w-5xl mx-auto">
          <div className="p-8 sm:p-14 rounded-3xl bg-[#0B1B3D] text-white text-center space-y-6 shadow-2xl relative overflow-hidden">
            
            {/* Background decorative glow */}
            <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#10B981]/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-24 -left-24 w-72 h-72 bg-[#2563EB]/20 rounded-full blur-3xl pointer-events-none" />

            <span className="text-xs font-mono uppercase tracking-widest text-white px-3.5 py-1 rounded-full bg-[#10B981] inline-block font-bold">
              Collaboration & Partenariat
            </span>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight font-display">
              Prêt à concrétiser votre vision technologique ?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Discutons de vos besoins de transformation, d&apos;audits de sécurité ou de plateformes LegalTech. Chaque demande est traitée avec le plus haut niveau de réactivité et de confidentialité.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                to="/contact"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-[#10B981] hover:bg-[#059669] transition-all shadow-md flex items-center justify-center space-x-2 text-sm"
              >
                <span>Initier un Projet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              
              <a
                href={getWhatsAppUrl('Bonjour SDBSNX, je souhaite démarrer un projet technologique.')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 shadow-sm transition-all text-sm flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>WhatsApp ({WHATSAPP_CONFIG.displayNumber})</span>
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};
