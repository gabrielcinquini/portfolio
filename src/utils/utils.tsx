import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function capitalizeDate(date: Date) {
  const formattedDate = format(date, 'MMM yyyy', {
    locale: ptBR,
  })

  const capitalizedDate =
    formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1)

  return capitalizedDate
}
