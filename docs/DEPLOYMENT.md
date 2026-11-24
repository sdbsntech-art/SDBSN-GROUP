# Guide de Déploiement — Alkeb.dev Digital Platform

Ce guide détaille la mise en production de la plateforme Alkeb.dev sur **Vercel** avec acheminement direct par **Web3Forms**, sans serveur VPS et avec une haute sécurité.

---

## 1. Prérequis

- Un compte [GitHub](https://github.com) avec le dépôt `SDBSN-GROUP`.
- Un compte [Vercel](https://vercel.com).
- La clé Web3Forms associée à votre adresse professionnelle, configurée uniquement dans les variables d’environnement Vercel.
- Le logo officiel Alkeb.dev (déjà intégré dans `public/logo/` et `public/icons/`).

---

## 2. Déploiement sur Vercel

1. Connectez-vous à Vercel et cliquez sur **Add New... > Project**.
2. Importez votre dépôt `https://github.com/sdbsntech-art/SDBSN-GROUP.git`.
3. Vercel détecte automatiquement le framework **Vite** :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
4. Configurez les **Environment Variables** (variables d'environnement) :
   - `VITE_WEB3FORMS_ACCESS_KEY` : valeur privée de votre compte Web3Forms
   - `VITE_SUPABASE_URL` : URL HTTPS de votre projet Supabase
   - `VITE_SUPABASE_ANON_KEY` : clé publique anonyme Supabase
   - `VITE_ADMIN_EMAIL` : adresse autorisée à administrer la console
5. Cliquez sur **Deploy**.

---

## 3. Nom de Domaine Personnalisé

Dans **Settings > Domains** sur Vercel :
1. Ajoutez `alkeb.dev` et `www.alkeb.dev`.
2. Configurez les enregistrements DNS chez votre registrar :
   - A Record : `76.76.21.21`
   - CNAME `www` : `cname.vercel-dns.com`
3. Le certificat SSL/TLS est généré automatiquement par Vercel.

---

## 4. Console d'Administration

- URL : `/admin/login`
- Accès avec l’adresse définie par `VITE_ADMIN_EMAIL` (mot de passe fort d'au moins 16 caractères).
