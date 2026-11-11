# Intégration WhatsApp Business Cloud API — SDBSNX

Ce document explique comment activer les alertes WhatsApp discrètes destinées à l'équipe opérationnelle lors de la réception d'une nouvelle demande de projet.

---

## 1. Principe de Confidentialité Absolue

- **Le numéro WhatsApp officiel SDBSNX n'est jamais exposé sur le site public** afin de préserver l'entreprise du spam automatisé et de protéger les coordonnées de contact direct.
- **Fonctionnement résilient (Graceful Fallback)** : Si les identifiants WhatsApp ne sont pas renseignés ou si l'API de Meta subit une indisponibilité, la demande est tout de même enregistrée dans Supabase et le client reçoit immédiatement son accusé avec son numéro de référence sans blocage.

---

## 2. Configuration sur le Portail Meta for Developers

1. Connectez-vous sur [developers.facebook.com](https://developers.facebook.com).
2. Créez ou sélectionnez votre application professionnelle de type **Business**.
3. Ajoutez le produit **WhatsApp**.
4. Dans **WhatsApp > API Setup** :
   - Récupérez votre **Phone Number ID**.
   - Générez un **Access Token** permanent via un *System User* dans votre Meta Business Manager avec la permission `whatsapp_business_messaging`.
5. Définissez le numéro destinataire interne dans `WHATSAPP_ADMIN_RECIPIENT` au format international sans signe `+` (ex: `221770000000`).

---

## 3. Variables d'Environnement Vercel

Ajoutez ces variables dans vos paramètres Vercel :

```env
WHATSAPP_CLOUD_API_TOKEN=EAAG...
WHATSAPP_PHONE_NUMBER_ID=123456789012345
WHATSAPP_ADMIN_RECIPIENT=221770000000
```

---

## 4. Format du Message Envoyé à l'Équipe

Lorsqu'un prospect ou client valide le formulaire de contact, le dispatcher serveur envoie le message suivant :

```text
📌 *NOUVELLE DEMANDE SDBSNX*

*Réf:* SDB-2026-A8K2
*Client:* Ibrahima Diallo (Société XYZ)
*Service:* Solutions LegalTech
*Objet:* Déploiement GED Juridique

Vérifiez l'espace administrateur pour le traitement sécurisé.
```

