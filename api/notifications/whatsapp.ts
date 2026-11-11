/**
 * SDBSNX WhatsApp Business Cloud API Integration
 * Dispatches automated, discreet alerts to the operational team upon new project submissions.
 * Graceful fallback: If credentials are not set, logs securely without failing the client request.
 */

interface WhatsAppNotificationPayload {
  referenceNumber: string;
  fullName: string;
  organization?: string;
  serviceCategory: string;
  subject: string;
}

export async function sendWhatsAppNotification(payload: WhatsAppNotificationPayload): Promise<{ sent: boolean; reason?: string }> {
  const token = process.env.WHATSAPP_CLOUD_API_TOKEN;
  const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID;
  const recipientNumber = process.env.WHATSAPP_ADMIN_RECIPIENT; // Private internal number, never exposed publicly

  if (!token || !phoneNumberId || !recipientNumber) {
    // Graceful fallback
    return {
      sent: false,
      reason: 'WhatsApp Cloud API credentials not configured in environment variables. Skipped silently.',
    };
  }

  try {
    const textMessage = `📌 *NOUVELLE DEMANDE SDBSNX*\n\n` +
      `*Réf:* ${payload.referenceNumber}\n` +
      `*Client:* ${payload.fullName}${payload.organization ? ` (${payload.organization})` : ''}\n` +
      `*Service:* ${payload.serviceCategory}\n` +
      `*Objet:* ${payload.subject}\n\n` +
      `Vérifiez l'espace administrateur pour le traitement sécurisé.`;

    const response = await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        messaging_product: 'whatsapp',
        to: recipientNumber,
        type: 'text',
        text: { preview_url: false, body: textMessage },
      }),
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.warn('WhatsApp API warning response:', errorData);
      return { sent: false, reason: errorData };
    }

    return { sent: true };
  } catch (error: any) {
    console.error('WhatsApp API dispatch failure:', error.message);
    return { sent: false, reason: error.message };
  }
}

