import React from 'react'
import style from './passExercise.module.css'
import iodine from '../assets/joda.svg'
import { useExercise } from '../pages/exercise/useExercise'
const PassExercise = () => {
  const { hidePassModal } = useExercise()
  return (
      <div className={style.main}>
          <div className={style.caption}>Молодец, неплохо управился</div>
          <img alt="грогу" className={style.iodine} src={iodine}/>
          <button className={style.return} onClick={hidePassModal} type='button'>вернуться к упражнениям</button>
      </div>
  )
}

export default PassExercise
