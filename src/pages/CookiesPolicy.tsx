import React, { useState, useEffect } from 'react';
import { Cookie, Check } from 'lucide-react';
import { BackButton } from '../components/ui/BackButton';

export const CookiesPolicyPage: React.FC = () => {
  const [currentPreference, setCurrentPreference] = useState<'accepted' | 'essential_only' | 'unset'>('unset');
  const [savedNotice, setSavedNotice] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('sdbsnx_cookie_consent') as any;
    if (consent === 'accepted' || consent === 'essential_only') {
      setCurrentPreference(consent);
    }
  }, []);

  const updatePreference = (pref: 'accepted' | 'essential_only') => {
    localStorage.setItem('sdbsnx_cookie_consent', pref);
    setCurrentPreference(pref);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-[#0E1B17] text-[#F4F1EA]">
      <div className="max-w-4xl mx-auto space-y-10">

        <BackButton to="/" label="Retour à l'accueil" />

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-md bg-[#15271F] border border-[#24403A] text-xs font-mono text-[#6EE7B7] uppercase font-bold">
            <span>Gestion des Traceurs & Confidentialité</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#F4F1EA] tracking-tight font-display">
            Politique Relative aux Cookies
          </h1>
          <p className="text-[#9DB2A8] text-sm">
            Transparence totale sur les technologies de stockage local et cookies techniques.
          </p>
        </div>

        {/* Interactive Preferences Panel */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#15271F] border border-[#24403A] shadow-xl space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-[#0E1B17] border border-[#24403A] text-[#10B981]">
                <Cookie className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-[#F4F1EA]">Vos Préférences Actuelles</h2>
                <p className="text-xs text-[#9DB2A8]">
                  État enregistré :{' '}
                  <span className="font-semibold text-[#10B981] uppercase font-mono">
                    {currentPreference === 'accepted' ? 'Tous les cookies acceptés' : 'Cookies strictement nécessaires uniquement'}
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
                  ? 'bg-[#10B981] text-[#04231A] font-bold border-[#10B981] shadow-sm'
                  : 'bg-[#0E1B17] text-[#F4F1EA] hover:text-[#6EE7B7] border-[#24403A] hover:bg-[#1C332A]'
              }`}
            >
              Uniquement les cookies essentiels
            </button>
            <button
              onClick={() => updatePreference('accepted')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                currentPreference === 'accepted'
                  ? 'bg-[#10B981] text-[#04231A] font-bold border-[#10B981] shadow-sm'
                  : 'bg-[#0E1B17] text-[#F4F1EA] hover:text-[#6EE7B7] border-[#24403A] hover:bg-[#1C332A]'
              }`}
            >
              Accepter tous les cookies (Essentiels & Mesures)
            </button>
          </div>
        </div>

        {/* Detailed Explanations */}
        <div className="p-8 sm:p-10 rounded-3xl bg-[#15271F] border border-[#24403A] shadow-xl space-y-8 text-sm text-[#9DB2A8] leading-relaxed">
          
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-[#F4F1EA] font-display">
              1. Qu&apos;est-ce qu&apos;un cookie ?
            </h3>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la consultation d&apos;un site internet. Il permet au site de mémoriser temporairement des actions ou des préférences (session de connexion, choix linguistique, affichage).
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-[#F4F1EA] font-display">
              2. Cookies Strictement Nécessaires (Non désactivables)
            </h3>
            <p>
              Ces cookies et éléments de stockage local garantissent le fonctionnement technique et la sécurité fondamentale de la plateforme SDBSNX. Sans eux, le site ne peut fonctionner de manière fiable.
            </p>
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs border border-[#24403A] rounded-xl overflow-hidden">
                <thead className="bg-[#0E1B17] text-[#F4F1EA] font-bold">
                  <tr>
                    <th className="p-3">Nom</th>
                    <th className="p-3">Finalité</th>
                    <th className="p-3">Durée</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#24403A] text-[#9DB2A8]">
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#10B981]">sdbsnx_cookie_consent</td>
                    <td className="p-3">Mémorise votre choix relatif aux cookies</td>
                    <td className="p-3">12 mois</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono font-bold text-[#10B981]">sdbsnx_admin_token</td>
                    <td className="p-3">Maintien de session sécurisée dans l&apos;espace administrateur (chiffré)</td>
                    <td className="p-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-[#F4F1EA] font-display">
              3. Absence de Traceurs Publicitaires Tiers
            </h3>
            <p>
              Fidèle à son engagement pour la souveraineté numérique et le respect de la vie privée, <strong>SDBSNX ne dépose aucun cookie publicitaire tiers, ni tracker de reciblage commercial</strong> sur vos appareils.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-[#F4F1EA] font-display">
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
