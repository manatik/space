// packages
import React from 'react'
import { NavLink } from 'react-router-dom'
import _ from 'lodash'
// components
import Hamburger from '../../components/hamburger/Hamburger'
// hooks
import useLesson from './useLesson'
// styles
import style from './lesson.module.scss'

const Lesson = () => {
  const { data } = useLesson()
  return (
      <>
          <div className={style.main}>
              <Hamburger/>
              <div className={style.lesson}>
                  {_.map(data, (less) =>
                      <div className={style.backLesson} key={less._id}>
                          <h1 className={style.caption}>
                              Урок #
                              {less.number}
                          </h1>
                          <div className={style.stars}>
                              {less.stars}
                          </div>
                          <NavLink to={'/exercise'}>
                              <img alt={'huy'} className={style.backImg} src={less.imgLesson}/>
                          </NavLink>
                          <h1 className={style.captionTheme}>{less.title}</h1>
                      </div>
                  )}
              </div>
          </div>
      </>
  )
}
export default Lesson
