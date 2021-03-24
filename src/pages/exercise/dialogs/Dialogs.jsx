// packages
import React from 'react'
// components
import Hamburger from "../../../header/hamburger/Hamburger";
// styles
import style from './dialogs.module.scss'

const Dialogs = () => {
  return (
    <>
      <div className={style.main}>
        <Hamburger/>
        <h1 className={style.caption}>Let's talk</h1>
        <div className={style.content}>
          тут будет чат хз как его делать пока
        </div>
      </div>
    </>
  )
}
export default Dialogs
