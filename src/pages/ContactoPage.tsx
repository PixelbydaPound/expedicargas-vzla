import { MapPin } from 'lucide-react'
import { ContactForm } from '@/components/ContactForm'
import { GoogleMap } from '@/components/GoogleMap'
import { PageHero } from '@/components/PageHero'
import { useLanguage } from '@/contexts/LanguageContext'
import { siteConfig } from '@/data/site'

export function ContactoPage() {
  const { t } = useLanguage()

  return (
    <>
      <PageHero title="Expedicargas de Venezuela" image="/images/contacto-001.jpg" />

      <section className="section">
        <div className="container">
          <GoogleMap />
        </div>
      </section>

      <section className="section">
        <div className="container two-col">
          <div>
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 shrink-0 text-brand-light" size={48} strokeWidth={1.5} />
              <div>
                <h4 className="mb-4 text-lg font-medium text-[#333]">{t('Contacto', 'Contact')}</h4>
                <h5 className="mb-4 text-lg text-[#666]">
                  {t('Estamos a una llamada de usted', 'We are just a call away')}
                </h5>

                <h5 className="mb-2 font-semibold text-[#333]">{t('Venezuela:', 'Venezuela:')}</h5>
                <ul className="mb-4 space-y-1">
                  <li>
                    <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="hover:text-brand">
                      {siteConfig.phone}
                    </a>
                  </li>
                  <li>
                    <a
                      href={`tel:${siteConfig.phoneMobile.replace(/\D/g, '')}`}
                      className="hover:text-brand"
                    >
                      {siteConfig.phoneMobile}
                    </a>
                  </li>
                </ul>

                <h5 className="mb-2 font-semibold text-[#333]">
                  {t('Estados Unidos:', 'United States:')}
                </h5>
                <ul>
                  <li>
                    <a href={`tel:${siteConfig.phoneUS.replace(/\D/g, '')}`} className="hover:text-brand">
                      {siteConfig.phoneUS}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="rounded bg-brand-light p-8">
            <h1 className="mb-6 text-3xl font-medium text-white">{t('Formulario', 'Form')}</h1>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
