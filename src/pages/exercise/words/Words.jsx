/* eslint-disable */
// packages
import React from 'react'
// components
import Hamburger from '../../../components/hamburger/Hamburger'
// hooks
import { useExercise } from '../useExercise'
// styles
import style from './words.module.css'
import CardWord from './CardWord'
import { useWords } from "./useWords";

const Words = () => {
  const { arrayWords } = useExercise()
  const { index } = useWords()

  return (
      <>
        <div className={ style.main }>
          <Hamburger/>
          <CardWord { ...arrayWords[ index ] } length={ arrayWords.length }/>
          <div className={ style.empty }/>
        </div>
      </>
  )
}
export default Words
