import { Container, Ship } from 'lucide-react'
import { Link } from 'react-router-dom'
import { PageHero } from '@/components/PageHero'
import { useLanguage } from '@/contexts/LanguageContext'

export function CargasMaritimasPage() {
  const { t } = useLanguage()

  const intro = t(
    'Somos profesionales en la materia de exportación e importación de cualquier tipo de mercancía.',
    'We are professionals in exporting and importing all types of goods.',
  )

  const blurbs = [
    {
      icon: Container,
      title: 'LCL',
      description: t(
        'Carga consolidada con servicio semanal desde Estados Unidos y cualquier parte del mundo de acuerdo a requerimientos del cliente.',
        'Consolidated cargo with weekly service from the United States and anywhere in the world according to client requirements.',
      ),
    },
    {
      icon: Ship,
      title: 'FCL',
      description: t(
        'Tenemos los mejores acuerdos con las principales navieras a través de nuestras filiales en USA, Brasil, Europa y Asia.',
        'We have the best agreements with major shipping lines through our branches in the USA, Brazil, Europe and Asia.',
      ),
    },
  ]

  return (
    <>
      <PageHero
        centered
        fullscreen
        cargo
        showScroll
        title={t('Cargas marítimas', 'Maritime cargo')}
        subtitle={intro}
        image="/images/N_barco_1920x1280.jpg"
      />

      <section className="section section-inner-shadow section-cargo-maritime">
        <div className="container blurb-grid blurb-grid-2 cargo-blurbs">
          {blurbs.map((item) => (
            <div key={item.title} className="blurb-card">
              <div className="blurb-icon cargo-blurb-icon flex justify-center">
                <item.icon size={96} strokeWidth={1} className="text-brand" />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>

        <div className="container cargo-feature-band">
          <div className="cargo-feature-row cargo-feature-row-band">
            <div className="cargo-feature-image">
              <img src="/images/cargo_1920px.jpg" alt={t('Carga marítima', 'Maritime cargo')} />
            </div>
            <div className="cargo-feature-textbox cargo-feature-textbox-maritime content-block">
              <h1>{t('Marítimo', 'Maritime')}</h1>
              <p>
                {t(
                  'Descargas directas en puertos venezolanos a almacenes, con las mejores tarifas y días libres de almacenaje.',
                  'Direct unloading at Venezuelan ports to warehouses, with the best rates and free storage days.',
                )}
              </p>
            </div>
          </div>
        </div>

        <div className="container cargo-cta-wrap">
          <div className="cargo-cta">
            <h2>{t('Solicite nuestros servicios', 'Request our services')}</h2>
            <p>
              {t(
                'No dude en comunicarse con nuestro departamento de atención al cliente. Recibirá la mejor asesoría.',
                'Do not hesitate to contact our customer service department. You will receive the best advice.',
              )}
            </p>
            <Link to="/contacto" className="et-button et-button-light cargo-cta-button">
              {t('Contacto', 'Contact')}
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
