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
  Eye,
  Clock,
  MessageCircle,
  X,
  Award,
  Zap
} from 'lucide-react';
import { InteractiveValues } from '../components/sections/InteractiveValues';
import { PhilosophyQuotes } from '../components/sections/PhilosophyQuotes';
import { SERVICES_DATA } from '../data/services';
import { getWhatsAppUrl, WHATSAPP_CONFIG } from '../lib/whatsapp';

interface VlogStory {
  id: string;
  episode: string;
  title: string;
  speaker: string;
  role: string;
  category: string;
  categoryColor: 'emerald' | 'blue';
  duration: string;
  views: string;
  thumbnail: string;
  summary: string;
  metric: string;
  quote: string;
}

const VLOG_STORIES: VlogStory[] = [
  {
    id: 'vlog-legaltech',
    episode: 'VLOG #01',
    title: 'Comment un cabinet d\'avocats à Dakar a dématérialisé 5 000 dossiers',
    speaker: 'Me Aïssatou Diop',
    role: 'Avocate Associée • Cabinet Diop & Partenaires (Dakar)',
    category: 'LegalTech & Automatisation',
    categoryColor: 'emerald',
    duration: '04:15 min',
    views: '2.8k vues',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80',
    summary: 'Conception d\'un portail LegalTech souverain sur-mesure pour la gestion électronique, l\'archivage chiffré et la signature certifiée d\'actes juridiques en conformité avec la loi n° 2008-08.',
    metric: 'Temps de traitement contractuel divisé par 4',
    quote: '« SDBSNX ne s\'est pas contenté de coder : ils ont compris notre déontologie juridique et ont livré une plateforme intuitive et imprenable. »'
  },
  {
    id: 'vlog-cybersecurity',
    episode: 'VLOG #02',
    title: 'Audit d\'infrastructure et résilience d\'une Fintech ouest-africaine',
    speaker: 'Amadou Diallo',
    role: 'Directeur Technique • PayAfrique Solution',
    category: 'Cybersécurité & Défense',
    categoryColor: 'blue',
    duration: '05:30 min',
    views: '3.4k vues',
    thumbnail: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    summary: 'Mission d\'évaluation technique autorisée, tests d\'intrusion rigoureux et durcissement des API bancaires traitant plusieurs millions de FCFA de flux transactionnels quotidiens.',
    metric: '100% des vulnérabilités critiques colmatées',
    quote: '« Grâce à l\'audit approfondi de SDBSNX, notre plateforme a obtenu sa certification de conformité en toute sérénité. »'
  },
  {
    id: 'vlog-logistics',
    episode: 'VLOG #03',
    title: 'Déploiement d\'une plateforme SaaS Supply Chain en 45 jours',
    speaker: 'Fatou Binetou Ndiaye',
    role: 'Fondatrice & Directrice Générale • Sahel Logix',
    category: 'Développement Web & Mobile',
    categoryColor: 'emerald',
    duration: '03:50 min',
    views: '2.1k vues',
    thumbnail: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
    summary: 'Création d\'une application web progressive (PWA) synchronisée en temps réel pour le suivi logistique de flottes de transport de marchandises à travers le Sénégal et la sous-région.',
    metric: 'Livraison en 6 semaines chrono',
    quote: '« L\'approche agile de SDBSNX a permis de lancer notre solution sans retard budgétaire, avec une interface moderne appréciée de nos équipes. »'
  },
  {
    id: 'vlog-institutional',
    episode: 'VLOG #04',
    title: 'Modernisation numérique et portail de services aux usagers',
    speaker: 'Moussa Ba',
    role: 'Responsable SI • Organisation Internationale',
    category: 'Conseil & Architecture SI',
    categoryColor: 'blue',
    duration: '04:40 min',
    views: '1.9k vues',
    thumbnail: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?auto=format&fit=crop&w=800&q=80',
    summary: 'Accompagnement stratégique et refonte d\'architectures logicielles pour dématérialiser les demandes citoyennes et interconnecter des bases de données hétérogènes.',
    metric: '98% de satisfaction usagers dès le 1er trimestre',
    quote: '« Une rigueur méthodologique rare, une écoute exemplaire et un accompagnement humain à chaque étape du déploiement. »'
  }
];

