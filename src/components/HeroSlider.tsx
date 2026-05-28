import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useLanguage } from '@/contexts/LanguageContext'

export function HeroSlider() {
  const { t } = useLanguage()
  const [active, setActive] = useState(0)

  const slides = [
    {
      title: t('Somos Expedicargas de Venezuela', 'We Are Expedicargas de Venezuela'),
      description: t(
        'Ofrecemos a nuestros clientes un sistema de Outsourcing de logística, para sus operaciones de importación y exportación de mercancías.',
        'We offer our clients a logistics outsourcing system for their import and export operations.',
      ),
      image: '/images/turbina-1920x900px.jpg',
      href: '/la-empresa',
    },
    {
      title: t('Cargas aéreas', 'Air Cargo'),
      description: t(
        'Servicios de consolidados semanales con las mejores tarifas del mercado.',
        'Weekly consolidated services with the best rates on the market.',
      ),
      image: '/images/03-Slide_avion_1920x900px.jpg',
      href: '/servicios/cargas-aereas',
    },
    {
      title: t('Cargas marítimas', 'Maritime Cargo'),
      description: t(
        'Descargas directas en puertos venezolanos a almacenes, con las mejores tarifas y días libres de almacenaje.',
        'Direct unloading at Venezuelan ports to warehouses, with the best rates and free storage days.',
      ),
      image: '/images/barquitos-001.jpg',
      href: '/servicios/cargas-maritimas',
    },
  ]

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, 7000)
    return () => window.clearInterval(timer)
  }, [slides.length])

  const goTo = (index: number) => setActive((index + slides.length) % slides.length)

  return (
    <section className="relative overflow-hidden bg-[#333]">
      <div className="relative min-h-[500px] md:min-h-[600px]">
        {slides.map((slide, index) => (
          <div
            key={slide.href}
            className={`absolute inset-0 transition-opacity duration-700 ${
              index === active ? 'opacity-100' : 'pointer-events-none opacity-0'
            }`}
            style={{
              backgroundImage: `url(${slide.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <div className="absolute inset-0 bg-black/35" />
            <div className="relative flex min-h-[500px] items-center md:min-h-[600px]">
              <div className="container mx-auto px-[10%] text-center text-white">
                <h2 className="mb-4 text-4xl font-light md:text-5xl">
                  <Link to={slide.href} className="hover:underline">
                    {slide.title}
                  </Link>
                </h2>
                <p className="mx-auto mb-6 max-w-2xl text-base text-white/95">{slide.description}</p>
                <Link to={slide.href} className="et-button et-button-light">
                  {t('Ver más...', 'Read more...')}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        aria-label={t('Slide anterior', 'Previous slide')}
        className="absolute left-4 top-1/2 z-10 -translate-y-1/2 text-white opacity-70 transition hover:opacity-100 md:left-6"
        onClick={() => goTo(active - 1)}
      >
        <ChevronLeft size={48} />
      </button>
      <button
        type="button"
        aria-label={t('Slide siguiente', 'Next slide')}
        className="absolute right-4 top-1/2 z-10 -translate-y-1/2 text-white opacity-70 transition hover:opacity-100 md:right-6"
        onClick={() => goTo(active + 1)}
      >
        <ChevronRight size={48} />
      </button>

      <div className="absolute bottom-5 left-0 right-0 z-10 flex justify-center gap-2.5">
        {slides.map((slide, index) => (
          <button
            key={slide.href}
            type="button"
            aria-label={t(`Ir al slide ${index + 1}`, `Go to slide ${index + 1}`)}
            className={`h-1.5 w-1.5 rounded-full transition ${
              index === active ? 'bg-white opacity-100' : 'bg-white/50 opacity-50'
            }`}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </section>
  )
}
