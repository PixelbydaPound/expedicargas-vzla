import { useLanguage, type Language } from '@/contexts/LanguageContext'

const languages: { code: Language; label: string }[] = [
  { code: 'es', label: 'ES' },
  { code: 'en', label: 'EN' },
]

export function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage()

  return (
    <div
      className="flex items-center gap-1 rounded border border-white/30 bg-white/10 p-0.5"
      role="group"
      aria-label="Language selector"
    >
      {languages.map(({ code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLanguage(code)}
          className={`min-w-[2rem] rounded px-2 py-0.5 text-xs font-semibold transition ${
            language === code ? 'bg-white text-brand-light' : 'text-white hover:bg-white/15'
          }`}
          aria-pressed={language === code}
        >
          {label}
        </button>
      ))}
    </div>
  )
}
