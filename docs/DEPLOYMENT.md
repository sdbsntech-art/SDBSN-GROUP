# Guide de Déploiement — SDBSNX Official Digital Platform

Ce guide détaille la mise en production intégrale de la plateforme SDBSNX sur **Vercel** et **Supabase**, sans serveur VPS, sans Laravel et sans MySQL externe.

---

## 1. Prérequis

- Un compte [GitHub](https://github.com) ou [GitLab](https://gitlab.com).
- Un compte [Vercel](https://vercel.com).
- Un projet [Supabase](https://supabase.com).
- Le logo officiel SDBSNX (déjà intégré dans `public/logo/` et `public/icons/`).

---

## 2. Étape 1 : Configuration de la Base de Données Supabase

1. Créez un nouveau projet sur Supabase (Région recommandée : *eu-west-3 Paris* ou *eu-central-1 Frankfurt*).
2. Rendez-vous dans **SQL Editor** dans la barre latérale.
3. Ouvrez le script de migration local : `supabase/migrations/20261110_init_sdbsnx.sql`.
4. Copiez son contenu et exécutez-le dans le SQL Editor.
5. Vérifiez la création des tables et des politiques RLS :
   - Table `contact_requests` avec Row Level Security activé.
   - Table `admin_audit_logs`.
   - Politiques d'insertion anonyme et de lecture restreinte aux authentifiés.
6. Créez votre compte administrateur dans **Authentication > Users** :
   - Ajoutez un utilisateur par e-mail / mot de passe fort (ex: `admin@sdbsnx.com`).

---

## 3. Étape 2 : Déploiement sur Vercel

1. Poussez le projet sur votre dépôt Git privé.
2. Connectez-vous à Vercel et cliquez sur **Add New... > Project**.
3. Importez votre dépôt `sdbsnx-digital-platform`.
4. Vercel détecte automatiquement le framework **Vite** :
   - **Build Command** : `npm run build`
   - **Output Directory** : `dist`
   - **Install Command** : `npm install`
5. Configurez les **Environment Variables** (variables d'environnement) :
   - `VITE_SUPABASE_URL` : URL de votre projet Supabase
   - `VITE_SUPABASE_ANON_KEY` : Clé publique anonyme Supabase
   - `SUPABASE_URL` : URL Supabase (pour fonctions serveur)
   - `SUPABASE_SERVICE_ROLE_KEY` : Clé de service Supabase
   - `WHATSAPP_CLOUD_API_TOKEN` : (Optionnel) Token Meta WhatsApp Cloud
   - `WHATSAPP_PHONE_NUMBER_ID` : (Optionnel) Identifiant numéro WhatsApp
   - `WHATSAPP_ADMIN_RECIPIENT` : (Optionnel) Numéro administrateur privé
6. Cliquez sur **Deploy**.

---

## 4. Étape 3 : Nom de Domaine Personnalisé

1. Dans Vercel, accédez à **Settings > Domains**.
2. Ajoutez votre domaine institutionnel (ex: `sdbsnx.com` et `www.sdbsnx.com`).
3. Configurez les enregistrements DNS chez votre registrar :
   - Type A : `76.76.21.21` (ou CNAME pour les sous-domaines).
4. Le certificat SSL TLS 1.3 est automatiquement généré et renouvelé par Vercel.

---

## 5. Vérifications Post-Déploiement

- Tester la soumission d'une demande de projet sur `/contact`.
- Vérifier la génération du numéro de référence (format `SDB-YYYY-XXXX`).
- Vérifier l'insertion dans la table Supabase `contact_requests`.
- Se connecter à l'espace administrateur sur `/admin/login` et tester la gestion des statuts.
- Tester l'installation de la PWA sur un smartphone compatible.

