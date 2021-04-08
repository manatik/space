// packages
import React from 'react'
import PropTypes from 'prop-types'
// style
import style from './sentence.module.css'

const CardSentence = (props) => {
  const { rule, sentence, sentenceAnswer } = props

  return (
      <>
          <div className={style.content}>
              <div className={style.rules}>
                  {rule}
              </div>
              <div className={style.sentence}>
                  {sentence}
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
              <span>{sentenceAnswer}</span>
          </div>
      </>
  )
}

CardSentence.propTypes = {
  rule: PropTypes.string.isRequired,
  sentence: PropTypes.string.isRequired,
  sentenceAnswer: PropTypes.string.isRequired
}
export default CardSentence
