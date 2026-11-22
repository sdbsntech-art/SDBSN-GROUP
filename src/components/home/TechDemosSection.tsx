import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Clock, ArrowRight, ShieldAlert, CheckCircle2, MessageCircle, ExternalLink, X } from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export interface TechDemoSolution {
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
    department: 'Pôle Ingénierie LegalTech Alkeb.dev',
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
    summary: 'Présentation des principes d\'architecture logicielle développés en interne chez Alkeb.dev : gestion électronique de documents (GED) juridique, archivage à valeur probante conforme à la loi sénégalaise n° 2008-08, et signature électronique sécurisée par empreinte cryptographique SHA-256.',
    metric: 'Traçabilité probatoire 100% infalsifiable & réduction drastique des délais administratifs',
    inHousePillar: 'Conception logicielle souveraine conforme aux règles déontologiques et réglementations OHADA & Sénégal.'
  },
  {
    id: 'solution-cybersecurity',
    episode: 'DÉMO #02',
    title: 'Suite Cybersécurité Offensive, Audit de Code & Résilience des SI',
    department: 'Laboratoire Cybersécurité Alkeb.dev',
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
    summary: 'Méthodologie d\'audit et d\'évaluation technique appliquée par Alkeb.dev : détection des vecteurs d\'intrusion selon les standards OWASP, tests de pénétration des endpoints, sécurisation des API transactionnelles et surveillance continue de la conformité.',
    metric: 'Neutralisation préventive de 100% des vulnérabilités critiques identifiées',
    inHousePillar: 'Missions d\'audit exécutées sous convention formelle d\'autorisation écrite avec protocole d\'accord préalable.'
  },
  {
    id: 'solution-software-saas',
    episode: 'DÉMO #03',
    title: 'Développement d\'Applications Web, Mobiles PWA & Plateformes SaaS',
    department: 'Pôle Développement Applicatif Alkeb.dev',
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
    summary: 'Démonstration des modèles d\'ingénierie logicielle conçus chez Alkeb.dev : découplage micro-services, applications progressives (PWA) synchronisées hors-ligne, persistance des états en temps réel et performances optimisées pour les environnements réseau africains.',
    metric: 'Temps de réponse inférieur à 200ms sur réseaux mobiles & évolutivité prouvée',
    inHousePillar: 'Code source proprietary ou open-source audité, zéro dépendance opaque, tests automatisés continus.'
  },
  {
    id: 'solution-consulting-govtech',
    episode: 'DÉMO #04',
    title: 'Schéma Directeur SI, Modernisation Institutionnelle & Urbanisation',
    department: 'Pôle Conseil & Architecture SI Alkeb.dev',
    targetAudience: 'Institutions Publiques, Agences d\'État & Organisations Régionales',
    category: 'Conseil & Urbanisation SI',
    categoryColor: 'blue',
    duration: '04:40 min',
    views: 'Modernisation & GovTech',
    thumbnail: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
    techTags: ['Schéma Directeur', 'Interopérabilité SI', 'Gouvernance Données', 'Portail Usagers'],
    youtubeId: 'f-ugxtNzbCY',
    youtubeUrl: 'https://www.youtube.com/watch?f-ugxtNzbCY',
    videoSourceAuthor: 'techUK Digital Insights (Licence libre de diffusion API)',
    videoTopic: 'Impact et méthodologies de transformation numérique des organisations et services publics',
    summary: 'Approche stratégique éprouvée de Alkeb.dev pour moderniser les processus administratifs : cartographie des systèmes hérités (legacy), dématérialisation des démarches citoyennes, gouvernance sécurisée des données et conduite du changement.',
    metric: 'Dématérialisation complète des flux documentaires et satisfaction usagers certifiée',
    inHousePillar: 'Gouvernance alignée sur la souveraineté numérique et le strict respect des lois de protection des données.'
  }
];

