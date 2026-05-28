type PageHeroProps = {
  title: string
  image: string
  subtitle?: string
  centered?: boolean
  fullscreen?: boolean
  showScroll?: boolean
  cargo?: boolean
}

export function PageHero({
  title,
  image,
  subtitle,
  centered = false,
  fullscreen = false,
  showScroll = false,
  cargo = false,
}: PageHeroProps) {
  return (
    <section
      className={`page-hero${centered ? ' page-hero-centered' : ''}${fullscreen ? ' page-hero-fullscreen' : ''}${cargo ? ' page-hero-cargo' : ''}`}
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="page-hero-content">
        <div className={centered ? 'page-hero-inner page-hero-inner-centered' : 'page-hero-inner'}>
          <h1>{title}</h1>
          {subtitle ? <p className="page-hero-subtitle">{subtitle}</p> : null}
        </div>
      </div>
      {showScroll ? (
        <div className="page-hero-scroll" aria-hidden="true">
          <span className="page-hero-scroll-icon">⌄</span>
        </div>
      ) : null}
    </section>
  )
}
