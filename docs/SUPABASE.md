# Architecture Supabase & Sécurité RLS — SDBSNX

Ce document présente l'architecture de données, les politiques de sécurité (Row Level Security - RLS) et le modèle d'authentification retenus pour SDBSNX.

---

## 1. Principes de Sécurité Non Négociables

1. **Aucune clé secrète dans le frontend** : La clé `SUPABASE_SERVICE_ROLE_KEY` n'est jamais transmise au navigateur ni présente dans les bundles JS. Seule la clé publique anonyme `VITE_SUPABASE_ANON_KEY` est exposée.
2. **Row Level Security (RLS) obligatoire** : L'accès public en lecture (`SELECT`) à la table des demandes est strictement interdit. Même en disposant de la clé publique anonyme, un tiers ne peut lire aucune demande soumise.
3. **Moindre Privilège** : L'insertion anonyme n'est permise que si le consentement RGPD/CDP est formellement accordé (`privacy_consent = true`) et que les longueurs minimales de champs sont respectées.

---

## 2. Structure des Tables

### Table `public.contact_requests`

| Champ | Type | Contrainte | Description |
|---|---|---|---|
| `id` | UUID | PRIMARY KEY | Identifiant unique généré automatiquement |
| `reference_number` | VARCHAR(64) | UNIQUE, NOT NULL | Numéro officiel (ex: `SDB-2026-A8K2`) |
| `full_name` | VARCHAR(255) | NOT NULL | Nom complet du client |
| `email` | VARCHAR(255) | NOT NULL | Adresse e-mail de contact |
| `phone` | VARCHAR(50) | NULL | Téléphone professionnel facultatif |
| `organization` | VARCHAR(255) | NULL | Société, cabinet ou institution |
| `service_category` | VARCHAR(64) | NOT NULL | Pôle d'intervention demandé |
| `subject` | VARCHAR(255) | NOT NULL | Objet synthétique de la demande |
| `description` | TEXT | NOT NULL | Description détaillée du besoin |
| `budget` | VARCHAR(100) | NULL | Budget indicatif |
| `timeline` | VARCHAR(100) | NULL | Échéance souhaitée |
| `privacy_consent` | BOOLEAN | NOT NULL | Consentement légal obligatoire |
| `status` | ENUM | DEFAULT 'New' | Statut de traitement interne |
| `admin_notes` | TEXT | NULL | Commentaires internes de l'équipe |
| `created_at` | TIMESTAMPTZ | DEFAULT NOW() | Horodatage de réception |
| `updated_at` | TIMESTAMPTZ | DEFAULT NOW() | Horodatage de mise à jour |

---

## 3. Politiques RLS Détaillées

```sql
-- 1. Insertion publique contrôlée
CREATE POLICY "Public can submit contact requests"
ON public.contact_requests
FOR INSERT
TO anon, authenticated
WITH CHECK (
    privacy_consent = true AND
    length(full_name) >= 2 AND
    length(email) >= 5 AND
    length(description) >= 10
);

-- 2. Consultation réservée aux personnels authentifiés
CREATE POLICY "Admins can view contact requests"
ON public.contact_requests
FOR SELECT
TO authenticated
USING (true);

-- 3. Mise à jour des statuts réservée aux personnels authentifiés
CREATE POLICY "Admins can update contact requests"
ON public.contact_requests
FOR UPDATE
TO authenticated
USING (true)
WITH CHECK (true);

-- 4. Suppression réservée aux personnels authentifiés
CREATE POLICY "Admins can delete contact requests"
ON public.contact_requests
FOR DELETE
TO authenticated
USING (true);
```

---

## 4. Sauvegardes & Restauration

- Supabase effectue des sauvegardes automatiques quotidiennes (Point-in-Time Recovery - PITR disponible en formule Pro).
- Les administrateurs peuvent exporter la base de données via le CLI Supabase :
  ```bash
  supabase db dump -f backup_sdbsnx.sql
  ```

