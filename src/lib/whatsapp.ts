/**
 * SDBSNX WhatsApp Official Integration Helper
 * Numéro officiel : +221 76 624 24 58 (format international : 221766242458)
 */

export const WHATSAPP_CONFIG = {
  rawNumber: (import.meta.env.VITE_WHATSAPP_NUMBER as string | undefined) || '221766242458',
  displayNumber: '+221 76 624 24 58',
  defaultMessage: 'Bonjour SDBSNX, je souhaite échanger au sujet d\'un projet technologique.',
};

/**
 * Génère le lien wa.me sécurisé avec un message pré-rempli optionnel
 */
export function getWhatsAppUrl(customMessage?: string): string {
  const number = WHATSAPP_CONFIG.rawNumber.replace(/[^0-9]/g, '');
  const text = encodeURIComponent(customMessage || WHATSAPP_CONFIG.defaultMessage);
  return `https://wa.me/${number}?text=${text}`;
}
