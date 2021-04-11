// packages
import React from 'react'
// components
import Hamburger from '../../../components/hamburger/Hamburger'
import CardWord from './CardWord'
import Loader from '../../../components/loader/Loader'
// hooks
// styles
import style from './words.module.css'
import { useExercise } from '../useExercise'

const Words = () => {
  const { arrWords, index, loading } = useExercise()
  if (loading && arrWords) {
    return <><Loader/></>
  }

  return (
      <>
          <div className={ style.main }>
              <Hamburger/>
              <CardWord {...arrWords[index]}/>
              <div className={ style.empty }/>
          </div>
      </>
  )
}
export default Words
