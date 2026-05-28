const RESEND_API_URL = 'https://api.resend.com/emails'
const DEFAULT_CONTACT_TO = 'evelyngonzalez@expedicargas.com'

export type ContactFormPayload = {
  name: string
  email: string
  message: string
  captchaAnswer: number
}

function requireEnv(name: string): string {
  const value = process.env[name]
  if (!value) throw new Error(`Missing required env var: ${name}`)
  return value
}

function contactInbox(): string {
  return process.env.CONTACT_FORM_TO || DEFAULT_CONTACT_TO
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function contactEmailHtml(data: ContactFormPayload): { subject: string; html: string } {
  const name = escapeHtml(data.name)
  const email = escapeHtml(data.email)
  const message = escapeHtml(data.message).replace(/\n/g, '<br />')

  return {
    subject: `Nuevo mensaje de contacto — ${data.name}`,
    html: `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Arial, sans-serif; color:#111827;">
        <h2 style="margin:0 0 16px;">Nuevo mensaje desde expedicargas.com</h2>
        <table role="presentation" cellpadding="0" cellspacing="0" style="width:100%; max-width:640px; border-collapse:collapse;">
          <tr>
            <td style="padding:8px 10px; border:1px solid #e5e7eb; background:#f9fafb; font-weight:600; width:140px;">Nombre</td>
            <td style="padding:8px 10px; border:1px solid #e5e7eb;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 10px; border:1px solid #e5e7eb; background:#f9fafb; font-weight:600;">Correo</td>
            <td style="padding:8px 10px; border:1px solid #e5e7eb;">${email}</td>
          </tr>
          <tr>
            <td style="padding:8px 10px; border:1px solid #e5e7eb; background:#f9fafb; font-weight:600; vertical-align:top;">Mensaje</td>
            <td style="padding:8px 10px; border:1px solid #e5e7eb;">${message}</td>
          </tr>
        </table>
      </div>
    `,
  }
}

export async function sendContactEmail(data: ContactFormPayload) {
  if (data.captchaAnswer !== 16) {
    throw new Error('Invalid captcha answer')
  }

  const apiKey = requireEnv('RESEND_API_KEY')
  const from = requireEnv('RESEND_FROM')
  const to = contactInbox()
  const { subject, html } = contactEmailHtml(data)

  const response = await fetch(RESEND_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      html,
      reply_to: data.email,
    }),
  })

  if (!response.ok) {
    const text = await response.text().catch(() => '')
    throw new Error(text || `Resend error ${response.status}`)
  }

  return response.json()
}
