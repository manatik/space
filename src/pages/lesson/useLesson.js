// packages
import { useCallback, useEffect, useState } from 'react'
// hooks
import { useHttp } from '../../api/api'
import { useParams } from 'react-router-dom'
// styles
import { useContextProvider } from '../../hooks/context'

export const useLesson = () => {
  const { loading, request } = useHttp()
  const { level } = useParams()
  const { data: { dataLessons, setDataLessons } } = useContextProvider()
  const [parameters, setParameters] = useState({
    click: 0,
    count: 0,
    limit: 4,
    skip: 0
  })
  const [str, setStr] = useState({})
  const id = level
  const dataUserFromLS = JSON.parse(localStorage.getItem('userData'))
  const userId = dataUserFromLS.userId

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
      const getDataLessons = await request('/api/lessons', 'POST', { id, ...parameters, userId })
      console.log(getDataLessons)
      setDataLessons(getDataLessons.getData)
      setStr(getDataLessons.str)
      setParameters(prev => { return { ...prev, count: getDataLessons.count } })
    } catch (e) {
    }
    // eslint-disable-next-line
  }, [{ ...parameters, level }])

  useEffect(() => {
    getLessons().then()
    // eslint-disable-next-line
  }, [level, parameters.skip])

  useEffect(() => {
    setParameters(prev => { return { ...prev, click: 0, skip: 0 } })
  }, [level])

  return { dataLessons, loading, nextLessons, parameters, prevLessons, setDataLessons, setParameters, str }
}
