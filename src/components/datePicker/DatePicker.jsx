import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
import { useDatePicker } from './useDatePicker'
import arrow from '../../assets/next.png'
import styles from './DataPicker.module.css'

const DatePicker = () => {
  const {
    createMonthArray,
    currentDay,
    month,
    monthNames,
    selectDay, setDay,
    setDayName,
    setMonth, setSelectDay,
    setYear, weekDayNames,
    year, years
  } = useDatePicker() || {}

  const handlePrevMonthButtonClick = () => {
    if (year > 2021 || month > 0) {
      if (month <= 0) {
        setYear(year - 1)
        setMonth(11)
      } else { setMonth(month - 1) }
    }
  }

  const handleNextMonthButtonClick = () => {
    if (year < 2030 || month < 11) {
      if (month >= 11) {
        setYear(year + 1)
        setMonth(0)
      } else { setMonth(month + 1) }
    }
  }

  const handleDayClick = (date, day) => {
    setDayName(weekDayNames[day])
    setDay(date)
    setSelectDay(new Date(year, month, date))
  }

  const handleCurrentDayAndSelectDay = (a, b) => {
    if (!a) return false
    return (a.getFullYear() === year &&
            a.getMonth() === month &&
            a.getDate() === b)
  }

  return (
      <>
          <div className={styles.activeShow}>
              <header className={styles.headDates}>
                  <img
                      alt={'arrowLeft'} className={styles.imgPrevArrow} onClick={() => handlePrevMonthButtonClick()}
                      src={arrow}
                  />
                  <select
                      className={styles.dropDown}
                      onChange={(e) => setMonth(parseInt(e.target.value))}
                      value={month}
                  >
                      {_.map(monthNames, (months, index) =>
                          <option key={index} value={index}>{months}</option>
                      )}
                  </select>
                  <select
                      className={styles.dropDown}
                      onChange={(e) => setYear(parseInt(e.target.value))}
                      value={year}
                  >
                      {_.map(years, (year) =>
                          <option key={year} value={year}>{year}</option>
                      )}
                  </select>
                  <img
                      alt={'arrowRight'} className={styles.imgNextArrow} onClick={() => handleNextMonthButtonClick()}
                      src={arrow}
                  />
              </header>
              <table className={styles.days}>
                  <thead>
                      <tr>
                          {_.map(weekDayNames, (wd) =>
                              <th key={wd}>{wd}</th>
                          )}
                      </tr>
                  </thead>
                  <tbody>
                      {_.map(createMonthArray, (daysInMonth, index) =>
                          <tr className={styles.week} key={index}>
                              {_.map(daysInMonth, (days, index) => days
                                ? <td
                                        className=
                                            {cn(styles.day,
                                              handleCurrentDayAndSelectDay(currentDay, days) && styles.today,
                                              handleCurrentDayAndSelectDay(selectDay, days) && styles.selected
                                            )}
                                        key={index}
                                        onClick={() => handleDayClick(days, index)}
                                  >
                                    {days}
                                    {/*eslint-disable*/}
                                </td>
                                : <td key={index}/>
                              )}
                          </tr>
                      )}
                  </tbody>
              </table>
          </div>
      </>
  )
}
export default DatePicker
