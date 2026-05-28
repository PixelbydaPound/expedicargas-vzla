import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Mail, Menu, Phone, X } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'
import { getNavItems } from '@/data/nav'
import { siteConfig } from '@/data/site'
import { LanguageSwitcher } from './LanguageSwitcher'

function NavItem({
  label,
  href,
  children,
  onNavigate,
}: {
  label: string
  href: string
  children?: { label: string; href: string }[]
  onNavigate?: () => void
}) {
  const [open, setOpen] = useState(false)

  if (children) {
    return (
      <li
        className="relative"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          type="button"
          className="flex items-center gap-1 px-4 py-6 text-[#666] transition-colors hover:text-brand-light"
          onClick={() => setOpen((value) => !value)}
        >
          {label}
        </button>
        {open && (
          <ul className="absolute left-0 top-full z-50 min-w-[240px] border-t-[3px] border-brand-light bg-white py-5 shadow-md">
            {children.map((child) => (
              <li key={child.href}>
                <NavLink
                  to={child.href}
                  onClick={onNavigate}
                  className={({ isActive }) =>
                    `block px-5 py-1.5 text-sm text-[#666] transition-opacity hover:opacity-70 ${
                      isActive ? 'text-brand-light' : ''
                    }`
                  }
                >
                  {child.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </li>
    )
  }

  return (
    <li>
      <NavLink
        to={href}
        end={href === '/'}
        onClick={onNavigate}
        className={({ isActive }) =>
          `block px-4 py-6 text-[#666] transition-colors hover:text-brand-light ${
            isActive ? 'text-brand-light' : ''
          }`
        }
      >
        {label}
      </NavLink>
    </li>
  )
}

export function Header() {
  const { t } = useLanguage()
  const navItems = getNavItems(t)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="sticky top-0 z-[99999]">
      <div className="bg-brand-light text-xs font-semibold text-white">
        <div className="container flex items-center justify-between gap-4 py-3">
          <div className="flex flex-wrap items-center gap-4">
            <a href={`tel:${siteConfig.phone.replace(/\D/g, '')}`} className="flex items-center gap-1 hover:opacity-80">
              <Phone size={12} />
              {siteConfig.phone}
            </a>
            <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-1 hover:opacity-80">
              <Mail size={12} />
              {siteConfig.email}
            </a>
          </div>
          <LanguageSwitcher />
        </div>
      </div>

      <div
        className={`bg-white shadow-[0_1px_0_rgba(0,0,0,0.1)] transition-shadow ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="container flex site-header-bar items-center justify-between">
          <Link to="/" className="flex h-full items-center">
            <img
              src={siteConfig.logo}
              alt={siteConfig.name}
              className="site-logo"
              width={217}
              height={53}
            />
          </Link>

          <button
            type="button"
            className="p-2 text-brand-light lg:hidden"
            aria-label={mobileOpen ? t('Cerrar menú', 'Close menu') : t('Abrir menú', 'Open menu')}
            onClick={() => setMobileOpen((value) => !value)}
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <nav className="hidden lg:block">
            <ul className="flex items-center">
              {navItems.map((item) => (
                <NavItem key={item.label} {...item} onNavigate={() => setMobileOpen(false)} />
              ))}
            </ul>
          </nav>
        </div>

        {mobileOpen && (
          <nav className="border-t border-gray-100 bg-white lg:hidden">
            <ul className="container py-4">
              {navItems.map((item) =>
                item.children ? (
                  <li key={item.label} className="py-2">
                    <span className="block px-2 py-1 font-semibold text-[#333]">{item.label}</span>
                    <ul className="pl-4">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <NavLink
                            to={child.href}
                            onClick={() => setMobileOpen(false)}
                            className="block px-2 py-2 text-[#666] hover:text-brand-light"
                          >
                            {child.label}
                          </NavLink>
                        </li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={item.href}>
                    <NavLink
                      to={item.href}
                      end={item.href === '/'}
                      onClick={() => setMobileOpen(false)}
                      className="block px-2 py-2 text-[#666] hover:text-brand-light"
                    >
                      {item.label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
