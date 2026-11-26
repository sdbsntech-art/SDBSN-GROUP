import React, { useState, useEffect } from 'react';
import { Cookie, Check } from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';
import { SEO } from '../components/common/SEO';

export const CookiesPolicyPage: React.FC = () => {
  const [currentPreference, setCurrentPreference] = useState<'accepted' | 'essential_only' | 'unset'>('unset');
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('alkeb_cookie_consent');
    if (consent === 'accepted' || consent === 'essential_only') {
      setCurrentPreference(consent);
    }
  }, []);

  const updatePreference = (pref: 'accepted' | 'essential_only') => {
    localStorage.setItem('alkeb_cookie_consent', pref);
    window.dispatchEvent(new CustomEvent('alkeb:cookie-consent-change', { detail: pref }));
    setCurrentPreference(pref);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 text-[#0B1B3D]">
      <SEO 
        title="Politique relative aux Cookies & Traceurs | Alkeb.lab"
        description="Choix et gestion du stockage local et des outils de mesure d'audience sur la plateforme Alkeb.lab."
        canonicalPath="/politique-cookies" 
        keywords="cookies Alkeb.lab, traceurs web, consentement cookies Sénégal, respect de la vie privée"
      />
      <div className="max-w-4xl mx-auto space-y-10">

        <BackButton to="/" label="Retour à l'accueil" />

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-700 uppercase font-bold">
            <span>Consentement &amp; Stockage local</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
            Politique Relative aux Cookies
          </h1>
          <p className="text-slate-500 text-sm">
            Les outils de mesure chargés via Google Tag Manager sont désactivés avant votre accord.
          </p>
        </div>

        {/* Interactive Preferences Panel */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-600">
                <Cookie className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#0B1B3D]">Vos Préférences Actuelles</h2>
                <p className="text-xs text-slate-500">
                  État enregistré :{' '}
                  <span className="font-semibold text-emerald-600 uppercase font-mono">
                        {currentPreference === 'accepted'
                          ? 'Mesure d’audience acceptée'
                          : currentPreference === 'essential_only'
                            ? 'Stockage essentiel uniquement'
                            : 'Aucun choix enregistré'}
                  </span>
                </p>
              </div>
            </div>

            {savedNotice && (
              <span className="text-xs font-mono text-[#04231A] font-bold flex items-center bg-[#10B981] px-3 py-1 rounded-full shadow-sm">
                <Check className="w-3.5 h-3.5 mr-1" />
                Préférence mise à jour
              </span>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button
              onClick={() => updatePreference('essential_only')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                currentPreference === 'essential_only'
                  ? 'bg-[#10B981] text-[#04231A] font-bold border-emerald-500 shadow-sm'
                  : 'bg-slate-50 text-[#0B1B3D] hover:text-emerald-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Uniquement les cookies essentiels
            </button>
            <button
              onClick={() => updatePreference('accepted')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                currentPreference === 'accepted'
                  ? 'bg-[#10B981] text-[#04231A] font-bold border-emerald-500 shadow-sm'
                  : 'bg-slate-50 text-[#0B1B3D] hover:text-emerald-700 border-slate-200 hover:bg-slate-100'
              }`}
            >
              Autoriser la mesure d&apos;audience
            </button>
          </div>
        </div>

        {/* Detailed Explanations */}
        <div className="p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-8 text-sm text-slate-600 leading-relaxed">
          
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-[#0B1B3D] font-display">
              1. Qu&apos;est-ce qu&apos;un cookie ?
            </h3>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la consultation d&apos;un site internet. Il permet au site de mémoriser temporairement des actions ou des préférences (session de connexion, choix linguistique, affichage).
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-[#0B1B3D] font-display">
              2. Cookies Strictement Nécessaires (Non désactivables)
            </h3>
            <p>
              Ces cookies et éléments de stockage local garantissent le fonctionnement technique et la sécurité fondamentale de la plateforme Alkeb.lab. Sans eux, le site ne peut fonctionner de manière fiable.
            </p>
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs border border-slate-200 rounded-xl overflow-hidden">
                <thead className="bg-slate-50 text-[#0B1B3D] font-bold">
                  <tr>
                    <th className="p-3">Nom</th>
                    <th className="p-3">Finalité</th>
                    <th className="p-3">Durée</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-600">
                  <tr>
                    <td className="p-3 font-mono font-bold text-emerald-600">alkeb_cookie_consent</td>
                    <td className="p-3">Mémorise votre choix relatif aux cookies</td>
                    <td className="p-3">Jusqu&apos;à suppression du stockage du navigateur</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-[#0B1B3D] font-display">
              3. Mesure d&apos;audience via Google Tag Manager
            </h3>
            <p>
              Google Tag Manager n&apos;est chargé qu&apos;après votre choix « Accepter ». Le conteneur peut ensuite exécuter les balises configurées par l&apos;éditeur. Le paramétrage du conteneur doit respecter les préférences enregistrées ici.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-[#0B1B3D] font-display">
              4. Gestion via votre Navigateur
            </h3>
            <p>
              Vous pouvez à tout moment configurer votre logiciel de navigation pour bloquer systématiquement les cookies ou vous alerter lorsqu&apos;un cookie est sur le point d&apos;être déposé (Chrome, Firefox, Safari, Edge).
            </p>
          </section>

        </div>

      </div>
    </div>
  );
};
