import { useState } from 'react'
import { useContextProvider } from '../../../hooks/context'

export const useWords = () => {
  const { index: { index, setIndex } } = useContextProvider()
  const [mistakesArr, setMistakesArr] = useState([])
  const [mistakes, setMistakes] = useState(false)

  return { index, mistakes, mistakesArr, setIndex, setMistakes, setMistakesArr }
}
