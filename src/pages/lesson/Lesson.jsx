// packages
import React from 'react'
import {NavLink} from "react-router-dom";
import _ from 'lodash'
// components
import Hamburger from "../../header/hamburger/Hamburger";
// hooks
import useLesson from "./useLesson";
// styles
import style from './lesson.module.scss'

const Lesson = () => {
  const {objectLesson} = useLesson()

  return (
    <>
      <div className={style.main}>
        <Hamburger/>
        <div className={style.lesson}>
          {_.map(objectLesson, (less) =>
            <div key={less.id} className={style.backLesson}>
              <h1 className={style.caption}>Урок #{less.numberLesson}</h1>
              <div className={style.stars}>
                {less.stars}
              </div>
              <NavLink to={"/exercise"}>
                <img className={style.backImg} src={less.imgLesson} alt={'huy'}/>
              </NavLink>
              <h1 className={style.captionTheme}>{less.themeLesson}</h1>
            </div>
          )}
        </div>
      </div>
    </>
  )
}
export default Lesson
