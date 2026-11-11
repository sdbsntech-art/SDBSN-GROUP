import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Send, 
  CheckCircle, 
  AlertCircle, 
  ShieldCheck, 
  Lock, 
  Copy, 
  Check, 
  Clock, 
  FileText 
} from 'lucide-react';
import { submitContactRequest } from '../lib/supabase';
import { generateReferenceNumber } from '../lib/utils';
import type { ServiceCategory } from '../types';
import { BackButton } from '../components/ui/BackButton';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    serviceCategory: 'web_development' as ServiceCategory,
    subject: '',
    description: '',
    budget: '',
    timeline: '',
    privacyConsent: false,
    honeypot: '', // spam prevention trap
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [successRef, setSuccessRef] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    // Basic client checks
    if (!formData.fullName.trim() || formData.fullName.trim().length < 2) {
      setErrorMsg('Veuillez renseigner votre nom complet (au moins 2 caractères).');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      setErrorMsg('Veuillez renseigner une adresse e-mail professionnelle valide.');
      return;
    }

    if (!formData.description.trim() || formData.description.trim().length < 10) {
      setErrorMsg('Veuillez décrire votre projet ou besoin (minimum 10 caractères).');
      return;
    }

    if (!formData.privacyConsent) {
      setErrorMsg('Vous devez accepter la politique de confidentialité pour transmettre votre demande.');
      return;
    }

    // Honeypot check
    if (formData.honeypot) {
      setSuccessRef('SDB-PROCESSED');
      return;
    }

    setLoading(true);

    try {
      const generatedRef = generateReferenceNumber();

      // Submit through our supabase / API client
      const res = await submitContactRequest({
        reference_number: generatedRef,
        full_name: formData.fullName.trim(),
        email: formData.email.trim().toLowerCase(),
        phone: formData.phone.trim() || undefined,
        organization: formData.organization.trim() || undefined,
        service_category: formData.serviceCategory,
        subject: formData.subject.trim() || 'Demande de prise de contact',
        description: formData.description.trim(),
        budget: formData.budget.trim() || undefined,
        timeline: formData.timeline.trim() || undefined,
        privacy_consent: formData.privacyConsent,
      });

      if (res.success) {
        setSuccessRef(res.referenceNumber);
        // Optional backend webhook notification to Vercel api/contact if available
        fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            full_name: formData.fullName.trim(),
            email: formData.email.trim(),
            phone: formData.phone.trim(),
            organization: formData.organization.trim(),
            service_category: formData.serviceCategory,
            subject: formData.subject.trim(),
            description: formData.description.trim(),
            budget: formData.budget.trim(),
            timeline: formData.timeline.trim(),
            privacy_consent: formData.privacyConsent,
          }),
        }).catch(() => {
          // Graceful fallback
        });
      } else {
        setErrorMsg(res.error || 'Une erreur est survenue lors de l\'envoi. Veuillez réessayer.');
      }
    } catch {
      setErrorMsg('Une erreur inattendue est survenue. Veuillez vérifier votre connexion.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyRef = () => {
    if (successRef) {
      navigator.clipboard.writeText(successRef);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  return (
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-[#050811]">
      <div className="max-w-4xl mx-auto space-y-12">

        <BackButton to="/" label="Retour à l'accueil" />

        {/* Header */}
        <div className="text-center space-y-4">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-md bg-[#0A0F1D] border border-white/10 text-xs font-mono text-brand-blue uppercase font-bold">
            <span>Démarrer un Projet</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight font-display">
            Contact & Consultation Technique
          </h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Partagez les contours de vos ambitions numériques. Chaque demande est traitée avec la plus stricte confidentialité professionnelle.
          </p>
        </div>

        {/* Success Confirmation Modal / Card */}
        {successRef ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-[#0A0F1D] border border-brand-blue text-center space-y-6">
            <div className="w-16 h-16 rounded-full bg-brand-blue text-white flex items-center justify-center mx-auto">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
              Demande enregistrée avec succès
            </h2>

            <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed">
              Votre dossier a été transmis à nos équipes d&apos;ingénierie et de conseil. Un accusé de réception vous est attribué ci-dessous.
            </p>

            {/* Reference Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-[#050811] border border-white/10 max-w-md mx-auto space-y-2">
              <span className="text-xs font-mono text-slate-400 uppercase tracking-widest block font-bold">
                Numéro de référence officiel
              </span>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl font-mono font-bold text-brand-blue tracking-wider">
                  {successRef}
                </span>
                <button
                  type="button"
                  onClick={handleCopyRef}
                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors"
                  title="Copier la référence"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] text-slate-400">
                Conservez ce numéro pour tout suivi ultérieur de votre demande.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <button
                type="button"
                onClick={() => {
                  setSuccessRef(null);
                  setFormData({
                    fullName: '',
                    email: '',
                    phone: '',
                    organization: '',
                    serviceCategory: 'web_development',
                    subject: '',
                    description: '',
                    budget: '',
                    timeline: '',
                    privacyConsent: false,
                    honeypot: '',
                  });
                }}
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-white/5 border border-white/10"
              >
                Soumettre une autre demande
              </button>
              <Link
                to="/"
                className="px-6 py-2.5 rounded-xl text-xs font-semibold text-white bg-brand-blue hover:bg-brand-blue-hover"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        ) : (
          /* The Contact Form */
          <form
            onSubmit={handleSubmit}
            className="p-6 sm:p-10 rounded-3xl bg-[#0A0F1D] border border-white/10 space-y-8"
          >
            {/* Honeypot hidden input for spam bots */}
            <input
              type="text"
              name="honeypot"
              value={formData.honeypot}
              onChange={(e) => setFormData({ ...formData, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            {errorMsg && (
              <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-xs sm:text-sm text-red-300 flex items-center space-x-2">
                <AlertCircle className="w-4 h-4 flex-shrink-0" />
                <span>{errorMsg}</span>
              </div>
            )}

            {/* Section 1: Informations Personnelles & Professionnelles */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-brand-blue font-bold flex items-center space-x-2">
                <Lock className="w-3.5 h-3.5" />
                <span>1. Vos Coordonnées Professionnelles</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Nom complet <span className="text-brand-blue font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Ex: Ibrahima Diallo"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Adresse e-mail professionnelle <span className="text-brand-blue font-bold">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Ex: i.diallo@entreprise.com"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Numéro de téléphone <span className="text-slate-500 font-normal">(Facultatif)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+221 ..."
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Organisation / Entreprise <span className="text-slate-500 font-normal">(Facultatif)</span>
                  </label>
                  <input
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Ex: Société / Cabinet / Institution"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  />
                </div>
              </div>
            </div>

            {/* Section 2: Objet & Type de Service */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-brand-blue font-bold flex items-center space-x-2">
                <FileText className="w-3.5 h-3.5" />
                <span>2. Nature de Votre Besoin</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Domaine d&apos;intervention <span className="text-brand-blue font-bold">*</span>
                  </label>
                  <select
                    value={formData.serviceCategory}
                    onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value as ServiceCategory })}
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-white/10 text-white text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  >
                    <option value="web_development">Développement web</option>
                    <option value="mobile_development">Application mobile</option>
                    <option value="legaltech">Solutions LegalTech</option>
                    <option value="cybersecurity">Cybersécurité & Résilience</option>
                    <option value="security_audit">Audit de sécurité (Autorisé)</option>
                    <option value="digital_consulting">Conseil technologique</option>
                    <option value="partnership">Partenariat institutionnel</option>
                    <option value="other">Autre demande spécifique</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Objet synthétique de la demande <span className="text-brand-blue font-bold">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="Ex: Déploiement portail dématérialisation / Audit"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-300 mb-1.5">
                  Description détaillée du besoin <span className="text-brand-blue font-bold">*</span>
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  placeholder="Décrivez les objectifs, le contexte technique ou administratif, ainsi que les contraintes éventuelles..."
                  className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                />
              </div>
            </div>

            {/* Section 3: Cadre Opérationnel Facultatif */}
            <div className="space-y-4">
              <h3 className="text-sm font-mono uppercase tracking-wider text-brand-blue font-bold flex items-center space-x-2">
                <Clock className="w-3.5 h-3.5" />
                <span>3. Modalités Opérationnelles (Facultatif)</span>
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Budget indicatif envisagé
                  </label>
                  <input
                    type="text"
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    placeholder="Ex: Cadré / À définir / Enveloppe dédiée"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1.5">
                    Délai ou échéance souhaitée
                  </label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="Ex: Immédiat / 3 à 6 mois"
                    className="w-full px-4 py-2.5 rounded-xl bg-[#050811] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-brand-blue focus:ring-1 focus:ring-brand-blue"
                  />
                </div>
              </div>
            </div>

            {/* Privacy Consent Checkbox */}
            <div className="pt-2">
              <label className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  required
                  checked={formData.privacyConsent}
                  onChange={(e) => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-white/20 bg-[#050811] text-brand-blue focus:ring-brand-blue"
                />
                <span className="text-xs text-slate-300 leading-relaxed">
                  J&apos;accepte que les informations saisies soient traitées par SDBSNX dans le cadre de l&apos;instruction technique de ma demande, conformément à la{' '}
                  <Link to="/politique-confidentialite" className="text-brand-blue font-semibold hover:underline">
                    Politique de Confidentialité
                  </Link>{' '}
                  et à la législation applicable (Loi n° 2008-12).
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center space-x-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-brand-blue" />
                <span>Transmission chiffrée et numéro de suivi officiel</span>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-brand-blue hover:bg-brand-blue-hover disabled:opacity-50 transition-colors flex items-center justify-center space-x-2 text-sm"
              >
                {loading ? (
                  <span>Enregistrement en cours...</span>
                ) : (
                  <>
                    <span>Envoyer la demande</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
};
