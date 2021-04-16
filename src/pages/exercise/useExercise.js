
import { useParams, useHistory } from 'react-router-dom'
import { useCallback, useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useAuth } from '../../hooks/auth.hook'
import { useContextProvider } from '../../hooks/context'
import { useHttp } from '../../api/api'

export const useExercise = () => {
  const { index: { index, setIndex } } = useContextProvider()
  const { loading, request } = useHttp()
  const { userId } = useAuth()
  const { level, number } = useParams()
  const history = useHistory()

  const [arrWords, setArrWords] = useState([])
  const [arrSentence, setArrSentence] = useState([])
  const [answer, setAnswer] = useState('')

  const handleClickWords = (e) => {
    const value = e.target.outerText
    if (value === arrWords[index].translate[0]) {
      toast.dark('Верно', { autoClose: 1000 })
      setIndex(index + 1)
    } else {
      toast.dark('Неверно', { autoClose: 1000 })
      setIndex(index + 1)
    }
    if (index === (arrWords.length - 1)) {
      progressUser(1, 0).then(() => history.goBack())
      setIndex(0)
    }
  }

  const handleClickSentence = () => {
    if (answer.toLowerCase() === arrSentence[index].sentenceAnswer.toLowerCase()) {
      toast.dark('Верно', { autoClose: 1000 })
      setIndex(index + 1)
      setAnswer('')
    } else {
      toast.dark('Неверно', { autoClose: 1000 })
      setIndex(index + 1)
      setAnswer('')
    }
    if (index === arrSentence.length - 1) {
      progressUser(0, 1).then(() => history.goBack())
      setIndex(0)
      setAnswer('')
    }
  }

  const progressUser = async (passWords, passSentences) => {
    try {
      await request('/api/progress', 'POST', { level, number, passSentences, passWords, userId })
    } catch (e) {}
  }

  const getSentences = useCallback(async () => {
    try {
      const exercise = await request('/api/sentences', 'POST', { level, number })
      setArrSentence(exercise)
    } catch (e) {}
    // eslint-disable-next-line
  }, [{ arrSentence }])

  const getWords = useCallback(async () => {
    try {
      const exercise = await request('/api/words', 'POST', { level, number })
      setArrWords(exercise)
    } catch (e) {}
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    getWords().then()
    getSentences().then()
    return () => { setArrWords([]); setArrSentence([]) }
    // eslint-disable-next-line
  }, [number, level])

  return { answer, arrSentence, arrWords, handleClickSentence, handleClickWords, index, loading, setAnswer, setIndex }
}
