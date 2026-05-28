import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'

type CounterProps = {
  value: number
  labelEs: string
  labelEn: string
}

function CircleCounter({ value, labelEs, labelEn }: CounterProps) {
  const { t } = useLanguage()
  const [displayValue, setDisplayValue] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const animated = useRef(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const duration = 1500
          const start = performance.now()

          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1)
            setDisplayValue(Math.round(progress * value))
            if (progress < 1) requestAnimationFrame(tick)
          }

          requestAnimationFrame(tick)
        }
      },
      { threshold: 0.4 },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [value])

  const radius = 90
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (displayValue / 100) * circumference

  return (
    <div ref={ref} className="text-center">
      <div className="relative mx-auto mb-5 h-[225px] w-[225px]">
        <svg className="h-full w-full -rotate-90" viewBox="0 0 200 200">
          <circle cx="100" cy="100" r={radius} fill="none" stroke="#eee" strokeWidth="8" />
          <circle
            cx="100"
            cy="100"
            r={radius}
            fill="none"
            stroke="#ff6600"
            strokeWidth="8"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-4xl font-medium text-[#333]">{displayValue}%</span>
        </div>
      </div>
      <h3 className="text-lg font-normal text-[#333]">{t(labelEs, labelEn)}</h3>
    </div>
  )
}

export function CircleCounters() {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      <CircleCounter value={100} labelEs="Clientes satisfechos" labelEn="Satisfied clients" />
      <CircleCounter value={100} labelEs="Servicios completados" labelEn="Completed services" />
    </div>
  )
}
