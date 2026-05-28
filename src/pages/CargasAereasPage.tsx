import { CalendarDays, Globe2, Plane } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import { useLanguage } from '@/contexts/LanguageContext'

export function CargasAereasPage() {
  const { t } = useLanguage()

  const intro = t(
    'Somos profesionales en la materia de exportación e importación de cualquier tipo de mercancía.',
    'We are professionals in exporting and importing all types of goods.',
  )

  const blurbs = [
    {
      icon: Plane,
      title: t('Cargas Aéreas', 'Air Cargo'),
      description: t(
        'Cargas desde Miami hasta aeropuertos de Maiquetía y Valencia.',
        'Cargo from Miami to Maiquetía and Valencia airports.',
      ),
    },
    {
      icon: CalendarDays,
      title: t('Servicios semanales', 'Weekly services'),
      description: t('Servicios de consolidados semanales.', 'Weekly consolidated services.'),
    },
    {
      icon: Globe2,
      title: 'FCL',
      description: t(
        'Servicios de recolecta y carga desde Europa, Asia, Sur América y Estados Unidos.',
        'Pickup and loading services from Europe, Asia, South America and the United States.',
      ),
    },
  ]

  return (
    <>
      <PageHero
        centered
        fullscreen
        title={t('Cargas aéreas', 'Air cargo')}
        subtitle={intro}
        image="/images/N_aviones_1920x1280.jpg"
      />

      <section className="section section-inner-shadow">
        <div className="container blurb-grid cargo-blurbs">
          {blurbs.map((item) => (
            <div key={item.title} className="blurb-card">
              <div className="blurb-icon flex justify-center">
                <item.icon size={64} strokeWidth={1.5} className="text-brand" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="section cargo-cta-parallax"
        style={{ backgroundImage: "url('/images/turbina-02-1920x1280.jpg')" }}
      >
        <div className="container">
          <div className="cargo-cta cargo-cta-overlay">
            <h2>{t('No espere más', 'Do not wait any longer')}</h2>
            <p>
              {t(
                'Compruebe la excelencia en calidad de atención y servicio.',
                'Experience excellence in quality of care and service.',
              )}
            </p>
            <Link to="/contacto" className="et-button et-button-light cargo-cta-button">
              {t('Contacto', 'Contact')}
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container cargo-feature-row">
          <div className="cargo-feature-image cargo-feature-image-shadow">
            <img src="/images/aviones-001.jpg" alt={t('Aviones de carga', 'Cargo aircraft')} />
          </div>
          <div className="cargo-feature-textbox cargo-feature-textbox-light content-block">
            <h1>{t('Aéreo', 'Air')}</h1>
            <p>
              {t(
                'Traslado a almacenes relacionados con las mejores tarifas y días libres de almacenajes.',
                'Transfer to warehouses with the best rates and free storage days.',
              )}
            </p>
            <p>
              {t(
                'Servicio de almacén In-bond para sus cargas aéreas.',
                'In-bond warehouse service for your air cargo.',
              )}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
