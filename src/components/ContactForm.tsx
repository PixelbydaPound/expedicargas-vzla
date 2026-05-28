import { FormEvent, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

export function ContactForm() {
  const { t } = useLanguage()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [answer, setAnswer] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault()
    setError('')

    if (Number(answer) !== 16) {
      setError(t('Respuesta incorrecta. Intente de nuevo.', 'Incorrect answer. Please try again.'))
      return
    }

    setSubmitting(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          message,
          captchaAnswer: Number(answer),
        }),
      })

      const data = (await response.json().catch(() => ({}))) as { error?: string }

      if (!response.ok) {
        throw new Error(data.error || t('No se pudo enviar el mensaje.', 'Could not send your message.'))
      }

      setSubmitted(true)
    } catch (err) {
      setError(err instanceof Error ? err.message : t('No se pudo enviar el mensaje.', 'Could not send your message.'))
    } finally {
      setSubmitting(false)
    }
  }

  if (submitted) {
    return (
      <div className="rounded bg-white/10 p-6 text-white">
        <p>
          {t(
            'Gracias por su mensaje. Nos pondremos en contacto pronto.',
            'Thank you for your message. We will contact you soon.',
          )}
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="nombre" className="mb-1 block text-white">
          {t('Nombre', 'Name')}
        </label>
        <input
          id="nombre"
          type="text"
          required
          value={name}
          onChange={(event) => setName(event.target.value)}
          className="w-full border border-white/30 bg-white/10 px-3 py-2 text-white outline-none focus:border-white"
        />
      </div>
      <div>
        <label htmlFor="correo" className="mb-1 block text-white">
          {t('Correo electrónico', 'Email')}
        </label>
        <input
          id="correo"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="w-full border border-white/30 bg-white/10 px-3 py-2 text-white outline-none focus:border-white"
        />
      </div>
      <div>
        <label htmlFor="mensaje" className="mb-1 block text-white">
          {t('Mensaje', 'Message')}
        </label>
        <textarea
          id="mensaje"
          required
          rows={6}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          className="w-full border border-white/30 bg-white/10 px-3 py-2 text-white outline-none focus:border-white"
        />
      </div>
      <div>
        <label htmlFor="captcha" className="mb-1 block text-white">
          12 + 4 =
        </label>
        <input
          id="captcha"
          type="number"
          required
          value={answer}
          onChange={(event) => setAnswer(event.target.value)}
          className="w-full max-w-[120px] border border-white/30 bg-white/10 px-3 py-2 text-white outline-none focus:border-white"
        />
      </div>
      {error ? <p className="text-sm text-red-200">{error}</p> : null}
      <button type="submit" className="et-button et-button-light" disabled={submitting}>
        {submitting ? t('Enviando...', 'Sending...') : t('Enviar', 'Send')}
      </button>
    </form>
  )
}
