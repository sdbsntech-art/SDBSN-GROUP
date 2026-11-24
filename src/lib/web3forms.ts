import type { ContactSubmission } from '../types';
import { generateReferenceNumber } from './utils';

export const WEB3FORMS_ACCESS_KEY =
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim() || '';

export interface SubmitResult {
  success: boolean;
  referenceNumber: string;
  message?: string;
  error?: string;
}

export async function submitContactToWeb3Forms(data: ContactSubmission): Promise<SubmitResult> {
  const referenceNumber = data.reference_number || generateReferenceNumber();

  try {
    if (!WEB3FORMS_ACCESS_KEY) {
      return {
        success: false,
        referenceNumber,
        error: 'La configuration du formulaire est indisponible. Veuillez réessayer plus tard ou nous contacter sur WhatsApp.',
      };
    }

    const safeText = (value: string | undefined, maxLength: number): string =>
      (value ?? '').trim().replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, '').slice(0, maxLength);

    if (
      safeText(data.full_name, 100).length < 2 ||
      safeText(data.email, 254).length < 3 ||
      safeText(data.subject, 150).length < 3 ||
      safeText(data.description, 4000).length < 20
    ) {
      return {
        success: false,
        referenceNumber,
        error: 'Les informations transmises sont incomplètes ou invalides.',
      };
    }

    const fullName = safeText(data.full_name, 100);
    const email = safeText(data.email, 254);
    const phone = safeText(data.phone, 30);
    const organization = safeText(data.organization, 150);
    const subject = safeText(data.subject, 150);
    const description = safeText(data.description, 4000);
    const budget = safeText(data.budget, 100);
    const timeline = safeText(data.timeline, 150);

    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('from_name', 'Alkeb.lab Digital Platform');
    formData.append('subject', `[Alkeb.lab] Nouvelle demande - ${subject || safeText(data.service_category, 100)} (${referenceNumber})`);
    formData.append('name', fullName);
    formData.append('email', email);
    formData.append('phone', phone || 'Non renseigné');
    formData.append('organization', organization || 'Non renseignée');
    formData.append('service_category', safeText(data.service_category, 100));
    formData.append('subject_title', subject);
    formData.append('description', description);
    formData.append('budget', budget || 'Non précisé');
    formData.append('timeline', timeline || 'Non précisé');
    formData.append('reference_number', referenceNumber);

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();

    if (result.success) {
      return {
        success: true,
        referenceNumber,
        message: 'Votre demande a été transmise avec succès à nos équipes.',
      };
    }

    return {
      success: false,
      referenceNumber,
      error: result.message || 'Une erreur est survenue lors de l\'envoi via Web3Forms.',
    };
  } catch (err: any) {
    console.error('Web3Forms submission exception:', err);
    return {
      success: false,
      referenceNumber,
      error: 'Impossible d\'envoyer le message. Veuillez vérifier votre connexion.',
    };
  }
}
