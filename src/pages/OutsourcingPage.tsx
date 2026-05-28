import { CircleCheck } from 'lucide-react'
import { PageHero } from '@/components/PageHero'
import { useLanguage } from '@/contexts/LanguageContext'

export function OutsourcingPage() {
  const { t } = useLanguage()

  const blurbs = [
    {
      title: t('Presencia en sitio', 'On-site presence'),
      description: t(
        'Representamos a su empresa a través de los agentes aduanales en todas las operaciones aduaneras.',
        'We represent your company through customs brokers in all customs operations.',
      ),
    },
    {
      title: t('Efectividad y eficiencia', 'Effectiveness and efficiency'),
      description: t(
        'Nuestra meta es efectuar seguimiento diario y cumplir con los objetivos de entrega de embarque.',
        'Our goal is to perform daily follow-up and meet shipment delivery objectives.',
      ),
    },
    {
      title: t('Importación y exportación', 'Import and export'),
      description: t(
        'Le entregamos recibo de información del forwarder o empresa según mercancía en tránsito o en aduana.',
        'We provide information receipts from the forwarder or company depending on goods in transit or at customs.',
      ),
    },
  ]

  const advantages = [
    {
      title: t('Instrucciones precisas', 'Precise instructions'),
      description: t(
        'Instruimos al agente aduanal sobre códigos arancelarios.',
        'We instruct the customs broker on tariff codes.',
      ),
    },
    {
      title: t('Tramitación', 'Processing'),
      description: t(
        'Obtenga la clasificación arancelaria ante la aduana respectiva.',
        'Obtain tariff classification before the respective customs office.',
      ),
    },
    {
      title: t('Certificados', 'Certificates'),
      description: t(
        'Llevamos el control de certificados de saldos de ATPA.',
        'We manage ATPA balance certificates.',
      ),
    },
    {
      title: t('Culminación del proceso', 'Process completion'),
      description: t(
        'Tramitamos ante los organismos competentes la obtención de permisos relacionados con los objetos de implementación de nuestros clientes.',
        'We process permits related to our clients implementation projects with the competent authorities.',
      ),
    },
    {
      title: t('Embarque y desembarque', 'Loading and unloading'),
      description: t(
        'Controlamos, coordinamos y dirigimos el proceso de embarque desde y hacia cualquier parte del mundo.',
        'We control, coordinate and manage the shipping process to and from anywhere in the world.',
      ),
    },
  ]

  return (
    <>
      <PageHero
        centered
        title={t('Outsourcing de logística en aduana', 'Customs logistics outsourcing')}
        subtitle={t(
          'Expedicargas de Venezuela tiene para usted una gama de servicios especializados que le facilitaran los tramites aduanales.',
          'Expedicargas de Venezuela offers you a range of specialized services that will facilitate your customs procedures.',
        )}
        image="/images/N_containers.jpg"
      />

      <section className="section">
        <div className="container blurb-grid">
          {blurbs.map((item) => (
            <div key={item.title} className="blurb-card">
              <div className="blurb-icon flex justify-center">
                <img src="/images/check-in.png" alt="" width={70} height={70} />
              </div>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section section-orange">
        <div className="outsourcing-operations-wrap">
          <div className="outsourcing-operations-row">
            <div className="content-block outsourcing-operations-content">
              <h1>{t('Seguimiento en operaciones', 'Operations tracking')}</h1>
              <p>
                {t(
                  'Mantenemos reportes diarios de información del forwarder o empresa según mercancía en tránsito o en aduana.',
                  'We maintain daily information reports from the forwarder or company depending on goods in transit or at customs.',
                )}
              </p>
            </div>
            <div className="outsourcing-operations-image">
              <img
                src="/images/supervisora-alfa.png"
                alt={t('Supervisora', 'Supervisor')}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-professionals">
        <div className="container professionals-layout">
          <div className="content-block text-center professionals-content">
            <h1 className="professionals-title">{t('¡Somos profesionales!', 'We are professionals!')}</h1>
            <p>
              {t(
                'Correduría de agentes aduanales o brokerage, a través de atención personalizada asignando el agente aduanal más competitivo y eficaz para cada operación específica, o bien estableciendo una asociación estratégica con el agente aduanal para cada tipo de cliente que mejor se adapte a sus requerimientos de importación o exportación.',
                'Customs brokerage through personalized service, assigning the most competitive and effective customs broker for each specific operation, or establishing a strategic partnership with the customs broker that best suits each type of clients import or export requirements.',
              )}
            </p>
          </div>
          <div className="professionals-image-wrap">
            <img
              src="/images/business-people.png"
              alt={t('Equipo profesional', 'Professional team')}
              className="professionals-image"
            />
          </div>
        </div>
      </section>

      <section className="section section-advantages-dark section-advantages-title">
        <div className="container">
          <h1 className="advantages-title">
            {t('Ventajas de nuestros servicios', 'Advantages of our services')}
          </h1>
        </div>
      </section>

      <section className="section section-advantages-dark section-advantages-body">
        <div className="container outsourcing-advantages-row">
          <div className="advantage-list advantage-list-single">
            {advantages.map((item) => (
              <div key={item.title} className="advantage-item">
                <CircleCheck className="advantage-check" size={30} strokeWidth={1.75} aria-hidden />
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="outsourcing-advantages-image">
            <img
              src="/images/papeles-300x450px.jpg"
              alt={t('Documentos aduanales', 'Customs documents')}
            />
          </div>
        </div>
      </section>
    </>
  )
}
