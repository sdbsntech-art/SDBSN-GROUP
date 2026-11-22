import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowRight, 
  ShieldCheck, 
  CheckCircle2, 
  MessageCircle, 
  Maximize2, 
  X, 
  Sparkles,
  Terminal,
  FileCheck2,
  Building
} from 'lucide-react';
import { getWhatsAppUrl } from '../../lib/whatsapp';

export interface TechSolutionItem {
  id: string;
  reference: string;
  title: string;
  department: string;
  targetAudience: string;
  category: string;
  categoryIcon: React.ReactNode;
  thumbnail: string;
  fullImage: string;
  techTags: string[];
  challenge: string;
  architectureSolution: string;
  keyFeatures: string[];
  measurableMetric: string;
  compliancePillar: string;
}

const TECH_SOLUTIONS: TechSolutionItem[] = [
  {
    id: 'solution-legaltech',
    reference: 'SOL-01',
    title: 'Plateforme LegalTech, Parapheur & Signature Électronique Certifiée',
    department: 'Pôle Ingénierie LegalTech Alkeb.lab',
    targetAudience: 'Cabinets d\'Avocats, Notaires, Banques & Directions Juridiques',
    category: 'LegalTech & Dématérialisation',
    categoryIcon: <FileCheck2 className="w-4 h-4 text-[#10B981]" />,
    thumbnail: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=900&q=80',
    fullImage: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?auto=format&fit=crop&w=1600&q=85',
    techTags: ['Loi 2008-08 Sénégal', 'Signature SHA-256', 'GED Chiffrée', 'Coffre-fort AES-256', 'Horodatage'],
    challenge: 'Lenteur des circuits de signature physique, risques d\'altération des actes juridiques et dispersion des contrats non sécurisés.',
    architectureSolution: 'Conception d\'un parapheur électronique souverain avec authentification forte multi-facteurs, calcul d\'empreinte cryptographique SHA-256 scellée et coffre-fort numérique à valeur probante conforme au droit sénégalais et OHADA.',
    keyFeatures: [
      'Génération et validation de signatures électroniques certifiées',
      'Circuits de paraphe séquentiels ou parallèles automatisés',
      'Archivage sécurisé infalsifiable avec piste d\'audit probatoire',
      'Gestion électronique des actes et pièces contractuelles confidentielles'
    ],
    measurableMetric: 'Réduction de 85% des délais de signature & traçabilité juridique 100% opposable',
    compliancePillar: 'Conformité stricte à la Loi n° 2008-08 sur les transactions électroniques et aux exigences déontologiques du barreau et du notariat.'
  },
  {
    id: 'solution-cybersecurity',
    reference: 'SOL-02',
    title: 'Suite Cybersécurité Offensive, Audit de Code & Résilience des SI',
    department: 'Laboratoire Cybersécurité Alkeb.lab',
    targetAudience: 'Fintechs, Établissements Bancaires, Opérateurs Télécoms & SI Critiques',
    category: 'Cybersécurité & Défense',
    categoryIcon: <ShieldCheck className="w-4 h-4 text-[#10B981]" />,
    thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=900&q=80',
    fullImage: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1600&q=85',
    techTags: ['Pentesting OWASP', 'Audit Code Stat/Dyn', 'Durcissement Cloud', 'Chiffrement TLS 1.3', 'SOC Défensif'],
    challenge: 'Exposition accrue aux cyberattaques, vulnérabilités applicatives non détectées et impératifs de conformité réglementaire bancaire (BCEAO, CDP).',
    architectureSolution: 'Mise en œuvre d\'audits d\'intrusion exhaustifs en boîte noire et boîte grise, tests de résistance des API financières, analyses de code statique/dynamique et accompagnement au durcissement des infrastructures cloud.',
    keyFeatures: [
      'Tests d\'intrusion des réseaux, serveurs et endpoints critiques',
      'Audit approfondi du code source pour éliminer les failles OWASP Top 10',
      'Revue de configuration des bases de données et services cloud',
      'Rapport d\'expertise avec plan d\'action de remédiation priorisé'
    ],
    measurableMetric: 'Élimination préventive de 100% des vulnérabilités critiques identifiées',
    compliancePillar: 'Toutes les missions sont réalisées sous mandat contractuel formel et protocole d\'accord préalable d\'autorisation écrite.'
  },
  {
    id: 'solution-software-saas',
    reference: 'SOL-03',
    title: 'Applications Web Métiers, Mobiles PWA & Plateformes SaaS',
    department: 'Pôle Développement Applicatif Alkeb.lab',
    targetAudience: 'Grandes Entreprises, Startups à fort trafic, PME & Acteurs Logistiques',
    category: 'Ingénierie Logicielle',
    categoryIcon: <Terminal className="w-4 h-4 text-[#10B981]" />,
    thumbnail: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=900&q=80',
    fullImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=85',
    techTags: ['React / TypeScript', 'Microservices Node.js', 'PWA Offline-First', 'PostgreSQL / Supabase', 'Docker / CI-CD'],
    challenge: 'Inadéquation des logiciels génériques avec les contraintes opérationnelles de terrain et instabilité de la connectivité mobile.',
    architectureSolution: 'Développement d\'architectures modernes découplées avec mise en cache locale intelligente (Offline-First via Service Workers), garantissant une accessibilité continue même hors ligne avec synchronisation automatique lors du retour réseau.',
    keyFeatures: [
      'Interfaces réactives ultra-rapides optimisées pour mobile et desktop',
      'Mode hors-ligne résilient avec persistance sécurisée en base locale',
      'APIs REST et GraphQL documentées et protégées par tokens chiffrés',
      'Déploiement continu automatisé et observabilité en temps réel'
    ],
    measurableMetric: 'Temps de réponse inférieur à 200ms sur réseaux mobiles 3G/4G',
    compliancePillar: 'Code source proprietary audité, zéro boîte noire, propriété intellectuelle intégrale transférée au client.'
  },
  {
    id: 'solution-consulting-govtech',
    reference: 'SOL-04',
    title: 'Schéma Directeur SI, Modernisation Institutionnelle & Urbanisation',
    department: 'Pôle Conseil & Architecture SI Alkeb.lab',
    targetAudience: 'Institutions Publiques, Agences Nationales & Directions Générales',
    category: 'Conseil & Urbanisation SI',
    categoryIcon: <Building className="w-4 h-4 text-[#10B981]" />,
    thumbnail: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=900&q=80',
    fullImage: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=1600&q=85',
    techTags: ['Schéma Directeur', 'Interopérabilité SI', 'Gouvernance Données', 'Portail Démarches', 'Sécurité Souveraine'],
    challenge: 'Systèmes d\'information fragmentés, doublons administratifs et manque de visibilité stratégique sur l\'évolution technologique.',
    architectureSolution: 'Cartographie globale des processus métiers et des flux de données existants, élaboration du schéma directeur informatique pluriannuel et accompagnement méthodologique à la transformation numérique souveraine.',
    keyFeatures: [
      'Audit de maturité numérique et urbanisation des systèmes hérités (legacy)',
      'Conception de portails de télé-services unifiés pour usagers et agents',
      'Cadre d\'interopérabilité sécurisé entre applications et bases institutionnelles',
      'Feuille de route stratégique budgétée et gouvernance de la donnée'
    ],
    measurableMetric: 'Dématérialisation fluide des démarches et maîtrise complète des coûts IT',
    compliancePillar: 'Gouvernance alignée sur les orientations nationales de souveraineté numérique et le strict respect des lois de protection des données.'
  }
];

