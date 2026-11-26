import React from 'react';
import { BackButton } from '../components/ui/BackButton';
import { SEO } from '../components/common/SEO';

export const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 text-[#0B1B3D]">
      <SEO 
        title="Politique de Confidentialité & Protection des Données | Alkeb.lab"
        description="Informations sur les données personnelles transmises via les formulaires et les services tiers utilisés par Alkeb.lab."
        canonicalPath="/politique-confidentialite" 
        keywords="confidentialité Alkeb.lab, données personnelles Sénégal, politique de confidentialité"
      />
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
            Informations sur les traitements de données du site
          </p>
        </div>

        {/* Policy Body */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8 text-sm text-slate-600 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              1. Engagement de Alkeb.lab en matière de Vie Privée
            </h2>
            <p>
              Pour Alkeb.lab, la protection des données personnelles et de la vie privée n&apos;est pas une simple obligation administrative mais un prolongement direct de notre valeur cardinale : <em>CONFIDENTIALITY AND TRUST</em>.
            </p>
            <p>
              Cette page décrit les traitements liés au site et les prestataires identifiés à ce jour. Elle ne constitue pas une certification de conformité. Les formalités applicables et les durées de conservation doivent être confirmées par l&apos;éditeur au regard des traitements réellement mis en œuvre.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              2. Données Collectées &amp; Origine
            </h2>
            <p>
              Lors d&apos;une demande, les champs du formulaire peuvent comprendre :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0B1B3D]/80">
              <li><strong>Identification et contact :</strong> nom, adresse électronique, et, si vous les indiquez, téléphone et organisation.</li>
              <li><strong>Données du projet :</strong> catégorie de service, objet, description, budget et calendrier, selon les champs remplis.</li>
              <li><strong>Référence de demande :</strong> un numéro de référence est généré pour permettre le suivi de la demande.</li>
              <li><strong>Données techniques :</strong> les prestataires peuvent traiter des données de connexion et journaux techniques selon leurs propres services et politiques.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              3. Utilisation des données
            </h2>
            <p>Vos données sont traitées pour des objectifs précis et légitimes :</p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#0B1B3D]/80">
              <li>
                <strong>Réponse aux demandes :</strong> lire votre demande, vous recontacter et préparer une proposition si vous l&apos;avez sollicitée.
              </li>
              <li>
                <strong>Fonctionnement et sécurité :</strong> protéger le formulaire et le site contre les erreurs, le spam et les abus.
              </li>
              <li>
                <strong>Mesure d&apos;audience :</strong> Google Tag Manager n&apos;est chargé qu&apos;après votre choix d&apos;autoriser la mesure d&apos;audience. Les balises présentes dans son conteneur dépendent de sa configuration.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              4. Durée de Conservation des Données
            </h2>
            <p>
              Les demandes transmises par formulaire sont acheminées via Web3Forms et peuvent être reçues dans la messagerie configurée. L&apos;éditeur doit définir et appliquer une durée de conservation adaptée; elle n&apos;est pas automatisée par le code du site.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0B1B3D]/80">
              <li><strong>Demandes sans suite :</strong> la durée dépend des règles de conservation appliquées dans les comptes Web3Forms et de messagerie de l&apos;éditeur.</li>
              <li><strong>Dossiers clients :</strong> leur conservation peut également dépendre des obligations contractuelles et légales applicables.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              5. Destinataires et Non-Divulgation
            </h2>
            <p>
              Alkeb.lab <strong>ne vend, ne loue, ni ne cède jamais</strong> vos données personnelles à des tiers à des fins publicitaires ou de prospection.
            </p>
            <p>
              Les services tiers impliqués dans le fonctionnement du site peuvent traiter certaines données :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0B1B3D]/80">
              <li>Web3Forms, pour l&apos;acheminement des demandes de contact.</li>
              <li>Vercel, qui héberge le site, et LWS, qui gère le domaine et les DNS.</li>
              <li>Google Tag Manager, après consentement à la mesure d&apos;audience, selon les balises configurées dans son conteneur.</li>
              <li>Supabase, pour l&apos;authentification de l&apos;espace administrateur, si cette fonction est activée.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              6. Sécurité Technique &amp; Cloisonnement
            </h2>
            <p>
              Le site utilise HTTPS et limite les données de demande conservées dans le navigateur. Les protections complémentaires et journaux éventuellement appliqués par les prestataires dépendent de leurs configurations et de leurs services.
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0B1B3D]/80">
              <li>L&apos;espace administrateur utilise Supabase Auth lorsque Supabase est configuré.</li>
              <li>La clé d&apos;accès Web3Forms est utilisée côté navigateur; elle ne doit pas être considérée comme un secret.</li>
              <li>Les paramètres de sécurité des comptes Vercel, Web3Forms, Supabase et Google Tag Manager doivent être gérés dans ces services.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              7. Vos Droits &amp; Modalités d&apos;Exercice
            </h2>
            <p>
              Selon la réglementation applicable, vous pouvez demander des informations sur les données vous concernant et solliciter leur rectification ou leur suppression, sous réserve des limites prévues par la loi :
            </p>
            <ul className="list-disc pl-5 space-y-1 text-[#0B1B3D]/80">
              <li><strong>Droit d&apos;accès :</strong> Obtenir confirmation que des données vous concernant sont traitées.</li>
              <li><strong>Droit de rectification :</strong> Corriger des données inexactes ou incomplètes.</li>
              <li><strong>Droit à l&apos;effacement :</strong> Demander la suppression définitive de vos données.</li>
            </ul>
            <p className="mt-3">
              Pour toute demande concernant vos données, contactez l&apos;éditeur à l&apos;adresse : <span className="text-emerald-600 font-semibold">z.b.private.contact@gmail.com</span>. Le numéro de référence peut faciliter la recherche de votre demande.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
