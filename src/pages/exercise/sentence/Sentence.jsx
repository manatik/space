// packages
import React from 'react'
// components
import Hamburger from '../../../components/hamburger/Hamburger'
import CardSentence from './CardSentence'
import Loader from '../../../components/loader/Loader'
// hooks
import { useContextProvider } from '../../../hooks/context'
// styles
import style from './sentence.module.css'
import { useExercise } from '../useExercise'

const Sentence = () => {
  const { index: { index } } = useContextProvider()
  const { arrSentence, loading } = useExercise()

  if (loading && arrSentence) {
    return <><Loader/></>
  }

  return (
      <>
          <div className={style.main}>
              <Hamburger/>
              <CardSentence {...arrSentence[index]}/>
          </div>
      </>
  )
}
export default Sentence
