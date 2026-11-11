export interface ServiceData {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  categoryName: string;
  shortDescription: string;
  fullDescription: string;
  iconName: 'Scale' | 'Shield' | 'Code' | 'Compass';
  features: string[];
  capabilities: { title: string; desc: string }[];
  regulatoryDisclaimer?: string;
  badge?: string;
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: 'legaltech',
    slug: 'legaltech',
    title: 'Solutions LegalTech',
    tagline: 'Bridging Law and Technology.',
    categoryName: 'Pôle Spécialisé',
    badge: 'Pôle Stratégique',
    shortDescription: 'L\'alliance du droit et des technologies numériques pour simplifier, fluidifier et sécuriser la gestion documentaire et les procédures juridico-administratives.',
    fullDescription: 'Notre département LegalTech conçoit des plateformes numériques innovantes dédiées aux cabinets juridiques, directions juridiques d\'entreprises, notaires, administrations et auxiliaires de justice. Nous optimisons le cycle de vie documentaire, automatisons les flux administratifs récurrents et garantissons une traçabilité inviolable.',
    iconName: 'Scale',
    regulatoryDisclaimer: 'Important : SDBSNX est un éditeur et intégrateur de solutions technologiques. Nos outils numériques assistent les professionnels mais ne constituent en aucun cas une prestation de conseil juridique réglementé, ni ne se substituent au ministère d\'avocat ou aux professions juridiques assermentées.',
    features: [
      'Plateformes de gestion électronique de documents (GED)',
      'Dématérialisation et certification des flux documentaires',
      'Gestion et suivi collaboratif des dossiers contentieux et conseils',
      'Automatisation des workflows et circuits de validation',
      'Gestion des demandes, requêtes et prises de rendez-vous',
      'Cycle de vie des contrats (CLM) et alertes d\'échéance',
      'Archivage numérique sécurisé et traçabilité d\'audit',
      'Tableaux de bord analytiques pour structures juridiques',
    ],
    capabilities: [
      {
        title: 'Dématérialisation & GED Juridique',
        desc: 'Centralisez, indexez et sécurisez vos dossiers juridiques avec contrôle strict des accès et journalisation des consultations.',
      },
      {
        title: 'Workflows & Automatisation Administrative',
        desc: 'Éliminez les goulets d\'étranglement opérationnels grâce à des circuits de validation intelligents et des rappels automatiques.',
      },
      {
        title: 'Prise de Rendez-vous & Espace Client',
        desc: 'Offrez à vos justiciables ou partenaires une interface transparente et sécurisée pour soumettre leurs pièces et suivre l\'avancement.',
      },
      {
        title: 'Archivage à Valeur Probante',
        desc: 'Garantissez l\'intégrité des archives numériques conformément aux exigences légales de conservation des documents.',
      },
    ],
  },
  {
    id: 'cybersecurite',
    slug: 'cybersecurite',
    title: 'Cybersécurité & Audits',
    tagline: 'Securing What Matters.',
    categoryName: 'Défense & Résilience',
    shortDescription: 'Audits techniques rigoureux, évaluation des risques et accompagnement pour ériger des défenses numériques imperméables.',
    fullDescription: 'Dans un contexte de menaces cybernétiques croissantes en Afrique et à l\'échelle mondiale, SDBSNX apporte une méthodologie stricte pour évaluer, corriger et fortifier la posture défensive de vos systèmes informatiques.',
    iconName: 'Shield',
    regulatoryDisclaimer: 'Les missions d\'audit, analyses de vulnérabilités et tests techniques menés par SDBSNX sont strictement encadrés par une convention formelle d\'autorisation écrite et un protocole d\'accord préalable. Aucune opération n\'est exécutée sans mandatement légal explicite.',
    features: [
      'Audits de sécurité autorisés et contrôlés',
      'Évaluation exhaustive des risques et de l\'exposition',
      'Analyse et cartographie des vulnérabilités applicatives & réseau',
      'Audit de configuration (serveurs, cloud, bases de données)',
      'Rapports d\'expertise et recommandations prioritaires',
      'Accompagnement méthodologique à la remédiation',
      'Sensibilisation et formation aux bonnes pratiques cyber',
    ],
    capabilities: [
      {
        title: 'Évaluation des Vulnérabilités',
        desc: 'Inspection minutieuse des failles potentielles sur vos applications web, API et infrastructures exposées.',
      },
      {
        title: 'Audits d\'Architecture & Configuration',
        desc: 'Vérification de la conformité de vos environnements aux standards de durcissement (hardening) internationaux.',
      },
      {
        title: 'Plans de Remédiation Actionnables',
        desc: 'Livraison de préconisations techniques claires, hiérarchisées selon la criticité opérationnelle.',
      },
      {
        title: 'Culture & Sensibilisation',
        desc: 'Programmes de montée en compétences de vos équipes contre l\'ingénierie sociale et les vecteurs d\'attaque courants.',
      },
    ],
  },
  {
    id: 'developpement',
    slug: 'developpement',
    title: 'Développement Web & Mobile',
    tagline: 'Crafting Resilient Platforms.',
    categoryName: 'Ingénierie Logicielle',
    shortDescription: 'Conception sur-mesure d\'applications web robustes, d\'applications mobiles performantes et d\'outils SaaS à haute disponibilité.',
    fullDescription: 'Nous transformons les exigences métier les plus exigeantes en solutions logicielles durables. En combinant architectures modernes et principes de sécurité dès la conception (Security by Design), nos plateformes garantissent rapidité et évolutivité.',
    iconName: 'Code',
    features: [
      'Sites institutionnels haut de gamme et portails d\'entreprise',
      'Plateformes web personnalisées et applicatifs métier critiques',
      'Applications SaaS multi-locataires (multi-tenant)',
      'Tableaux de bord analytiques & interfaces administratives',
      'Applications mobiles natives et multiplateformes (iOS & Android)',
      'Progressive Web Apps (PWA) résilientes et hors-ligne',
      'API REST sécurisées et microservices découplés',
    ],
    capabilities: [
      {
        title: 'Architecture Web Sur-Mesure',
        desc: 'Développement d\'écosystèmes applicatifs modulaires construits sur React, TypeScript, Next/Vite et bases de données managées.',
      },
      {
        title: 'Applications Mobiles Professionnelles',
        desc: 'Interfaces mobiles ergonomiques conçues pour répondre aux conditions réelles de connectivité et d\'usage en mobilité.',
      },
      {
        title: 'Tableaux de Bord & Portails Métier',
        desc: 'Consolidation de vos données d\'activité au sein d\'écrans clairs avec gestion granulaire des rôles et autorisations.',
      },
      {
        title: 'Progressive Web Apps (PWA)',
        desc: 'Expérience fluide avec chargement instantané, notifications et prise en charge du mode déconnecté.',
      },
    ],
  },
  {
    id: 'conseil',
    slug: 'conseil',
    title: 'Conseil Technologique',
    tagline: 'Strategic Innovation & Alignment.',
    categoryName: 'Stratégie Numérique',
    shortDescription: 'Accompagnement stratégique, urbanisation des systèmes d\'information et cadrage de projets de transformation digitale durable.',
    fullDescription: 'L\'innovation technologique doit répondre à des objectifs d\'affaires tangibles. SDBSNX conseille les dirigeants et directions informatiques dans la sélection des architectures, la gouvernance de données et la conduite de projets stratégiques.',
    iconName: 'Compass',
    features: [
      'Cadrage stratégique et formalisation des besoins',
      'Audit de l\'existant et urbanisation du système d\'information',
      'Architecture technique des solutions cibles',
      'Feuille de route de transformation numérique',
      'Sélection raisonnée des briques technologiques et cloud',
      'Modernisation et optimisation des processus métier',
      'Accompagnement au déploiement et à l\'appropriation',
    ],
    capabilities: [
      {
        title: 'Étude d\'Opportunité & Cadrage',
        desc: 'Analyse objective de vos besoins opérationnels pour concevoir un cahier des charges technique réaliste et mesurable.',
      },
      {
        title: 'Architecture & Scalabilité',
        desc: 'Dimensionnement d\'infrastructures pérennes évitant l\'enfermement propriétaire et maîtrisant les coûts.',
      },
      {
        title: 'Gouvernance & Stratégie Digitale',
        desc: 'Alignement continu de la trajectoire technologique sur la vision stratégique de votre organisation.',
      },
      {
        title: 'Assistance à Maîtrise d\'Ouvrage (AMOA)',
        desc: 'Garantie de respect de la rigueur méthodologique, de la qualité des livrables et des calendriers convenus.',
      },
    ],
  },
];

