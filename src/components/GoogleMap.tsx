import { siteConfig } from '@/data/site'

export function GoogleMap() {
  const { lat, lng, zoom, title } = siteConfig.map
  const apiKey = import.meta.env.VITE_GOOGLE_MAPS_API_KEY

  const embedUrl = apiKey
    ? `https://www.google.com/maps/embed/v1/place?key=${apiKey}&q=${lat},${lng}&zoom=${zoom}`
    : `https://maps.google.com/maps?q=${lat},${lng}&z=${zoom}&output=embed`

  return (
    <iframe
      title={title}
      src={embedUrl}
      className="contact-map"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      allowFullScreen
    />
  )
}
