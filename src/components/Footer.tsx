import { Link } from 'react-router-dom'
import { useLanguage } from '@/contexts/LanguageContext'
import { getNavItems } from '@/data/nav'
import { siteConfig } from '@/data/site'
import { CalendarWidget } from './CalendarWidget'

export function Footer() {
  const { t } = useLanguage()
  const navItems = getNavItems(t)

  return (
    <footer>
      <div id="main-footer" className="bg-footer pt-[6%] text-white">
        <div className="container grid gap-10 pb-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <CalendarWidget />
          </div>

          <div>
            <h4 className="mb-5 text-lg font-normal text-brand-light">{t('Menú', 'Menu')}</h4>
            <ul className="space-y-2">
              {navItems.map((item) =>
                item.children ? (
                  item.children.map((child) => (
                    <li
                      key={child.href}
                      className="relative pl-3.5 before:absolute before:left-0 before:top-[9px] before:h-0 before:w-0 before:rounded-sm before:border-[3px] before:border-brand-light"
                    >
                      <Link to={child.href} className="hover:text-white/70">
                        {child.label}
                      </Link>
                    </li>
                  ))
                ) : (
                  <li
                    key={item.href}
                    className="relative pl-3.5 before:absolute before:left-0 before:top-[9px] before:h-0 before:w-0 before:rounded-sm before:border-[3px] before:border-brand-light"
                  >
                    <Link to={item.href} className="hover:text-white/70">
                      {item.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-normal text-brand-light">{t('Dirección', 'Address')}</h4>
            <p className="mb-8">{siteConfig.address}</p>

            <h4 className="mb-5 text-lg font-normal text-brand-light">{t('Correos', 'Emails')}</h4>
            <p>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-white/70">
                {siteConfig.email}
              </a>
            </p>
          </div>

          <div>
            <h4 className="mb-5 text-lg font-normal text-brand-light">{t('Teléfonos', 'Phones')}</h4>
            <ul className="mb-8 space-y-2">
              <li className="relative pl-3.5 before:absolute before:left-0 before:top-[9px] before:h-0 before:w-0 before:rounded-sm before:border-[3px] before:border-brand-light">
                <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="hover:text-white/70">
                  {siteConfig.phone}
                </a>
              </li>
              <li className="relative pl-3.5 before:absolute before:left-0 before:top-[9px] before:h-0 before:w-0 before:rounded-sm before:border-[3px] before:border-brand-light">
                <a
                  href={`tel:${siteConfig.phoneMobile.replace(/\D/g, '')}`}
                  className="hover:text-white/70"
                >
                  {siteConfig.phoneMobile}
                </a>
              </li>
              <li className="relative pl-3.5 before:absolute before:left-0 before:top-[9px] before:h-0 before:w-0 before:rounded-sm before:border-[3px] before:border-brand-light">
                <a href={`tel:${siteConfig.phoneUS.replace(/\D/g, '')}`} className="hover:text-white/70">
                  {siteConfig.phoneUS}
                </a>
              </li>
            </ul>

            <img
              src={siteConfig.footerLogo}
              alt="Logo"
              className="footer-logo h-auto w-full max-w-full"
            />
          </div>
        </div>
      </div>

      <div className="bg-footer-bottom py-4 text-center text-sm text-white/70">
        <div className="container">
          <p>{t('Todos los derechos reservados - 2026', 'All rights reserved - 2026')}</p>
        </div>
      </div>
    </footer>
  )
}
