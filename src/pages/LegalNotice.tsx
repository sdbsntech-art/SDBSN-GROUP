import React from 'react';
import { ShieldAlert } from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const LegalNoticePage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-[#0E1B17] text-[#F4F1EA]">
      <div className="max-w-4xl mx-auto space-y-10">

        <BackButton to="/" label="Retour à l'accueil" />

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#15271F] border border-[#24403A] text-xs font-mono text-[#6EE7B7] uppercase font-bold">
            <span>Conformité & Légal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1EA] tracking-tight font-display">
            Mentions Légales
          </h1>
          <p className="text-[#9DB2A8] text-sm">
            Dernière mise à jour : Novembre 2026
          </p>
        </div>

        {/* Legal Disclaimer Box */}
        <div className="p-5 rounded-2xl bg-[#0E1B17] border border-[#F59E0B]/40 text-xs sm:text-sm text-[#F59E0B] flex items-start space-x-3 leading-relaxed shadow-sm">
          <ShieldAlert className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
          <div>
            <strong className="text-[#F59E0B] block mb-0.5 font-bold">Note d&apos;information juridique :</strong>
            Ce document constitue un modèle d&apos;information institutionnelle établi conformément aux obligations d&apos;identification prévues par la législation sénégalaise (notamment la Loi n° 2008-08 sur les transactions électroniques). Les mentions indiquées [À COMPLÉTER] doivent faire l&apos;objet d&apos;une validation formelle auprès des instances compétentes de la structure lors de son immatriculation définitive.
          </div>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#15271F] border border-[#24403A] shadow-xl space-y-8 text-sm text-[#9DB2A8] leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F4F1EA] font-display">
              1. Éditeur de la Plateforme
            </h2>
            <p>
              Le site internet officiel accessible à l&apos;adresse <span className="text-[#10B981] font-semibold">https://sdbsnx.com</span> est édité par la structure commerciale et technologique :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#F4F1EA]/90">
              <li><strong>Nom commercial :</strong> SDBSNX</li>
              <li><strong>Forme juridique :</strong> [À COMPLÉTER — ex: SARL / SAS / En cours d&apos;immatriculation]</li>
              <li><strong>Numéro d&apos;immatriculation (RCCM) :</strong> [À COMPLÉTER]</li>
              <li><strong>Numéro d&apos;Identification Fiscale (NINEA) :</strong> [À COMPLÉTER]</li>
              <li><strong>Siège social / Adresse professionnelle :</strong> [À COMPLÉTER — Dakar, Sénégal]</li>
              <li><strong>Contact électronique :</strong> contact@sdbsnx.com</li>
              <li><strong>Responsable de la publication :</strong> La Direction de SDBSNX [Nom du représentant légal À COMPLÉTER]</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F4F1EA] font-display">
              2. Hébergement de la Plateforme
            </h2>
            <p>
              L&apos;infrastructure technique et applicative est hébergée auprès des prestataires certifiés suivants :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#F4F1EA]/90">
              <li>
                <strong>Frontend et Fonctions Serverless :</strong> Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis. (Réseau de distribution mondial et haute disponibilité).
              </li>
              <li>
                <strong>Acheminement des Formulaires :</strong> Web3Forms (Acheminement chiffré TLS 1.3 vers la messagerie professionnelle sécurisée de SDBSNX).
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F4F1EA] font-display">
              3. Propriété Intellectuelle
            </h2>
            <p>
              L&apos;ensemble des contenus de la plateforme SDBSNX — incluant sans s&apos;y limiter le logo officiel SDBSNX, les monogrammes, les chartes graphiques, les textes institutionnels, les architectures logicielles, les devises, la sélection &ldquo;THE STANDARD WE LIVE BY&rdquo; et le code source — sont protégés au titre du droit d&apos;auteur, du droit des marques et de la propriété intellectuelle.
            </p>
            <p>
              Toute reproduction, représentation, altération, diffusion ou exploitation totale ou partielle sans autorisation expresse et préalable de SDBSNX est strictement prohibée.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F4F1EA] font-display">
              4. Encadrement des Prestations de Cybersécurité et Audits
            </h2>
            <p>
              Les activités d&apos;évaluation de sécurité, tests de résistance, audits de code et analyses de vulnérabilités proposés par SDBSNX s&apos;inscrivent exclusivement dans le cadre d&apos;un mandat contractuel bilatéral préalablement signé avec l&apos;entité légalement habilitée à autoriser l&apos;audit.
            </p>
            <p>
              SDBSNX applique une politique de tolérance zéro envers les activités informatiques illégitimes ou non autorisées.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F4F1EA] font-display">
              5. Pôle LegalTech & Réserve Réglementaire
            </h2>
            <p>
              Les solutions et progiciels développés dans le cadre du pôle LegalTech constituent des outils logiciels d&apos;assistance, de dématérialisation et d&apos;automatisation organisationnelle. Ils ne constituent pas des actes de conseil juridique au sens des textes réglementant la profession d&apos;avocat ou de conseil juridique.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#F4F1EA] font-display">
              6. Droit Applicable
            </h2>
            <p>
              Le présent site est soumis au droit de la République du Sénégal. Tout litige relatif à l&apos;utilisation de la plateforme relèvera de la compétence des tribunaux compétents de Dakar, sous réserve d&apos;une tentative préalable de règlement amiable.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
