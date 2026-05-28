import { sendContactEmail } from './_lib/resend.js'

type VercelRequest = {
  method?: string
  body?: unknown
}

type VercelResponse = {
  status: (code: number) => VercelResponse
  setHeader: (name: string, value: string) => VercelResponse
  end: (body?: string) => void
}

function json(res: VercelResponse, status: number, body: Record<string, unknown>) {
  res.status(status).setHeader('Content-Type', 'application/json').end(JSON.stringify(body))
}

function parseBody(body: unknown) {
  if (!body) return {}
  if (typeof body === 'string') {
    try {
      return JSON.parse(body) as Record<string, unknown>
    } catch {
      return {}
    }
  }
  if (typeof body === 'object') return body as Record<string, unknown>
  return {}
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    if (req.method !== 'POST') {
      json(res, 405, { error: 'Method not allowed' })
      return
    }

    const body = parseBody(req.body)
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()
    const message = String(body.message || '').trim()
    const captchaAnswer = Number(body.captchaAnswer)

    if (!name || !email || !message) {
      json(res, 400, { error: 'Missing required fields' })
      return
    }

    await sendContactEmail({ name, email, message, captchaAnswer })
    json(res, 200, { status: 'ok' })
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err)
    json(res, 500, { error: message })
  }
}
