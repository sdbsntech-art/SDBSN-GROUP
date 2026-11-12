# SDBSNX — Official Digital Platform

> **"BUILDING THE FUTURE. SECURING WHAT MATTERS."**  
> *"We build meaningful digital solutions through innovation, integrity and excellence."*  
> **SDBSNX — DIGITAL INNOVATION. SECURITY. EXCELLENCE.**

---

Plateforme numérique institutionnelle haut de gamme de **SDBSNX**, agence de solutions numériques axée sur la transformation digitale, la cybersécurité défensive, les solutions LegalTech et le conseil stratégique en Afrique et à l'international.

---

## 🏛️ Caractéristiques Fondamentales

- **Identité Visuelle & Couleurs Officielles** : Cyber Emerald (`#10B981`), Dark Pine Forest (`#0E1B17`), Surface (`#15271F`), Mint Accent (`#6EE7B7`), Ivory Text (`#F4F1EA`).
- **Stack Moderne & Performante** : React 18, TypeScript strict, Vite, Tailwind CSS, Framer Motion, Web3Forms API.
- **Pôle Stratégique LegalTech** : Présentation complète de la convergence du droit et du numérique (GED, dématérialisation, automatisation, conformité) avec réserve réglementaire claire.
- **Pôle Cybersécurité Défensive** : Audits techniques, cartographie de vulnérabilités et sensibilisation strictement encadrés par des conventions formelles d'autorisation préalable.
- **Socle Éthique & Philosophie** :
  - *THE SDBSNX CORE VALUES* : Composant interactif présentant les 7 valeurs cardinales (Integrity First, Service Before Self, Excellence in All We Do, Discipline & Rigor, Accountability, Innovation with Purpose, Confidentiality & Trust).
  - *THE STANDARD WE LIVE BY* : Les 10 maximes d'action et de gouvernance.
- **Section Contact & Web3Forms** : Formulaire professionnel complet avec protection anti-spam (honeypot), génération d'un numéro officiel `SDB-YYYY-XXXX`, acheminement direct par **Web3Forms API** vers la messagerie officielle.
- **Espace Administrateur Sécurisé (`/admin`)** : Tableau de bord, consultation des demandes, historique local, modification des statuts (*New, In Review, In Progress, Completed, Archived*), recherche multicritères et suppression.
- **Conformité Juridique Sénégalaise** : Mentions légales, Politique de confidentialité conforme à la **Loi n° 2008-12**, Gestionnaire de préférences de cookies et Conditions Générales d'Utilisation.
- **Progressive Web App (PWA)** : Manifest, Service Worker avec mode déconnecté pour les pages publiques.

---

## 📂 Architecture du Projet

```text
sdbsnx group/
├── docs/                          # Guides opérationnels
│   ├── DEPLOYMENT.md              # Déploiement Vercel & Web3Forms
│   ├── PWA.md                     # Architecture et configuration PWA
│   └── WHATSAPP.md                # Guide WhatsApp Business
├── public/
│   ├── icons/                     # Icônes PWA 192x192 et 512x512
│   ├── logo/                      # Logo officiel SDBSNX
│   ├── favicon.png                # Favicon haute résolution
│   ├── manifest.json              # Manifeste PWA officiel
│   ├── robots.txt                 # Directives d'indexation SEO
│   ├── sitemap.xml                # Plan de site XML complet
│   └── sw.js                      # Service Worker sécurisé
├── src/
│   ├── assets/                    # Assets graphiques
│   ├── components/
│   │   ├── admin/                 # Composants protégés console admin
│   │   ├── layout/                # Header, Footer, Layout global
│   │   ├── sections/              # InteractiveValues, PhilosophyQuotes
│   │   └── ui/                    # CookieBanner, BackButton, Cartes
│   ├── data/                      # Données de services (LegalTech, Cyber, etc.)
│   ├── lib/                       # Web3Forms client, utilitaires de référence
│   ├── pages/                     # 17 pages institutionnelles + Admin
│   ├── routes/                    # Router React
│   ├── styles/                    # Variables CSS de la palette et Tailwind
│   ├── types/                     # Typages TypeScript stricts
│   ├── App.tsx                    # Racine applicative
│   └── main.tsx                   # Point d'entrée Vite
├── .env.example                   # Exemple de configuration
├── package.json                   # Dépendances et scripts de build
├── tailwind.config.js             # Configuration de la charte graphique
├── tsconfig.json                  # Configuration TypeScript stricte
├── vercel.json                    # Configuration de routage Vercel
└── vite.config.ts                 # Configuration du bundler Vite
```

---

## 🚀 Démarrage Rapide en Local

### 1. Installation des dépendances
```bash
npm install
```

### 2. Lancement du serveur de développement
```bash
npm run dev
```
La plateforme est accessible immédiatement sur `http://localhost:5173`.

### 3. Compilation de production & Vérification des types
```bash
npm run lint    # Exécute tsc --noEmit
npm run build   # Génère le bundle de production optimisé dans /dist
```

---

## 🔐 Identifiants et Accès Administrateur

- **Portail d'Administration** : `/admin/login`
- **Connexion** : `admin@sdbsnx.com` avec un mot de passe d'au moins 8 caractères.

---

## 📜 Conformité et Propriété Intellectuelle

© 2026 SDBSNX. Tous droits réservés.  
*SDBSNX — Digital Innovation, Cybersecurity & LegalTech Solutions.*
