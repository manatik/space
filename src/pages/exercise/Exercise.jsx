// packages
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
// components
import Hamburger from '../../components/hamburger/Hamburger'
// styles
import style from './exercise.module.css'
// pictures
import word from '../../assets/imgWords.png'
import sentence from '../../assets/imgSentence.png'

const Exercise = () => {
  const { level, number } = useParams()

  return (
      <>
          <div className={style.main}>
              <Hamburger/>
              <div className={style.exercise}>
                  <div className={style.words}>
                      <NavLink className={style.link} to={`/programEng/${level}/exercise/${number}/words`}>
                          <img alt={'logo book'} className={style.img} src={word}/>
                          <p className={style.textField}>Слова</p>
                      </NavLink>
                  </div>
                  <div className={style.sentence}>
                      <NavLink className={style.link} to={`/programEng/${level}/exercise/${number}/sentence`}>
                          <img alt={'logo book'} className={style.img} src={sentence}/>
                          <p className={style.textField}>Предложения</p>
                      </NavLink>
                  </div>
              </div>

          </div>
      </>
  )
}
export default Exercise
