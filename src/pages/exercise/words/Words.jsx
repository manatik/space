// packages
import React from 'react'
import _ from 'lodash'
// components
import Hamburger from "../../../header/hamburger/Hamburger";
// hooks
import useWords from "./useWords";
// styles
import style from "./words.module.scss"

const Words = () => {
  const {objectWords} = useWords() || {}
  return (
    <>
      <div className={style.main}>
        <Hamburger/>
        {_.map(objectWords, (word) =>
          <div key={word.id} className={style.content}>
            <div className={style.divImageWord}>
              <img className={style.imageWord} src={word.img} alt={word.alt}/>
            </div>
            <div className={style.divWords}>
              <p className={style.word}>{word.engWord}</p>
              <div className={style.divTranslate}>
                <p className={style.translate}>{word._1translate}</p>
                <p className={style.translate}>{word._2translate}</p>
                <p className={style.translate}>{word._3translate}</p>
              </div>
            </div>
          </div>
        )}
        <div className={style.empty}/>
      </div>
    </>
  )
}
export default Words
