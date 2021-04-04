// packages
import React from 'react'
import { NavLink, useParams } from 'react-router-dom'
// components
import Hamburger from '../../components/hamburger/Hamburger'
// styles
import style from './exercise.module.scss'
// pictures
const word = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/Exercise%2FimgWords.png?alt=media&token=88d7d96e-3ec9-43ae-9dd6-92a17e035824'
const sen = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/Exercise%2FimgSentence.png?alt=media&token=14f93026-d6e0-418b-9072-9f66510adb48'

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
                          <img alt={'logo book'} className={style.img} src={sen}/>
                          <p className={style.textField}>Предложения</p>
                      </NavLink>
                  </div>
              </div>

          </div>
      </>
  )
}
export default Exercise
