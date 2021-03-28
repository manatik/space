// packages
import React from 'react'
import _ from 'lodash'
// components
import Hamburger from '../../../components/hamburger/Hamburger'
// hooks
import useWords from './useWords'
// styles
import style from './words.module.scss'

const Words = () => {
  const { objectWords } = useWords() || {}
  return (
      <>
          <div className={style.main}>
              <Hamburger/>
              {_.map(objectWords, (word) =>
                  <div className={style.content} key={word.id}>
                      <div className={style.divImageWord}>
                          <img alt={word.alt} className={style.imageWord} src={word.img}/>
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