export const TechDemosSection: React.FC = () => {
  const [selectedSolution, setSelectedSolution] = useState<TechSolutionItem | null>(null);

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white text-[#0B1B3D] relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        {/* En-tête de section */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="inline-flex items-center space-x-2 text-xs font-mono uppercase tracking-widest text-[#059669] px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 font-bold">
            <Sparkles className="w-3.5 h-3.5 text-[#10B981]" />
            <span>Architecture &amp; Solutions en Pratique</span>
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
            Aperçu Concret de nos Solutions Logicielles
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Découvrez nos réalisations, architectures de pointe et cas d&apos;usage développés par Alkeb.lab pour accompagner les acteurs institutionnels et privés.
          </p>
        </div>

        {/* Grille des solutions avec photos claires */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TECH_SOLUTIONS.map((sol) => (
            <div
              key={sol.id}
              className="bg-white rounded-2xl border border-slate-200 shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group cursor-pointer"
              onClick={() => setSelectedSolution(sol)}
            >
              {/* Photo du cas d'usage */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                <img
                  src={sol.thumbnail}
                  alt={sol.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-95"
                  width="900"
                  height="560"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent" />
                
                {/* Référence */}
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded-md bg-[#0B1B3D]/90 text-white text-[10px] font-mono font-bold flex items-center gap-1.5 shadow-xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                  {sol.reference}
                </span>

                {/* Badge Fiche Photo */}
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded-md bg-white/90 text-[#0B1B3D] text-[10px] font-bold tracking-wider uppercase shadow-xs flex items-center gap-1">
                  <Maximize2 className="w-3 h-3 text-[#10B981]" />
                  <span>Détails &amp; Image</span>
                </span>
              </div>

              {/* Contenu textuel */}
              <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
                <div>
                  <div className="flex items-center space-x-1.5 text-xs mb-2 text-[#059669] font-bold">
                    {sol.categoryIcon}
                    <span className="font-mono text-[11px] uppercase truncate">
                      {sol.category}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-[#0B1B3D] group-hover:text-[#10B981] transition-colors line-clamp-2 leading-snug font-display">
                    {sol.title}
                  </h3>

                  <p className="text-[11px] text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    <strong>Cible :</strong> {sol.targetAudience}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex flex-wrap gap-1">
                  {sol.techTags.slice(0, 2).map((tag, idx) => (
                    <span key={idx} className="px-2 py-0.5 rounded bg-slate-50 border border-slate-200 text-[10px] font-mono text-slate-700 font-medium">
                      {tag}
                    </span>
                  ))}
                  <span className="px-2 py-0.5 rounded bg-emerald-50 text-[10px] font-mono text-[#059669] font-bold">
                    +{sol.techTags.length - 2}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#10B981] group-hover:text-[#059669]">
                  <span className="text-[11px] text-slate-700 font-semibold truncate max-w-[170px]">
                    {sol.department}
                  </span>
                  <span className="flex items-center gap-1 text-xs">
                    <span>Explorer</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Notice déontologique */}
        <div className="mt-8 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 leading-relaxed text-center sm:text-left flex items-start gap-3">
          <ShieldCheck className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
          <p>
            <strong>Transparence &amp; Rigueur :</strong> Les solutions et réalisations ci-dessus illustrent les méthodologies logicielles et normes de sécurité appliquées par Alkeb.lab. Toutes nos plateformes sont personnalisées et développées dans nos laboratoires à Dakar selon le cahier des charges de chaque client.
          </p>
        </div>

        {/* Bannière d'appel à l'action */}
        <div className="mt-8 p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-5">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-base sm:text-lg font-bold text-[#0B1B3D] font-display">
              Vous avez un projet similaire ou souhaitez une démonstration personnalisée ?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Nos ingénieurs et architectes étudient vos besoins et vous présentent une architecture adaptée.
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
              href={getWhatsAppUrl('Bonjour Alkeb.lab, je souhaite échanger sur vos réalisations et solutions pour mon projet.')}
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

      {/* MODAL AVEC PHOTO EN GRAND & EXPLICATIONS DÉTAILLÉES */}
      <AnimatePresence>
        {selectedSolution && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-900/80 backdrop-blur-sm animate-in fade-in duration-200"
            onClick={() => setSelectedSolution(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-3xl max-w-4xl w-full border border-slate-200 shadow-2xl overflow-hidden relative max-h-[92vh] flex flex-col text-[#0B1B3D]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="px-5 py-4 bg-[#0B1B3D] text-white flex items-center justify-between gap-3 border-b border-slate-800 flex-shrink-0">
                <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                  <span className="px-2.5 py-1 rounded-md bg-[#10B981] text-[#0B1B3D] text-[11px] font-mono font-bold uppercase shadow-xs">
                    {selectedSolution.reference}
                  </span>
                  <span className="text-xs text-slate-300 font-medium">
                    {selectedSolution.category}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedSolution(null)}
                  className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
                  aria-label="Fermer la fenêtre"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Photo du cas d'usage en haute définition */}
              <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full bg-slate-900 overflow-hidden flex-shrink-0">
                <img
                  src={selectedSolution.fullImage}
                  alt={selectedSolution.title}
                  className="w-full h-full object-cover"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1B3D]/80 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-4 right-4 text-white">
                  <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider block font-bold">
                    {selectedSolution.department}
                  </span>
                  <h3 className="text-base sm:text-xl font-bold font-display">
                    {selectedSolution.title}
                  </h3>
                </div>
              </div>

              {/* Corps explicatif complet */}
              <div className="p-5 sm:p-7 space-y-5 text-xs sm:text-sm text-slate-600 overflow-y-auto">
                
                {/* 1. Défi Métier */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono uppercase font-bold text-[#0B1B3D] tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span>Le Défi Opérationnel Résolu :</span>
                  </h4>
                  <p className="text-slate-700 leading-relaxed bg-amber-50/60 p-3.5 rounded-xl border border-amber-200/60">
                    {selectedSolution.challenge}
                  </p>
                </div>

                {/* 2. Architecture & Solution Alkeb.lab */}
                <div className="space-y-1.5">
                  <h4 className="text-xs font-mono uppercase font-bold text-[#0B1B3D] tracking-wider flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                    <span>L&apos;Architecture Technique &amp; Méthodologie :</span>
                  </h4>
                  <p className="text-slate-700 leading-relaxed bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                    {selectedSolution.architectureSolution}
                  </p>
                </div>

                {/* 3. Fonctionnalités Clés */}
                <div className="space-y-2">
                  <h4 className="text-xs font-mono uppercase font-bold text-[#0B1B3D] tracking-wider">
                    Fonctionnalités Principales :
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedSolution.keyFeatures.map((feat, idx) => (
                      <div key={idx} className="flex items-start space-x-2 p-2.5 rounded-lg bg-emerald-50/40 border border-emerald-100 text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-xs">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4. Métrique d'impact */}
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center space-x-3 text-[#064E3B]">
                  <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0" />
                  <span className="font-bold text-xs sm:text-sm">{selectedSolution.measurableMetric}</span>
                </div>

                {/* 5. Cadre de conformité */}
                <div className="p-3 rounded-xl bg-slate-100 border border-slate-200 text-[11px] text-slate-700 leading-relaxed">
                  <strong>Cadre institutionnel :</strong> {selectedSolution.compliancePillar}
                </div>

                {/* Actions */}
                <div className="pt-3 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <a
                    href={getWhatsAppUrl(`Bonjour Alkeb.lab, je souhaite des informations détaillées sur votre solution : ${selectedSolution.title}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs bg-[#10B981] hover:bg-[#059669] text-white flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Demander une Présentation sur WhatsApp</span>
                  </a>

                  <Link
                    to="/contact"
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-[#0B1B3D] hover:text-[#059669] bg-white hover:bg-slate-50 flex items-center justify-center gap-1.5 transition-colors border border-slate-300"
                    onClick={() => setSelectedSolution(null)}
                  >
                    <span>Contacter un Consultant</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>

              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
};
