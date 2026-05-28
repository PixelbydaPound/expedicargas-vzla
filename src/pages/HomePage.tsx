import { Link } from 'react-router-dom'
import { Award, KeyRound, Wallet } from 'lucide-react'
import { CircleCounters } from '@/components/CircleCounters'
import { HeroSlider } from '@/components/HeroSlider'
import { useLanguage } from '@/contexts/LanguageContext'

export function HomePage() {
  const { t } = useLanguage()

  return (
    <>
      <HeroSlider />

      <section className="section">
        <div className="container blurb-grid">
          <div className="blurb-card">
            <div className="blurb-icon flex justify-center">
              <KeyRound size={64} strokeWidth={1.5} />
            </div>
            <h4>{t('La llave de su negocio', 'The key to your business')}</h4>
            <p>
              {t(
                'Le ofrecemos servicios de tramitación aduanal para su carga ante el SENIAT.',
                'We offer customs clearance services for your cargo before SENIAT.',
              )}
            </p>
          </div>
          <div className="blurb-card">
            <div className="blurb-icon flex justify-center">
              <Wallet size={64} strokeWidth={1.5} />
            </div>
            <h4>{t('Excelentes precios', 'Excellent prices')}</h4>
            <p>
              {t(
                'Somos una empresa competitiva y contamos con los mejores precios.',
                'We are a competitive company with the best prices.',
              )}
            </p>
          </div>
          <div className="blurb-card">
            <div className="blurb-icon flex justify-center">
              <Award size={64} strokeWidth={1.5} />
            </div>
            <h4>{t('Alto profesionalismo', 'High professionalism')}</h4>
            <p>
              {t(
                'En Expedicargas de Venezuela estamos comprometidos con nuestros clientes.',
                'At Expedicargas de Venezuela we are committed to our clients.',
              )}
            </p>
          </div>
        </div>
      </section>

      <section
        className="section-blur outsourcing-banner"
        style={{ backgroundImage: "url('/images/Fondo-AZ-Blur-01.jpg')" }}
      >
        <div className="container">
          <h1>{t('Outsourcing de asesorías', 'Advisory outsourcing')}</h1>
          <p>
            {t(
              'Brindamos asesorías logísticas de alto nivel profesional',
              'We provide high-level professional logistics consulting',
            )}
          </p>
          <Link to="/servicios/outsourcing-de-asesorias" className="et-button et-button-light">
            {t('Ver más...', 'Read more...')}
          </Link>
        </div>
      </section>

      <section className="section prefer-section">
        <div className="container prefer-layout">
          <div className="prefer-content">
            <h2 className="section-title text-center">
              {t('Sepa porque nos prefieren', 'See why they prefer us')}
            </h2>
            <CircleCounters />
          </div>
          <div className="prefer-image-wrap">
            <img
              src="/images/business-man.png"
              alt={t('Profesional de logística', 'Logistics professional')}
              className="prefer-image"
            />
          </div>
        </div>
      </section>
    </>
  )
}
