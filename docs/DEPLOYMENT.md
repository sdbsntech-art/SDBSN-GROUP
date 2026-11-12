# Guide de Déploiement — SDBSNX Official Digital Platform

Ce guide détaille la mise en production de la plateforme SDBSNX sur **Vercel** avec acheminement direct par **Web3Forms**, sans serveur VPS, sans base de données tierce et avec une haute sécurité.

---

## 1. Prérequis

- Un compte [GitHub](https://github.com) avec le dépôt `SDBSN-GROUP`.
- Un compte [Vercel](https://vercel.com).
- La clé Web3Forms : `709797ef-bfab-4ff0-afae-bcfed2d54a57` (active pour `contact@sdbsnx.com`).
- Le logo officiel SDBSNX (déjà intégré dans `public/logo/` et `public/icons/`).

---

## 2. Déploiement sur Vercel

1. Connectez-vous à Vercel et cliquez sur **Add New... > Project**.
2. Importez votre dépôt `https://github.com/sdbsntech-art/SDBSN-GROUP.git`.
3. Vercel détecte automatiquement le framework **Vite** :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
4. Configurez les **Environment Variables** (variables d'environnement) :
   - `VITE_WEB3FORMS_ACCESS_KEY` : `709797ef-bfab-4ff0-afae-bcfed2d54a57`
5. Cliquez sur **Deploy**.

---

## 3. Nom de Domaine Personnalisé

Dans **Settings > Domains** sur Vercel :
1. Ajoutez `sdbsnx.com` et `www.sdbsnx.com`.
2. Configurez les enregistrements DNS chez votre registrar :
   - A Record : `76.76.21.21`
   - CNAME `www` : `cname.vercel-dns.com`
3. Le certificat SSL/TLS est généré automatiquement par Vercel.

---

## 4. Console d'Administration

- URL : `/admin/login`
- Accès avec : `admin@sdbsnx.com` (mot de passe fort d'au moins 8 caractères).
