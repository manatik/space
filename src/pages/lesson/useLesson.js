// packages
import React, { useCallback, useEffect, useState } from 'react'
// styles
import style from './lesson.module.scss'
// pictures
import star from '../../img/Lesson/Raiting.png'
import zat from '../../img/Lesson/zatichka.png'
import { useContextProvider } from '../../hooks/context'
import { useHttp } from '../../api/api'

const useLesson = () => {
  const { varLessons: { limit, skip } } = useContextProvider()
  const { request } = useHttp()
  const [data, setData] = useState([])
  const id = localStorage.getItem('lvl')

  const stars =
      <>
          <img alt={'StarRating'} className={style.star} src={star}/>
          <img alt={'StarRating'} className={style.star} src={star}/>
          <img alt={'StarRating'} className={style.star} src={star}/>
      </>

  const getLessons = useCallback(async () => {
    try {
      const getDataUser = await request('/api/lessons', 'POST', { id, limit, skip })
      setData(getDataUser)
    } catch (e) {
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (data) {
      getLessons().then()
    }
    // eslint-disable-next-line
  }, [])

  const objectLesson = [
    {
      _id: 1,
      imgLesson: zat,
      number: 1,
      stars: stars,
      title: 'Жожоба жумайсынба'
    },
    {
      _id: 2,
      imgLesson: zat,
      number: 2,
      stars: stars,
      title: 'Жожоба жумайсынба'
    },
    {
      _id: 3,
      imgLesson: zat,
      number: 3,
      stars: stars,
      title: 'Жожоба жумайсынба'
    }, {
      _id: 4,
      imgLesson: zat,
      number: 4,
      stars: stars,
      title: 'Жожоба жумайсынба'
    }
  ]

  return { data, objectLesson }
}
export default useLesson
