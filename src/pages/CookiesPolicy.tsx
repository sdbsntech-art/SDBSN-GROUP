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
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-4xl mx-auto space-y-10">

        <BackButton to="/" label="Retour à l'accueil" />

        {/* Header */}
        <div className="space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-brand-blue/10 border border-brand-blue/30 text-xs font-mono text-brand-cyan uppercase">
            <span>Gestion des Traceurs & Confidentialité</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Politique Relative aux Cookies
          </h1>
          <p className="text-slate-400 text-sm">
            Transparence totale sur les technologies de stockage local et cookies techniques.
          </p>
        </div>

        {/* Interactive Preferences Panel */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel-glow border border-brand-blue/30 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2.5 rounded-xl bg-brand-blue/10 text-brand-cyan">
                <Cookie className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-white">Vos Préférences Actuelles</h2>
                <p className="text-xs text-slate-400">
                  État enregistré :{' '}
                  <span className="font-semibold text-brand-cyan uppercase font-mono">
                    {currentPreference === 'accepted' ? 'Tous les cookies acceptés' : 'Cookies strictement nécessaires uniquement'}
                  </span>
                </p>
              </div>
            </div>

            {savedNotice && (
              <span className="text-xs font-mono text-emerald-400 flex items-center bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
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
                  ? 'bg-brand-blue/20 text-brand-cyan border-brand-blue/60'
                  : 'glass-panel text-slate-300 hover:text-white border-white/10 hover:bg-white/5'
              }`}
            >
              Uniquement les cookies essentiels
            </button>
            <button
              onClick={() => updatePreference('accepted')}
              className={`px-5 py-2.5 rounded-xl text-xs font-semibold transition-all border ${
                currentPreference === 'accepted'
                  ? 'bg-brand-blue text-white border-brand-blue'
                  : 'glass-panel text-slate-300 hover:text-white border-white/10 hover:bg-white/5'
              }`}
            >
              Accepter tous les cookies (Essentiels & Mesures)
            </button>
          </div>
        </div>

        {/* Detailed Explanations */}
        <div className="p-8 sm:p-10 rounded-3xl glass-panel border border-white/10 space-y-8 text-sm text-slate-300 leading-relaxed">
          
          <section className="space-y-3">
            <h3 className="text-lg font-bold text-white font-display">
              1. Qu&apos;est-ce qu&apos;un cookie ?
            </h3>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal (ordinateur, tablette, smartphone) lors de la consultation d&apos;un site internet. Il permet au site de mémoriser temporairement des actions ou des préférences (session de connexion, choix linguistique, affichage).
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-white font-display">
              2. Cookies Strictement Nécessaires (Non désactivables)
            </h3>
            <p>
              Ces cookies et éléments de stockage local garantissent le fonctionnement technique et la sécurité fondamentale de la plateforme SDBSNX. Sans eux, le site ne peut fonctionner de manière fiable.
            </p>
            <div className="overflow-x-auto pt-2">
              <table className="w-full text-left text-xs border border-white/10 rounded-xl overflow-hidden">
                <thead className="bg-white/5 text-slate-200">
                  <tr>
                    <th className="p-3">Nom</th>
                    <th className="p-3">Finalité</th>
                    <th className="p-3">Durée</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 text-slate-400">
                  <tr>
                    <td className="p-3 font-mono text-brand-cyan">sdbsnx_cookie_consent</td>
                    <td className="p-3">Mémorise votre choix relatif aux cookies</td>
                    <td className="p-3">12 mois</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-mono text-brand-cyan">sb-*-auth-token</td>
                    <td className="p-3">Maintien de session sécurisée dans l&apos;espace administrateur (chiffré)</td>
                    <td className="p-3">Session</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-white font-display">
              3. Absence de Traceurs Publicitaires Tiers
            </h3>
            <p>
              Fidèle à son engagement pour la souveraineté numérique et le respect de la vie privée, <strong>SDBSNX ne dépose aucun cookie publicitaire tiers, ni tracker de reciblage commercial</strong> sur vos appareils.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-lg font-bold text-white font-display">
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
