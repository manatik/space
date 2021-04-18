// packages
import React from 'react'
// components
import Hamburger from '../../../components/hamburger/Hamburger'
import CardWord from './CardWord'
import Loader from '../../../components/loader/Loader'
// hooks
import { useExercise } from '../useExercise'
// styles
import style from './words.module.css'

const Words = () => {
  const { arrWords, index, loading } = useExercise()

  if (loading && arrWords) {
    return <Loader/>
  }

  return (
      <div>
          <div className={ style.main }>
              <Hamburger/>
              <CardWord { ...arrWords[index] }/>
              <div className={ style.empty }/>
          </div>
      </div>
  )
}

export default Words
