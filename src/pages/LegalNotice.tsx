import React from 'react';
import { BackButton } from '../components/ui/BackButton';
import { SEO } from '../components/common/SEO';

export const LegalNoticePage: React.FC = () => {
  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 text-[#0B1B3D]">
      <SEO 
        title="Mentions légales | Alkeb.lab"
        description="Identité de l’éditeur, hébergement du site et gestion du nom de domaine Alkeb.lab."
        canonicalPath="/mentions-legales" 
        keywords="mentions légales Alkeb.lab, éditeur Sénégal, hébergement du site"
      />
      <div className="max-w-4xl mx-auto space-y-10">

        <BackButton to="/" label="Retour à l'accueil" />

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 uppercase font-bold">
            <span>Conformité &amp; Légal</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
            Mentions Légales
          </h1>
          <p className="text-slate-500 text-sm">
            Dernière mise à jour : Novembre 2026
          </p>
        </div>

        {/* Content Body */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8 text-sm text-slate-600 leading-relaxed">
          
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              1. Éditeur de la Plateforme
            </h2>
            <p>
              Le site internet officiel accessible à l&apos;adresse <span className="text-emerald-600 font-semibold">https://alkeb-lab.site</span> est édité à titre individuel par :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#0B1B3D]/80">
              <li><strong>Éditeur :</strong> Seydou Bakhayokho, activité exercée à titre individuel</li>
              <li><strong>Nom d&apos;activité :</strong> Alkeb.lab</li>
              <li><strong>Immatriculation :</strong> RCCM et NINEA non attribués, selon les informations communiquées par l&apos;éditeur</li>
              <li><strong>Adresse d&apos;activité :</strong> activité exercée en ligne depuis Pikine, Sénégal</li>
              <li><strong>Contact électronique :</strong> z.b.private.contact@gmail.com</li>
              <li><strong>Ligne directe / WhatsApp :</strong> +221 76 624 24 58</li>
              <li><strong>Responsable de la publication :</strong> Seydou Bakhayokho</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              2. Hébergement de la Plateforme
            </h2>
            <p>
              Le site est hébergé par Vercel. Le nom de domaine et sa configuration DNS sont gérés chez LWS. Ces prestataires ont des rôles distincts :
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[#0B1B3D]/80">
              <li>
                <strong>Hébergement du site :</strong> Vercel Inc. (États-Unis). <a className="text-emerald-700 underline" href="https://vercel.com/legal/terms" target="_blank" rel="noopener noreferrer">Informations légales de Vercel</a>.
              </li>
              <li>
                <strong>Nom de domaine et DNS :</strong> LWS (Ligne Web Services), SAS au capital de 500 000 €, 10 rue Penthièvre, 75008 Paris, France. RCS Paris B 851 993 683 00024. <a className="text-emerald-700 underline" href="https://www.lws.fr/a_propos_infos.php" target="_blank" rel="noopener noreferrer">Informations légales de LWS</a>.
              </li>
              <li>
                <strong>Acheminement des formulaires :</strong> Web3Forms.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-[#0B1B3D] font-display">
              3. Propriété Intellectuelle
            </h2>
            <p>
              Les textes, visuels et autres contenus originaux du site sont protégés par le droit d&apos;auteur. Toute réutilisation doit respecter les droits de leurs auteurs et les exceptions prévues par la loi.
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
