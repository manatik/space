import { useMemo, useState } from 'react'

export const useDatePicker = () => {
  const weekDayNames = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс']
  const monthNames = ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
  const years = []
  let startYear = new Date().getFullYear()

  const [date] = useState(new Date())
  const [currentDay] = useState(new Date())
  const [selectDay, setSelectDay] = useState(new Date())
  const [year, setYear] = useState(2021)
  const [month, setMonth] = useState(new Date().getMonth())
  const [day, setDay] = useState(new Date().getDate())
  const [dayName, setDayName] = useState(weekDayNames[date.getDay() - 1])

  while (startYear <= 2030) { years.push(startYear++) }

  const createMonthArray = useMemo(() => {
    let i = 0; let j = 0; let week; const out = []
    const yearCreate = year; const monthCreate = month
    let first = new Date(yearCreate, monthCreate, 0).getDay()
    const days = new Date(yearCreate, monthCreate + 1, 0).getDate()
    while (i < days) {
      for (j = 0, week = Array(7); j < 7;) {
        while (j < first) week[j++] = 0
        week[j++] = ++i > days ? 0 : i
        first = 0
      }
      out.push(week)
    }
    return out
  }, [month, year])

  return {
    createMonthArray,
    currentDay,
    day,
    dayName,
    month,
    monthNames,
    selectDay,
    setDay,
    setDayName,
    setMonth,
    setSelectDay,
    setYear,
    weekDayNames,
    year,
    years
  }
}
