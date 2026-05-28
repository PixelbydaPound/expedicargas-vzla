import { useEffect } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from '@/components/Layout'
import { LanguageProvider, useLanguage } from '@/contexts/LanguageContext'
import { CargasAereasPage } from '@/pages/CargasAereasPage'
import { CargasMaritimasPage } from '@/pages/CargasMaritimasPage'
import { ContactoPage } from '@/pages/ContactoPage'
import { HomePage } from '@/pages/HomePage'
import { LaEmpresaPage } from '@/pages/LaEmpresaPage'
import { OutsourcingPage } from '@/pages/OutsourcingPage'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function DocumentTitle() {
  const { pathname } = useLocation()
  const { language, t } = useLanguage()

  useEffect(() => {
    const titles: Record<string, string> = {
      '/': 'Expedicargas de Venezuela, C.A.',
      '/la-empresa': t('La Empresa | Expedicargas de Venezuela', 'The Company | Expedicargas de Venezuela'),
      '/servicios/outsourcing-de-asesorias': t(
        'Outsourcing | Expedicargas de Venezuela',
        'Outsourcing | Expedicargas de Venezuela',
      ),
      '/servicios/cargas-maritimas': t(
        'Cargas Maritimas | Expedicargas de Venezuela',
        'Maritime Cargo | Expedicargas de Venezuela',
      ),
      '/servicios/cargas-aereas': t(
        'Cargas aéreas | Expedicargas de Venezuela',
        'Air Cargo | Expedicargas de Venezuela',
      ),
      '/contacto': t('Contacto | Expedicargas de Venezuela', 'Contact | Expedicargas de Venezuela'),
    }
    document.title = titles[pathname] ?? 'Expedicargas de Venezuela, C.A.'
  }, [pathname, language, t])

  return null
}

function AppRoutes() {
  return (
    <>
      <ScrollToTop />
      <DocumentTitle />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="la-empresa" element={<LaEmpresaPage />} />
          <Route path="servicios/outsourcing-de-asesorias" element={<OutsourcingPage />} />
          <Route path="servicios/cargas-maritimas" element={<CargasMaritimasPage />} />
          <Route path="servicios/cargas-aereas" element={<CargasAereasPage />} />
          <Route path="contacto" element={<ContactoPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </LanguageProvider>
  )
}
