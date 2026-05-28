import { useLanguage } from '@/contexts/LanguageContext'

const WEEKDAYS_ES = ['D', 'L', 'M', 'X', 'J', 'V', 'S']
const WEEKDAYS_EN = ['S', 'M', 'T', 'W', 'T', 'F', 'S']

const MONTH_NAMES_ES = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
]

const MONTH_NAMES_EN = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

function getCalendarDays(year: number, month: number) {
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const cells: Array<number | null> = []

  for (let i = 0; i < firstDay; i += 1) {
    cells.push(null)
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    cells.push(day)
  }

  while (cells.length % 7 !== 0) {
    cells.push(null)
  }

  return cells
}

export function CalendarWidget() {
  const { language, t } = useLanguage()
  const now = new Date()
  const year = now.getFullYear()
  const month = now.getMonth()
  const days = getCalendarDays(year, month)
  const today = now.getDate()
  const weekdays = language === 'es' ? WEEKDAYS_ES : WEEKDAYS_EN
  const monthNames = language === 'es' ? MONTH_NAMES_ES : MONTH_NAMES_EN
  const monthLabel = monthNames[month]

  return (
    <div className="calendar-widget">
      <h4 className="mb-4 text-lg font-normal text-brand-light">{t('Calendario', 'Calendar')}</h4>
      <table className="w-full border-collapse text-sm">
        <caption className="mb-2 text-left font-bold capitalize text-white">
          {monthLabel} {year}
        </caption>
        <thead>
          <tr>
            {weekdays.map((day, index) => (
              <th key={`${day}-${index}`} className="px-1 py-1 font-normal capitalize text-[#9f9f9f]">
                {day}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: days.length / 7 }).map((_, rowIndex) => (
            <tr key={rowIndex}>
              {days.slice(rowIndex * 7, rowIndex * 7 + 7).map((day, cellIndex) => (
                <td
                  key={`${rowIndex}-${cellIndex}`}
                  className={`px-1 py-1 text-center text-[#9f9f9f] ${
                    day === today ? 'font-bold text-white' : ''
                  }`}
                >
                  {day ?? '\u00a0'}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="mt-2 text-xs text-[#9f9f9f]">
        « {language === 'es' ? monthLabel.charAt(0).toUpperCase() + monthLabel.slice(1) : monthLabel}
      </p>
    </div>
  )
}
