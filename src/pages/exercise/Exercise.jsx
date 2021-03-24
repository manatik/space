// packages
import React from 'react'
import {NavLink} from "react-router-dom";
// components
import Hamburger from "../../header/hamburger/Hamburger";
// styles
import style from './exercise.module.scss'
// pictures
import word from '../../img/Exercise/imgWords.png'
import sen from '../../img/Exercise/imgSentence.png'


const Exercise = () => {
  return (
    <>
      <div className={style.main}>
        <Hamburger/>
        <div className={style.exercise}>
          <div className={style.words}>
            <NavLink className={style.link} to={'/words'}>
              <img className={style.img} src={word} alt={'logo book'}/>
              <p className={style.textField}>Слова</p>
            </NavLink>
          </div>
          <div className={style.sentence}>
            <NavLink className={style.link} to={'/sentence'}>
              <img className={style.img} src={sen} alt={'logo book'}/>
              <p className={style.textField}>Предложения</p>
            </NavLink>
          </div>
        </div>

      </div>
    </>
  )
}
export default Exercise
