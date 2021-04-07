// packages
import React, { useEffect } from 'react'
// hooks
import { useContextProvider } from '../../hooks/context'
import { useHttp } from '../../api/api'
// styles
import style from './lesson.module.css'
import { useParams } from 'react-router-dom'
// pictures
const star = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/Lesson%2FRaiting.png?alt=media&token=f2aef50a-f04e-46a4-8577-c783e1d97d24'

const useLesson = () => {
  const { varLessons: { arrayLessons, limit, setArrayLessons, skip } } = useContextProvider()
  const { request } = useHttp()
  const { level } = useParams()
  const id = level
  const stars =
      <>
          <img alt={'StarRating'} className={style.star} src={star}/>
          <img alt={'StarRating'} className={style.star} src={star}/>
          <img alt={'StarRating'} className={style.star} src={star}/>
      </>

  const getLessons = async () => {
    try {
      const getDataLessons = await request('/api/lessons', 'POST', { id, limit, skip })
      setArrayLessons(getDataLessons)
    } catch (e) {
    }
  }

  useEffect(() => {
    if (arrayLessons) {
      getLessons().then()
    }
    // eslint-disable-next-line
  }, [level])

  return { arrayLessons, stars }
}
export default useLesson
