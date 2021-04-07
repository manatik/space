// packages
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import _ from 'lodash'
// components
import Hamburger from '../../components/hamburger/Hamburger'
// hooks
import useLesson from './useLesson'
// styles
import style from './lesson.module.css'

const Lesson = () => {
  const { arrayLessons, stars } = useLesson()
  const { level } = useParams()
  return (
      <>
          <div className={style.main}>
              <Hamburger/>
              <div className={style.lesson}>
                  {_.map(arrayLessons, (less) =>
                      <NavLink key={less.number} to={`/programEng/${level}/exercise/${less.number}`}>
                          <div className={style.backLesson}>
                              <h1 className={style.caption}>
                                  Урок #
                                  {less.number}
                              </h1>
                              <div className={style.star}>
                                  {stars}
                              </div>

                              <img alt={'huy'} className={style.backImg} src={less.img}/>

                              <h1 className={style.captionTheme}>{less.title}</h1>
                          </div>
                      </NavLink>
                  )}
              </div>
          </div>
      </>
  )
}
export default Lesson
