import React from 'react';
import { AlertTriangle } from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 text-[#0B1B3D]">
      <div className="max-w-4xl mx-auto space-y-10">

        <BackButton to="/" label="Retour à l'accueil" />

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 uppercase font-bold">
            <span>Protection des Données &amp; Vie Privée</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
            Politique de Confidentialité
          </h1>
          <p className="text-slate-500 text-sm">
            Conformité à la Loi sénégalaise n° 2008-12 sur la protection des données à caractère personnel
          </p>
        </div>

        {/* Model Disclaimer */}
        <div className="p-5 rounded-2xl bg-amber-50 border border-amber-200 text-xs sm:text-sm text-amber-700 flex items-start space-x-3 leading-relaxed shadow-sm">
          <AlertTriangle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-amber-700 block mb-0.5 font-bold">Avertissement de conformité :</strong>
            La présente politique constitue un modèle d&apos;information précontractuelle établi pour SDBSNX. Elle devra être formellement auditée et enregistrée auprès de la Commission de Protection des Données Personnelles (CDP) du Sénégal selon la procédure de déclaration requise dès la mise en service commerciale définitive.
          </div>
        </div>

        {/* Policy Body */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8 text-sm text-slate-600 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              1. Engagement de SDBSNX en matière de Vie Privée
            </h2>
            <p>
              Pour SDBSNX, la protection des données personnelles et de la vie privée n&apos;est pas une simple obligation administrative mais un prolongement direct de notre valeur cardinale : <em>CONFIDENTIALITY AND TRUST</em>.
            </p>
            <p>
              Nous nous engageons à respecter scrupuleusement les dispositions de la <strong>Loi n° 2008-12 du 25 janvier 2008</strong> portant sur la protection des données à caractère personnel en République du Sénégal ainsi que les bonnes pratiques internationales.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              2. Données Collectées &amp; Origine
            </h2>
            <p>
              SDBSNX applique le principe de minimisation : nous ne collectons que les données strictement indispensables à l&apos;exécution de nos services.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0B1B3D]/80">
              <li><strong>Données d&apos;identification :</strong> Nom, prénom, fonction ou statut organisationnel.</li>
              <li><strong>Données de contact :</strong> Adresse électronique professionnelle, numéro de téléphone (facultatif).</li>
              <li><strong>Données projet :</strong> Nature du service demandé, description synthétique du besoin, budget indicatif, calendrier souhaité.</li>
              <li><strong>Données techniques de sécurité :</strong> Empreinte d&apos;adresse IP chiffrée, horodatage de soumission, numéro de référence unique attribué au dossier.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              3. Finalités du Traitement &amp; Bases Juridiques
            </h2>
            <p>Vos données sont traitées pour des objectifs précis et légitimes :</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#0B1B3D]/80">
              <li>
                <strong>Gestion et instruction des demandes de contact :</strong> Base légale : Mesures précontractuelles prises à votre demande (Article 33 de la Loi 2008-12).
              </li>
              <li>
                <strong>Sécurité et prévention du spam/fraude :</strong> Base légale : Intérêt légitime de protection des systèmes d&apos;information contre les attaques malveillantes.
              </li>
              <li>
                <strong>Conformité réglementaire et archivage des consentements :</strong> Base légale : Respect des obligations légales en vigueur.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              4. Durée de Conservation des Données
            </h2>
            <p>
              Les données soumises via nos formulaires sont conservées pour une durée strictement nécessaire :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0B1B3D]/80">
              <li><strong>Prospects et demandes sans suite :</strong> Données archivées ou purgées dans un délai maximal de 24 mois après le dernier contact.</li>
              <li><strong>Dossiers clients contractualisés :</strong> Conservation pendant la durée de la relation contractuelle, puis archivage légal pendant les durées de prescription applicables.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              5. Destinataires et Non-Divulgation
            </h2>
            <p>
              SDBSNX <strong>ne vend, ne loue, ni ne cède jamais</strong> vos données personnelles à des tiers à des fins publicitaires ou de prospection.
            </p>
            <p>
              Les seules entités susceptibles d&apos;accéder à certaines données sont :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0B1B3D]/80">
              <li>Les collaborateurs internes de SDBSNX spécifiquement habilités et tenus au secret professionnel.</li>
              <li>Nos sous-traitants d&apos;infrastructure sécurisée (hébergement Vercel et passerelle d&apos;acheminement Web3Forms), dans le respect strict des garanties contractuelles de sécurité.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              6. Sécurité Technique &amp; Cloisonnement
            </h2>
            <p>
              En accord avec notre culture de cybersécurité, nous appliquons un haut niveau de protection technique :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0B1B3D]/80">
              <li>Chiffrement TLS 1.3 de toutes les communications réseau.</li>
              <li>Contrôle d&apos;accès strict sur nos systèmes : aucune donnée client n&apos;est exposée publiquement.</li>
              <li>Absence totale de clés secrètes dans les applications clientes (frontend).</li>
              <li>Journalisation des accès administratifs (audit logs).</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              7. Vos Droits &amp; Modalités d&apos;Exercice
            </h2>
            <p>
              Conformément à la Loi n° 2008-12, vous disposez des droits suivants :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0B1B3D]/80">
              <li><strong>Droit d&apos;accès :</strong> Obtenir confirmation que des données vous concernant sont traitées.</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes ou incomplètes.</li>
              <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression définitive de vos données.</li>
              <li><strong>Droit d&apos;opposition :</strong> Vous opposer au traitement pour motifs légitimes.</li>
            </ul>
            <p className="mt-3">
              Pour exercer vos droits, vous pouvez contacter notre référent protection des données par courrier électronique à l&apos;adresse : <span className="text-emerald-600 font-semibold">privacy@sdbsnx.com</span> (ou contact@sdbsnx.com), en mentionnant votre numéro de référence le cas échéant.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