export const TechDemosSection: React.FC = () => {
  const [activeSolution, setActiveSolution] = useState<TechDemoSolution | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white text-[#0B1B3D] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#059669] px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-bold">
            <Play className="w-3 h-3 fill-current" />
            <span>Démonstrations Techniques &amp; Savoir-Faire</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
            Nos Solutions &amp; Démonstrations en Vidéo
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Explorez les architectures logicielles, standards de sécurité et méthodologies appliqués par Alkeb.dev dans la conception de ses plateformes métiers.
          </p>
        </div>

        {/* Grille des solutions avec animation au survol */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_DEMO_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => setActiveSolution(sol)}
            >
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={sol.thumbnail}
                  alt={sol.title}
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500 opacity-95"
                  width="800"
                  height="500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/85 via-[#0B1B3D]/25 to-transparent" />
                
                {/* Badge Épisode */}
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#0B1B3D]/90 text-white text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  {sol.episode}
                </span>

                {/* Badge HD */}
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-red-600/90 text-white text-[10px] font-bold tracking-wider uppercase shadow-xs">
                  Vidéo Démo HD
                </span>

                {/* Durée */}
                <span className="absolute bottom-3 right-3 px-2 py-0.5 rounded-md bg-black/80 text-white text-[10px] font-mono flex items-center gap-1">
                  <Clock className="w-3 h-3 text-[#10B981]" />
                  {sol.duration}
                </span>

                {/* Bouton Play */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-[#10B981] group-hover:bg-[#059669] text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition-all duration-200 pl-0.5 border-2 border-white/40">
                    <Play className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>

              {/* Contenu */}
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

                  <h3 className="text-sm font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors line-clamp-2 leading-snug font-display">
                    {sol.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-1">
                    Cible : {sol.targetAudience}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                  {sol.techTags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-700 font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

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

        {/* Notice déontologique */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-500 leading-relaxed text-center sm:text-left flex items-start gap-3">
          <ShieldAlert className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p>
            <strong>Transparence &amp; Déontologie :</strong> Les capsules vidéo ci-dessus sont des démonstrations présentées à titre pédagogique pour illustrer les principes d&apos;ingénierie que Alkeb.dev applique. L&apos;ensemble de nos solutions, progiciels et plateformes sont conçus, développés et sécurisés sur-mesure dans nos laboratoires à Dakar pour chaque client et partenaire.
          </p>
        </div>

        {/* Bannière d'appel à l'action */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 via-white to-blue-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] font-display">
              Vous souhaitez déployer l&apos;une de ces solutions pour votre structure ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Nos ingénieurs et consultants vous accompagnent du cadrage fonctionnel jusqu&apos;à la mise en production sécurisée.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              to="/contact"
              className="px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#10B981] hover:bg-[#059669] transition-all shadow-sm flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#10B981]"
            >
              <span>Demander une Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={getWhatsAppUrl('Bonjour, j\'ai vu vos solutions techniques et je souhaite une étude pour mon projet.')}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 rounded-xl font-bold text-xs text-[#0B1B3D] bg-white hover:bg-slate-50 border border-slate-300 transition-all shadow-xs flex items-center gap-1.5 focus-visible:ring-2 focus-visible:ring-[#10B981]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#10B981]" />
              <span>WhatsApp Direct</span>
            </a>
          </div>
        </div>

      </div>

      {/* MODAL YOUTUBE PLEIN ÉCRAN */}
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
              className="bg-white rounded-3xl max-w-3xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col text-[#0B1B3D]"
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
                </div>

                <button
                  type="button"
                  onClick={() => setActiveSolution(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Fermer la modal"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* YouTube Player */}
              <div className="relative aspect-video w-full bg-black flex-shrink-0">
                <iframe
                  src={`https://www.youtube-nocookie.com/embed/${activeSolution.youtubeId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                  title={activeSolution.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-7 space-y-4 text-xs sm:text-sm text-slate-600 overflow-y-auto">
                <div>
                  <span className="text-xs font-mono font-bold uppercase text-[#059669] tracking-wider block mb-1">
                    {activeSolution.department}
                  </span>
                  <h3 className="text-lg sm:text-2xl font-extrabold text-[#0B1B3D] leading-snug font-display">
                    {activeSolution.title}
                  </h3>
                </div>

                <p className="text-slate-700 leading-relaxed">
                  {activeSolution.summary}
                </p>

                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200/80 flex items-center space-x-3 text-[#064E3B]">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  <span className="font-bold text-xs sm:text-sm">{activeSolution.metric}</span>
                </div>

                <div className="p-3 rounded-xl bg-amber-50/70 border border-amber-200/80 text-[11px] text-amber-800 leading-relaxed">
                  <strong>Notice de diffusion :</strong> {activeSolution.videoSourceAuthor} — {activeSolution.videoTopic}.
                </div>

                <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={getWhatsAppUrl(`Bonjour Alkeb.dev, je souhaite une démonstration personnalisée : ${activeSolution.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center gap-2 transition-all shadow-sm"
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
                    <span>Voir sur YouTube</span>
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
