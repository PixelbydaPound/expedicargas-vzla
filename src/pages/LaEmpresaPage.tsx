import { PageHero } from '@/components/PageHero'
import { useLanguage } from '@/contexts/LanguageContext'

export function LaEmpresaPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero title={t('La empresa:', 'The company:')} image="/images/oficina-1920x650px.jpg" />

      <section className="section">
        <div className="container content-block max-w-3xl">
          <p>
            {t(
              'EXPEDICARGAS DE VENEZUELA, C.A. fue formada en el año 1996 y cuenta con una gran experiencia como operadores de logística, consolidación y agenciamiento de cargas aéreas y marítimas. Nuestro equipo esta conformado por personal altamente calificado y con gran experiencia en esta importante area de operaciones. Estamos registrados ante el SENIAT como consolidadores de carga.',
              'EXPEDICARGAS DE VENEZUELA, C.A. was established in 1996 and has extensive experience as logistics operators, consolidators, and agents for air and maritime cargo. Our team is made up of highly qualified personnel with great experience in this important area of operations. We are registered with SENIAT as cargo consolidators.',
            )}
          </p>
          <p>
            {t(
              'Como agentes de carga somos operadores de transporte multimodal, enfocados en coordinar servicios y solucionar los problemas que puedan surgir en el traslado de mercancías a nivel nacional e internacional. Coordinamos operaciones vinculadas al transporte, consolidación, aseguramiento, almacenaje, re-empaque, embalaje y distribución de productos, incluyendo lo relacionado a la materia aduanal.',
              'As freight forwarders we are multimodal transport operators, focused on coordinating services and solving problems that may arise in the transfer of goods nationally and internationally. We coordinate operations related to transport, consolidation, insurance, warehousing, repackaging, packaging and product distribution, including customs matters.',
            )}
          </p>
          <p>
            {t(
              'A nivel nacional operamos en los puertos de La Guaira y Puerto Cabello, así como en los aeropuertos de Maiquetía y Valencia. Nuestra red global de empresas de logística asociada apoyan nuestras operaciones en origen y destino a nivel internacional.',
              'Nationally we operate in the ports of La Guaira and Puerto Cabello, as well as at the Maiquetía and Valencia airports. Our global network of associated logistics companies supports our operations at origin and destination internationally.',
            )}
          </p>
        </div>
      </section>

      <section className="section section-gray">
        <div className="container content-block max-w-3xl">
          <h1>{t('Nuestra filosofía:', 'Our philosophy:')}</h1>
          <p>
            {t(
              'Los valores fundamentales de Expedicargas de Venezuela son la responsabilidad, ética y disciplina en la prestación de nuestros servicios. Nuestro trabajo altamente profesional como agentes de carga y operadores de logística nos permite ofrecer a nuestros clientes excelencia en soluciones logísticas a nivel mundial.',
              'The core values of Expedicargas de Venezuela are responsibility, ethics and discipline in the delivery of our services. Our highly professional work as freight forwarders and logistics operators allows us to offer our clients excellence in logistics solutions worldwide.',
            )}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container content-block max-w-3xl">
          <h1>{t('Misión:', 'Mission:')}</h1>
          <p>
            {t(
              'El propósito fundamental de Expedicargas de Venezuela es ofrecer soluciones logísticas con una gran confiabilidad, costos competitivos y en el tiempo requerido facilitando el éxito de nuestros clientes en sus actividades productivas o personales.',
              'The fundamental purpose of Expedicargas de Venezuela is to offer logistics solutions with great reliability, competitive costs and within the required time, facilitating the success of our clients in their productive or personal activities.',
            )}
          </p>

          <h1>{t('Visión:', 'Vision:')}</h1>
          <p>
            {t(
              'Consolidar nuestra posición en la industria del transporte y logística internacional, convirtiéndonos en la opción predilecta de nuestros clientes y alcanzando nuestras expectativas de crecimiento y excelencia.',
              'Consolidate our position in the international transport and logistics industry, becoming the preferred choice of our clients and achieving our expectations of growth and excellence.',
            )}
          </p>
        </div>
      </section>
    </>
  )
}
