/* eslint-disable */
import React from 'react'
import style from './sentence.module.css'

const CardSentence = (props) => {
  console.log(props)
  return (
      <>
          <div className={style.content}>
              <div className={style.rules}>
                  {props.rule}
              </div>
              <div className={style.sentence}>
                  {props.sentence}
              </div>
              <div className={style.answer}>
                  <input
                      className={style.fieldAnswer}
                      onChange={(e) => {
                        props.answer = e.target.value
                      }}
                      placeholder='Напишите ваш ответ'
                      type="text"
                  />
                  <button className={style.buttonSentence} type='button'>Проверить</button>
              </div>
              <span>{props.sentenceAnswer}</span>
          </div>
      </>
  )
}

export default CardSentence
