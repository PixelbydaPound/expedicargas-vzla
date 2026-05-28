import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

export type Language = 'es' | 'en'

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (es: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

function getInitialLanguage(): Language {
  const saved = localStorage.getItem('expedicargas-lang')
  return saved === 'en' ? 'en' : 'es'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(getInitialLanguage)

  const setLanguage = (lang: Language) => {
    setLanguageState(lang)
    localStorage.setItem('expedicargas-lang', lang)
  }

  useEffect(() => {
    document.documentElement.lang = language
  }, [language])

  const t = (es: string, en: string) => (language === 'es' ? es : en)

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
