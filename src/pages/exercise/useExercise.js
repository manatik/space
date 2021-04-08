// packages
import { useParams } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
// hooks
import { useHttp } from '../../api/api'

export const useExercise = () => {
  const { loading, request } = useHttp()
  const { level, number } = useParams()

  const [arrWords, setArrWords] = useState([])
  const [arrSentence, setArrSentence] = useState([])
  const [index, setIndex] = useState(0)
  const getExercises = useCallback(async () => {
    try {
      const exercise = await request('/api/exercises', 'POST', { level, number })
      setArrWords(exercise.words)
      setArrSentence(exercise.sentence)
    } catch (e) {}
    // eslint-disable-next-line
  }, [{ arrSentence, arrWords }])

  useEffect(() => {
    getExercises().then()
    // eslint-disable-next-line
  }, [number, level])

  return { arrSentence, arrWords, index, loading, setIndex }
}
