// packages
import React from 'react'
// components
import Hamburger from '../../../components/hamburger/Hamburger'
import CardSentence from './CardSentence'
// hooks
import { useExercise } from '../useExercise'
import { useSentence } from './useSentence'
// styles
import style from './sentence.module.css'

const Sentence = () => {
  const { index } = useSentence()
  const { arraySentence } = useExercise()
  return (
      <>
          <div className={style.main}>
              <Hamburger/>
              <CardSentence {...arraySentence[index]}/>
          </div>
      </>
  )
}
export default Sentence
