import React from 'react';
import { BackButton } from '../components/ui/BackButton';

export const TermsPage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto space-y-10">

        <BackButton to="/" label="Retour à l'accueil" />

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-cyan uppercase">
            <span>Réglementation Contractuelle</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Conditions Générales d&apos;Utilisation (CGU)
          </h1>
          <p className="text-slate-400 text-sm">
            Cadre d&apos;accès et d&apos;utilisation de la plateforme numérique institutionnelle SDBSNX.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 space-y-8 text-sm text-slate-300 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">
              1. Objet et Champ d&apos;Application
            </h2>
            <p>
              Les présentes Conditions Générales d&apos;Utilisation (ci-après les &ldquo;CGU&rdquo;) régissent l&apos;accès et l&apos;utilisation du site internet et des services numériques édités par SDBSNX. Toute navigation sur le site emporte acceptation sans réserve des présentes conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">
              2. Accès à la Plateforme & Sécurité
            </h2>
            <p>
              SDBSNX met en œuvre tous les moyens raisonnables pour assurer un accès sécurisé et ininterrompu à sa plateforme. Toutefois, SDBSNX ne saurait être tenue responsable des interruptions de service dues à des opérations de maintenance, des pannes d&apos;infrastructure réseau ou des cas de force majeure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">
              3. Utilisation Acceptable & Interdictions Strictes
            </h2>
            <p>
              L&apos;utilisateur s&apos;engage à utiliser la plateforme de manière loyale, conforme à l&apos;ordre public et aux lois applicables. Sont expressément interdits :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-slate-300">
              <li>
                Toute tentative d&apos;intrusion, d&apos;altération de code, de décompilation ou d&apos;injection SQL / XSS sur les formulaires et API de la plateforme.
              </li>
              <li>
                Tout test d&apos;intrusion ou scan de vulnérabilités automatisé à l&apos;encontre des serveurs SDBSNX sans mandat contractuel écrit et signé par la direction.
              </li>
              <li>
                L&apos;extraction automatisée non autorisée de données (scraping) ou la surcharge délibérée des infrastructures (attaques par déni de service).
              </li>
              <li>
                La soumission de fausses demandes, d&apos;identités usurpées ou de contenus illicites via les formulaires de prise de contact.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">
              4. Propriété Intellectuelle & Droits Réservés
            </h2>
            <p>
              L&apos;ensemble des éléments composant le site (marques, logos, textes, structures de données, chartes graphiques, illustrations et logiciels) demeurent la propriété exclusive de SDBSNX. Aucune licence d&apos;exploitation ni droit d&apos;usage commercial n&apos;est concédé à l&apos;utilisateur en dehors de la consultation normale du site.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">
              5. Limitation de Responsabilité
            </h2>
            <p>
              Les informations et descriptifs de solutions figurant sur le site sont fournis à titre indicatif et institutionnel. Bien que SDBSNX s&apos;efforce de diffuser des informations vérifiées et actualisées, elle ne peut garantir l&apos;exhaustivité immédiate des contenus.
            </p>
            <p>
              Seuls les contrats, devis et cahiers des charges formellement signés entre SDBSNX et ses clients ont valeur d&apos;engagement contractuel juridique et technique.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-white font-display">
              6. Juridiction & Résolution des Différends
            </h2>
            <p>
              Les présentes CGU sont soumises à la législation de la République du Sénégal. En cas de contestation ou de litige découlant de l&apos;interprétation ou de l&apos;exécution des présentes, les parties s&apos;engagent à rechercher une solution amiable préalable. À défaut d&apos;accord amiable sous un délai de trente (30) jours, compétence expresse est attribuée aux tribunaux compétents de Dakar.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