export const HomePage: React.FC = () => {
  const [activeVlog, setActiveVlog] = useState<VlogStory | null>(null);

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
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
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
      {/* NEW: VLOG & VIDEO SUCCESS STORIES SECTION (Requested by User)             */}
      {/* ========================================================================= */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white relative">
        <div className="max-w-7xl mx-auto">
          
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <span className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#059669] px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-bold">
              <Play className="w-3 h-3 fill-current" />
              <span>Récits de Succès & Témoignages</span>
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
              Découvrez en vidéo l&apos;impact concret de SDBSNX
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Des dirigeants, avocats et directeurs techniques africains partagent comment nos solutions ont transformé, accéléré et sécurisé leurs activités.
            </p>
          </div>

          {/* VLOG Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {VLOG_STORIES.map((vlog) => (
              <div
                key={vlog.id}
                className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
                onClick={() => setActiveVlog(vlog)}
              >
                {/* Thumbnail with Play Overlay */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                  <img
                    src={vlog.thumbnail}
                    alt={vlog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent" />
                  
                  {/* Episode Badge */}
                  <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#0B1B3D]/90 backdrop-blur-xs text-white text-[10px] font-mono font-bold">
                    {vlog.episode}
                  </span>

                  {/* Duration Pill */}
                  <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-white text-[10px] font-mono flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#10B981]" />
                    {vlog.duration}
                  </span>

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-[#10B981] group-hover:bg-[#059669] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-200 pl-0.5">
                      <Play className="w-5 h-5 fill-current" />
                    </div>
                  </div>
                </div>

                {/* Content Details */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-xs mb-2">
                      <span className={`font-mono text-[11px] font-bold uppercase ${
                        vlog.categoryColor === 'emerald' ? 'text-[#059669]' : 'text-[#2563EB]'
                      }`}>
                        {vlog.category}
                      </span>
                      <span className="text-slate-400 flex items-center gap-1 text-[11px]">
                        <Eye className="w-3 h-3" />
                        {vlog.views}
                      </span>
                    </div>

                    <h3 className="text-sm font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors line-clamp-2 leading-snug">
                      {vlog.title}
                    </h3>
                  </div>

                  <div className="pt-2 border-t border-slate-100">
                    <p className="text-xs font-semibold text-slate-800">{vlog.speaker}</p>
                    <p className="text-[11px] text-slate-500 truncate">{vlog.role}</p>

                    <div className="mt-3 flex items-center justify-between text-xs font-bold text-[#10B981] group-hover:text-[#059669]">
                      <span>Voir le cas client</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

          {/* Banner under VLOGs */}
          <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-blue-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="space-y-1 text-center sm:text-left">
              <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D]">
                Vous avez un défi similaire à relever ?
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Discutez dès aujourd&apos;hui avec nos ingénieurs pour obtenir une étude de faisabilité et un devis clair.
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
                href={getWhatsAppUrl('Bonjour, j\'ai vu vos réalisations en vidéo et je souhaite en savoir plus pour mon projet.')}
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
      {/* VLOG INTERACTIVE DETAIL MODAL                                             */}
      {/* ========================================================================= */}
      <AnimatePresence>
        {activeVlog && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-900/80 backdrop-blur-xs">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-white rounded-3xl max-w-2xl w-full border border-slate-200 shadow-2xl overflow-hidden relative"
            >
              {/* Modal Top Header with Video Thumbnail */}
              <div className="relative aspect-video w-full bg-slate-900">
                <img
                  src={activeVlog.thumbnail}
                  alt={activeVlog.title}
                  className="w-full h-full object-cover opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D] via-[#0B1B3D]/30 to-transparent" />
                
                {/* Close Button */}
                <button
                  onClick={() => setActiveVlog(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/60 text-white hover:bg-black/90 transition-colors"
                  aria-label="Fermer la modal"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="absolute bottom-4 left-5 right-5 text-white">
                  <span className="px-2.5 py-0.5 rounded-md bg-[#10B981] text-white text-[11px] font-mono font-bold uppercase inline-block mb-1">
                    {activeVlog.episode} • {activeVlog.category}
                  </span>
                  <h3 className="text-lg sm:text-xl font-extrabold leading-tight">
                    {activeVlog.title}
                  </h3>
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-5 text-sm text-slate-600">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200">
                  <p className="text-xs font-mono uppercase text-[#059669] font-bold">Intervenant</p>
                  <p className="text-sm font-bold text-[#0B1B3D] mt-0.5">{activeVlog.speaker}</p>
                  <p className="text-xs text-slate-500">{activeVlog.role}</p>
                </div>

                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 font-mono">
                    Contexte & Déploiement
                  </h4>
                  <p className="text-slate-700 leading-relaxed text-sm">
                    {activeVlog.summary}
                  </p>
                </div>

                {/* Key Metric Highlight */}
                <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center space-x-3 text-[#064E3B]">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  <span className="font-bold text-sm">{activeVlog.metric}</span>
                </div>

                {/* Quote */}
                <blockquote className="italic text-slate-700 border-l-4 border-[#10B981] pl-4 text-xs sm:text-sm">
                  {activeVlog.quote}
                </blockquote>

                {/* Modal Footer CTAs */}
                <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={getWhatsAppUrl(`Bonjour, je souhaite un projet similaire au ${activeVlog.episode} (${activeVlog.title})`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Lancer un projet similaire sur WhatsApp</span>
                  </a>

                  <button
                    onClick={() => setActiveVlog(null)}
                    className="w-full sm:w-auto px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-600 hover:text-slate-900 bg-slate-100 transition-colors"
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
