/* eslint-disable */
// packages
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
import _ from 'lodash'
import cn from 'classnames'
// components
import Hamburger from '../../components/hamburger/Hamburger'
import Loader from '../../components/loader/Loader'
// hooks
import { useLesson } from './useLesson'
// styles
import style from './lesson.module.css'
// pictures
const arrow = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/Lesson%2Fnext.png?alt=media&token=f61495ce-8bbb-444d-9010-3fd62d9156fd'
const star = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/Lesson%2Fstar.png?alt=media&token=aa4b06fd-9759-4a8c-b54c-7230872e4b22'

const Lesson = () => {
  const { data, loading, nextLessons, prevLessons, str, parameters } = useLesson()
  const { level } = useParams()

  if (loading || !data || !str || !parameters) {
    return <><Loader/></>
  }
  //console.log(str[5])
  return (
      <>
          <div className={style.main}>
              <Hamburger/>
              <div className={style.lesson}>
                  <img
                      alt="arrow" className={style.prevArrow}
                      onClick={prevLessons}
                      src={arrow}
                  />
                  {_.map(data, (less, index) =>
                      <NavLink className={style.link} key={less.number} to={`/programEng/${level}/exercise/${less.number}`}>
                          <div className={style.backLesson}>
                              <h1 className={style.caption}>
                                  Урок #
                                  {less.number}
                              </h1>
                              <div className={style.star}>
                                  {_.map(str[index + parameters.skip + 1], (tt) =>
                                     <img alt={'StarRating'} className={cn(style.star, tt ? style.starActive : style.star)} src={star}/>
                                  )}
                              </div>

                              <img alt={'huy'} className={style.backImg} src={less.img}/>

                              <h1 className={style.captionTheme}>{less.title}</h1>
                          </div>
                      </NavLink>
                  )}
                  <img
                      alt="arrow" className={style.nextArrow}
                      onClick={nextLessons} src={arrow}
                  />
              </div>
          </div>
      </>
  )
}
export default Lesson
