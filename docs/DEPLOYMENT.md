# Guide de Déploiement — Alkeb.lab

Ce guide détaille la mise en production de la plateforme Alkeb.lab sur **Vercel**, avec le domaine et les DNS gérés chez **LWS**, et l'acheminement des formulaires par **Web3Forms**.

---

## 1. Prérequis

- Un compte [GitHub](https://github.com) avec le dépôt `SDBSN-GROUP`.
- Un compte [Vercel](https://vercel.com).
- Un compte [LWS](https://www.lws.fr/) pour gérer le domaine et les enregistrements DNS.
- La configuration Web3Forms déjà utilisée par le projet. Conservez la clé et l'adresse destinataire existantes sans les modifier.
- Le logo officiel Alkeb.lab (déjà intégré dans `public/logo/` et `public/icons/`).

---

## 2. Déploiement sur Vercel

1. Connectez-vous à Vercel et cliquez sur **Add New... > Project**.
2. Importez votre dépôt `https://github.com/sdbsntech-art/SDBSN-GROUP.git`.
3. Vercel détecte automatiquement le framework **Vite** :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
4. Configurez les **Environment Variables** (variables d'environnement) :
   - `VITE_WEB3FORMS_ACCESS_KEY` : clé Web3Forms utilisée par le formulaire (une variable `VITE_` est intégrée au code navigateur et n'est pas un secret serveur)
   - `VITE_SUPABASE_URL` : URL HTTPS de votre projet Supabase
   - `VITE_SUPABASE_ANON_KEY` : clé publique anonyme Supabase
   - `VITE_ADMIN_EMAIL` : adresse autorisée à administrer la console
5. Cliquez sur **Deploy**.

---

## 3. Domaine et DNS chez LWS

1. Dans Vercel, ouvrez **Settings > Domains** et ajoutez `alkeb-lab.site`.
2. Dans l'espace DNS de LWS, créez les enregistrements exactement comme Vercel les indique pour ce domaine. Les valeurs peuvent varier selon la configuration Vercel ; ne recopiez pas de valeurs provenant d'un autre projet.
3. Attendez la validation DNS et l'émission du certificat HTTPS par Vercel, puis vérifiez que `https://alkeb-lab.site` s'ouvre correctement.

---

## 4. Google Search Console

Après la configuration DNS et la mise en ligne du domaine :
1. Ajoutez `alkeb-lab.site` comme propriété de domaine dans Google Search Console.
2. Publiez l'enregistrement TXT de vérification fourni par Google chez votre registrar DNS. La balise HTML déjà présente dans le site peut servir pour une propriété de préfixe d'URL, mais une propriété de domaine se vérifie par DNS.
3. Dans Search Console, soumettez le sitemap `https://alkeb-lab.site/sitemap.xml`.
4. Utilisez l'inspection d'URL pour demander l'exploration de la page d'accueil et des pages de services.

L'indexation et le classement restent décidés par Google ; ces étapes ne garantissent pas une position précise.

## 5. Console d'Administration

- URL : `/admin/login`
- Accès avec l’adresse définie par `VITE_ADMIN_EMAIL` (mot de passe fort d'au moins 16 caractères).
