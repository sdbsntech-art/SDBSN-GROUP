import type { ContactSubmission, RequestStatus } from '../types';
import { generateReferenceNumber } from './utils';

export const WEB3FORMS_ACCESS_KEY = 
  import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '709797ef-bfab-4ff0-afae-bcfed2d54a57';

const LOCAL_STORAGE_KEY = 'sdbsnx_submissions_history';

export interface SubmitResult {
  success: boolean;
  referenceNumber: string;
  message?: string;
  error?: string;
}

export async function submitContactToWeb3Forms(data: ContactSubmission): Promise<SubmitResult> {
  const referenceNumber = data.reference_number || generateReferenceNumber();

  try {
    const formData = new FormData();
    formData.append('access_key', WEB3FORMS_ACCESS_KEY);
    formData.append('from_name', 'SDBSNX Digital Platform');
    formData.append('subject', `[SDBSNX] Nouvelle demande - ${data.subject || data.service_category} (${referenceNumber})`);
    
    // Core user contact info
    formData.append('name', data.full_name);
    formData.append('email', data.email);
    formData.append('phone', data.phone || 'Non renseigné');
    formData.append('organization', data.organization || 'Non renseignée');
    formData.append('service_category', data.service_category);
    formData.append('subject_title', data.subject);
    formData.append('description', data.description);
    formData.append('budget', data.budget || 'Non précisé');
    formData.append('timeline', data.timeline || 'Non précisé');
    formData.append('reference_number', referenceNumber);

    // Call Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      // Save submission locally for internal admin console tracking
      const record: ContactSubmission = {
        ...data,
        reference_number: referenceNumber,
        status: 'New',
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };
      saveToLocalStore(record);

      return {
        success: true,
        referenceNumber,
        message: 'Votre demande a été transmise avec succès à nos équipes.',
      };
    } else {
      return {
        success: false,
        referenceNumber,
        error: result.message || 'Une erreur est survenue lors de l\'envoi via Web3Forms.',
      };
    }
  } catch (err: any) {
    console.error('Web3Forms submission exception:', err);
    return {
      success: false,
      referenceNumber,
      error: 'Impossible d\'envoyer le message. Veuillez vérifier votre connexion.',
    };
  }
}

// ---------------------------------------------------------------------------
// Local submission history store (for internal Admin Console)
// ---------------------------------------------------------------------------

export function getLocalSubmissions(): ContactSubmission[] {
  try {
    const raw = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export function saveToLocalStore(item: ContactSubmission): void {
  try {
    const current = getLocalSubmissions();
    const updated = [item, ...current.filter((s) => s.reference_number !== item.reference_number)];
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('Could not save to local submission store:', err);
  }
}

export function updateLocalSubmissionStatus(idOrRef: string, newStatus: RequestStatus): void {
  try {
    const current = getLocalSubmissions();
    const updated = current.map((item) => {
      if (item.id === idOrRef || item.reference_number === idOrRef) {
        return { ...item, status: newStatus, updated_at: new Date().toISOString() };
      }
      return item;
    });
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('Could not update local submission status:', err);
  }
}

export function deleteLocalSubmission(idOrRef: string): void {
  try {
    const current = getLocalSubmissions();
    const updated = current.filter((item) => item.id !== idOrRef && item.reference_number !== idOrRef);
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(updated));
  } catch (err) {
    console.warn('Could not delete local submission:', err);
  }
}

