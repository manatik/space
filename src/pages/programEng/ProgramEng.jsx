// packages
import React from "react";
import {NavLink} from "react-router-dom";
// components
import Hamburger from "../../header/hamburger/Hamburger";
// styles
import style from "./programEng.module.scss"

const ProgramEng = () => {

  return (
    <>
      <div className={style.main}>
        <Hamburger/>
        <h1 className={style.caption}>Выберите уровень знания английского</h1>
        <div className={style.content}>
          <NavLink className={style.navLink} to={'/lesson'}>Elementary</NavLink>
          <NavLink className={style.navLink} to={'/lesson'}>Intermediate</NavLink>
          <NavLink className={style.navLink} to={'/lesson'}>Pre-Intermediate</NavLink>
          <NavLink className={style.navLink} to={'/lesson'}>Upper-Intermediate</NavLink>
          <span className={style.footer}>Стартуй за знаниями</span>
        </div>
      </div>
    </>
  )
}
export default ProgramEng
