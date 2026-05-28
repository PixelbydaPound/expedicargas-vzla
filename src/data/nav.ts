type Translate = (es: string, en: string) => string

export function getNavItems(t: Translate) {
  return [
    { label: t('Inicio', 'Home'), href: '/' },
    { label: t('La empresa', 'The Company'), href: '/la-empresa' },
    {
      label: t('Servicios', 'Services'),
      href: '#',
      children: [
        { label: 'Outsourcing', href: '/servicios/outsourcing-de-asesorias' },
        { label: t('Cargas marítimas', 'Maritime Cargo'), href: '/servicios/cargas-maritimas' },
        { label: t('Cargas aéreas', 'Air Cargo'), href: '/servicios/cargas-aereas' },
      ],
    },
    { label: t('Contacto', 'Contact'), href: '/contacto' },
  ]
}
