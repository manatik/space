// packages
import { useEffect } from 'react'
// hooks
import { useContextProvider } from '../../hooks/context'
import { useHttp } from '../../api/api'
import { useParams } from 'react-router-dom'

export const useExercise = () => {
  const { varLessons: { arraySentence, arrayWords, setArraySentence, setArrayWords } } = useContextProvider()
  const { request } = useHttp()
  const { level, number } = useParams()
  const id = [number, level]

  const getExercise = async () => {
    try {
      const getDataExercise = await request('/api/exercises', 'POST', { id })
      setArraySentence(getDataExercise.sentence)
      setArrayWords(getDataExercise.words)
    } catch (e) {
    }
  }

  useEffect(() => {
    if (arraySentence || arrayWords) {
      getExercise().then()
    }
    // eslint-disable-next-line
  }, [])
  return { arraySentence, arrayWords }
}
