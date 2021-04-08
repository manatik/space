// packages
import React, { useCallback, useEffect, useState } from 'react'
// hooks
import { useHttp } from '../../api/api'
import { useParams } from 'react-router-dom'
// styles
import style from './lesson.module.css'
// pictures
const star = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/Lesson%2FRaiting.png?alt=media&token=f2aef50a-f04e-46a4-8577-c783e1d97d24'

export const useLesson = () => {
  const { loading, request } = useHttp()
  const { level } = useParams()
  const [parameters, setParameters] = useState({
    click: 0,
    count: 0,
    limit: 4,
    skip: 0
  })
  const [data, setData] = useState([])
  const id = level
  const stars =
      <>
          <img alt={'StarRating'} className={style.star} src={star}/>
          <img alt={'StarRating'} className={style.star} src={star}/>
          <img alt={'StarRating'} className={style.star} src={star}/>
      </>

  const nextLessons = () => {
    if (parameters.click < parameters.count - 1) {
      setParameters(prev => { return { ...prev, click: parameters.click + 1, skip: parameters.skip + 4 } })
    }
  }

  const prevLessons = () => {
    if (parameters.skip !== 0) {
      setParameters(prev => { return { ...prev, click: parameters.click - 1, skip: parameters.skip - 4 } })
    }
  }

  const getLessons = useCallback(async () => {
    try {
      const getDataLessons = await request('/api/lessons', 'POST', { id, ...parameters })
      setData(getDataLessons.getData)
      setParameters(prev => { return { ...prev, count: getDataLessons.count } })
    } catch (e) {
    }
    // eslint-disable-next-line
  }, [{ ...parameters }])

  useEffect(() => {
    getLessons().then()
    // eslint-disable-next-line
  }, [level, parameters.skip])

  useEffect(() => {
    setParameters(prev => { return { ...prev, click: 0, skip: 0 } })
  }, [level])

  return { data, loading, nextLessons, prevLessons, setData, setParameters, stars }
}
