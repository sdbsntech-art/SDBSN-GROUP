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
  FileText,
  MessageCircle,
  ArrowUpRight
} from 'lucide-react';
import { submitContactToWeb3Forms } from '../lib/web3forms';
import { generateReferenceNumber } from '../lib/utils';
import { WHATSAPP_CONFIG, getWhatsAppUrl } from '../lib/whatsapp';
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
    honeypot: '',
  });

  const [loading, setLoading] = useState(false);
  const [successRef, setSuccessRef] = useState<string | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Anti-spam honeypot verification
    if (formData.honeypot) {
      console.warn('Spam detection: honeypot field filled.');
      setSuccessRef('SDB-REF-SIMULATED');
      return;
    }

    if (!formData.privacyConsent) {
      setErrorMsg('Veuillez accepter le traitement confidentiel de vos données.');
      return;
    }

    setLoading(true);
    setErrorMsg(null);

    const refNumber = generateReferenceNumber();

    try {
      const res = await submitContactToWeb3Forms({
        reference_number: refNumber,
        full_name: formData.fullName.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        organization: formData.organization.trim() || undefined,
        service_category: formData.serviceCategory,
        subject: formData.subject.trim(),
        description: formData.description.trim(),
        budget: formData.budget.trim() || undefined,
        timeline: formData.timeline.trim() || undefined,
        privacy_consent: formData.privacyConsent,
      });

      if (res.success) {
        setSuccessRef(res.referenceNumber);
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
    <div className="py-12 sm:py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 text-[#0B1B3D]">
      <div className="max-w-4xl mx-auto space-y-10">

        <BackButton to="/" label="Retour à l'accueil" />

        {/* Header */}
        <div className="text-center space-y-3">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-mono text-[#059669] uppercase font-bold">
            <span>Démarrer un Projet</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-[#0B1B3D] tracking-tight font-display">
            Contact & Consultation Technique
          </h1>
          <p className="text-slate-600 max-w-xl mx-auto text-sm sm:text-base leading-relaxed">
            Partagez les contours de vos ambitions numériques. Chaque demande est traitée avec la plus stricte confidentialité professionnelle.
          </p>
        </div>

        {/* Success Confirmation Modal / Card */}
        {successRef ? (
          <div className="p-8 sm:p-12 rounded-3xl bg-white border border-slate-200 text-center space-y-6 shadow-xl">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#059669] flex items-center justify-center mx-auto shadow-xs">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0B1B3D] font-display">
              Demande enregistrée avec succès
            </h2>

            <p className="text-sm text-slate-600 max-w-lg mx-auto leading-relaxed">
              Votre dossier a été transmis à nos équipes d&apos;ingénierie et de conseil. Un accusé de réception officiel vous est attribué ci-dessous.
            </p>

            {/* Reference Box */}
            <div className="p-5 sm:p-6 rounded-2xl bg-slate-50 border border-slate-200 max-w-md mx-auto space-y-2">
              <span className="text-xs font-mono text-slate-500 uppercase tracking-widest block font-bold">
                Numéro de référence officiel
              </span>
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl font-mono font-bold text-[#10B981] tracking-wider">
                  {successRef}
                </span>
                <button
                  type="button"
                  onClick={handleCopyRef}
                  className="p-2 rounded-xl bg-white hover:bg-slate-100 text-slate-700 transition-colors border border-slate-200 shadow-xs"
                  title="Copier la référence"
                >
                  {copied ? <Check className="w-4 h-4 text-[#10B981]" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>
              <p className="text-[11px] text-slate-500">
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
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200 border border-slate-300 transition-colors"
              >
                Soumettre une autre demande
              </button>
              <Link
                to="/"
                className="px-6 py-2.5 rounded-xl text-xs font-bold text-white bg-[#10B981] hover:bg-[#059669] shadow-sm transition-colors"
              >
                Retour à l&apos;accueil
              </Link>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* Direct WhatsApp Consultation Banner (Force-N Clean Style) */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
              <div className="flex items-center space-x-3.5">
                <div className="w-11 h-11 rounded-xl bg-emerald-100 border border-emerald-200 flex items-center justify-center text-[#059669] flex-shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-[#0B1B3D] font-display">
                      Ligne directe WhatsApp SDBSNX
                    </h3>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-emerald-100 text-[#047857]">
                      En ligne
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-0.5">
                    Échangez immédiatement avec notre équipe au <span className="text-[#0B1B3D] font-mono font-bold">{WHATSAPP_CONFIG.displayNumber}</span>
                  </p>
                </div>
              </div>

              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl font-bold text-xs text-white bg-[#10B981] hover:bg-[#059669] transition-all flex items-center justify-center gap-2 shadow-sm flex-shrink-0"
              >
                <span>Démarrer la discussion</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* The Contact Form */}
            <form
              onSubmit={handleSubmit}
              className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-8"
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
                <div className="p-4 rounded-xl bg-red-50 border border-red-200 text-xs sm:text-sm text-red-700 flex items-center space-x-2">
                  <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Section 1: Informations Personnelles & Professionnelles */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#059669] font-bold flex items-center space-x-2">
                  <Lock className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>1. Vos Coordonnées Professionnelles</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1B3D] mb-1.5">
                      Nom complet <span className="text-[#10B981] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Ex: Ibrahima Diallo"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1B3D] mb-1.5">
                      Adresse e-mail professionnelle <span className="text-[#10B981] font-bold">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Ex: i.diallo@entreprise.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1B3D] mb-1.5">
                      Numéro de téléphone <span className="text-slate-500 font-normal">(Facultatif)</span>
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+221 ..."
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1B3D] mb-1.5">
                      Organisation / Entreprise <span className="text-slate-500 font-normal">(Facultatif)</span>
                    </label>
                    <input
                      type="text"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Ex: Société / Cabinet / Institution"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Section 2: Objet & Type de Service */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#059669] font-bold flex items-center space-x-2">
                  <FileText className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>2. Nature de Votre Besoin</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1B3D] mb-1.5">
                      Domaine d&apos;intervention <span className="text-[#10B981] font-bold">*</span>
                    </label>
                    <select
                      value={formData.serviceCategory}
                      onChange={(e) => setFormData({ ...formData, serviceCategory: e.target.value as ServiceCategory })}
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] text-sm focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors"
                    >
                      <option value="web_development">Développement web & SaaS</option>
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
                    <label className="block text-xs font-semibold text-[#0B1B3D] mb-1.5">
                      Objet synthétique de la demande <span className="text-[#10B981] font-bold">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      placeholder="Ex: Déploiement portail dématérialisation / Audit"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1B3D] mb-1.5">
                    Description détaillée du besoin <span className="text-[#10B981] font-bold">*</span>
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={formData.description}
                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                    placeholder="Décrivez les objectifs, le contexte technique ou administratif, ainsi que les contraintes éventuelles..."
                    className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors"
                  />
                </div>
              </div>

              {/* Section 3: Cadre Opérationnel Facultatif */}
              <div className="space-y-4">
                <h3 className="text-sm font-mono uppercase tracking-wider text-[#059669] font-bold flex items-center space-x-2">
                  <Clock className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>3. Modalités Opérationnelles (Facultatif)</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1B3D] mb-1.5">
                      Budget indicatif envisagé
                    </label>
                    <input
                      type="text"
                      value={formData.budget}
                      onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      placeholder="Ex: Cadré / À définir / Enveloppe dédiée"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1B3D] mb-1.5">
                      Délai ou échéance souhaitée
                    </label>
                    <input
                      type="text"
                      value={formData.timeline}
                      onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      placeholder="Ex: Immédiat / 3 à 6 mois"
                      className="w-full px-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-[#0B1B3D] placeholder-slate-400 text-sm focus:outline-none focus:border-[#10B981] focus:bg-white transition-colors"
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
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-[#10B981] focus:ring-[#10B981]"
                  />
                  <span className="text-xs text-slate-600 leading-relaxed">
                    J&apos;accepte que les informations saisies soient traitées par SDBSNX dans le cadre de l&apos;instruction technique de ma demande, conformément à la{' '}
                    <Link to="/politique-confidentialite" className="text-[#10B981] font-bold hover:underline">
                      Politique de Confidentialité
                    </Link>{' '}
                    et à la législation applicable (Loi n° 2008-12).
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-2 text-xs text-slate-500 font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#10B981]" />
                  <span>Transmission chiffrée et numéro de suivi officiel</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto px-8 py-3.5 rounded-xl font-bold text-white bg-[#10B981] hover:bg-[#059669] disabled:opacity-50 transition-colors shadow-sm flex items-center justify-center space-x-2 text-sm"
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
          </div>
        )}

      </div>
    </div>
  );
};
