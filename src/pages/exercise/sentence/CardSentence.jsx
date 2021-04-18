// packages
import React from 'react'
import PropTypes from 'prop-types'
import { ToastContainer } from 'react-toastify'
// hooks
import { useExercise } from '../useExercise'
// style
import style from './sentence.module.css'

const CardSentence = (props) => {
  const { rule, sentence } = props
  const { answer, handleClickSentence, setAnswer } = useExercise()

  return (
      <div>
          <ToastContainer/>
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
                      onChange={ (e) => setAnswer(e.target.value)}
                      onKeyPress={(e) => e.key === 'Enter' ? handleClickSentence() : ''}
                      placeholder='Напишите ваш ответ'
                      type="text"
                      value={answer}
                  />
                  <button className={style.buttonSentence} onClick={handleClickSentence} type='button'>Проверить</button>
              </div>
          </div>
      </div>
  )
}

CardSentence.propTypes = {
  rule: PropTypes.string,
  sentence: PropTypes.string
}

export default CardSentence
