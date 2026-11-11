# Guide Progressive Web App (PWA) — SDBSNX

La plateforme institutionnelle SDBSNX est configurée comme une **Progressive Web App (PWA)** de classe internationale pour garantir une consultation fluide et une résilience même en conditions réseau instables.

---

## 1. Composants PWA Implémentés

1. **Manifest Web App (`public/manifest.json`)** :
   - Nom complet et court officiels.
   - Icônes adaptatives 192x192 et 512x512 issues du logo officiel SDBSNX.
   - Thème et arrière-plan sombres institutionnels (`#0A0F1D` et `#050811`).
   - Mode d'affichage autonome (`display: standalone`).

2. **Service Worker (`public/sw.js`)** :
   - Mise en cache de la coquille applicative (App Shell) et des assets graphiques.
   - Mode hors-connexion sécurisé pour les pages publiques mises en cache.

---

## 2. Règle de Sécurité Stricte sur le Cache

Conformément au cahier des charges :
> **"Ne jamais mettre en cache les données administratives, les messages clients ou les réponses privées."**

Le Service Worker applique une exclusion explicite :
- Les routes commençant par `/admin` ne sont **JAMAIS** mises en cache.
- Les appels d'API `/api/*` ne sont **JAMAIS** mis en cache.
- Les requêtes adressées à Supabase (`*.supabase.co`) sont exclues du cache navigateur.

---

## 3. Installation sur Mobile & Desktop

- **Sur Android (Chrome)** : Un bouton "Installer l'application" apparaît dans le menu du navigateur pour ajouter SDBSNX sur l'écran d'accueil avec icône dédiée.
- **Sur iOS (Safari)** : Utilisez "Partager > Sur l'écran d'accueil".
- **Sur Desktop (Chrome / Edge)** : Une icône d'installation apparaît dans la barre d'adresse pour installer SDBSNX comme application de bureau native.

