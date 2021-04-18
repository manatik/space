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
import ImageLoader from '../../components/imageLoader/ImageLoader'
// pictures
import arrow from '../../assets/next.png'
import star from '../../assets/star.png'
import defaultImage from '../../assets/zatichka.png'

const Lesson = () => {
  const { dataLessons, loading, nextLessons, parameters, prevLessons, str } = useLesson()
  const { level } = useParams()

  if (loading && !dataLessons) {
    return <Loader/>
  }

  return (
      <div className={style.main}>
          <Hamburger/>
          <div className={style.lessonField}>
              <div className={style.lesson}>
                  <img
                      alt="arrow" className={style.prevArrow}
                      onClick={prevLessons}
                      src={arrow}
                  />
                  {_.map(dataLessons, (less, index) =>
                      <NavLink className={style.link} key={less.number} to={`/programEng/${level}/exercise/${less.number}`}>
                          <div className={style.backLesson}>
                              <h1 className={style.caption}>
                                  Урок #
                                  {less.number}
                              </h1>
                              <div className={style.star}>
                                  {_.map(str[index + parameters.skip + 1], (tt, index) =>
                                      <ImageLoader classname={cn(style.star, tt ? style.starActive : style.star)} key={index} src={star}/>
                                    // <img alt={'StarRating'} className={cn(style.star, tt ? style.starActive : style.star)} src={star}/>
                                  )}
                              </div>
                              <img alt={'Картинка урока'} className={style.backImg} src={less.img !== 'Картинка' ? less.img : defaultImage}/>

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
      </div>
  )
}
export default Lesson
