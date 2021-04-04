// packages
import React from 'react'
import _ from 'lodash'
// components
import Hamburger from '../../../components/hamburger/Hamburger'
// hooks
import { useExercise } from '../useExercise'
// styles
import style from './sentence.module.scss'

const Sentence = () => {
  const { arraySentence } = useExercise()
  return (
      <>
          <div className={style.main}>
              <Hamburger/>
              {_.map(arraySentence, (exercise) =>
                  <div className={style.content} key={exercise._id}>
                      <div className={style.rules}>
                          {exercise.rule}
                      </div>
                      <div className={style.sentence}>
                          {exercise.sentence}
                      </div>
                      <div className={style.answer}>
                          <input
                              className={style.fieldAnswer}
                              onChange={(e) => {
                                exercise.answer = e.target.value
                              }}
                              placeholder='Напишите ваш ответ'
                              type="text"
                          />
                          <button className={style.buttonSentence} type='button'>Проверить</button>
                      </div>
                      <span>{exercise.sentenceAnswer}</span>
                  </div>
              )}
          </div>
      </>
  )
}
export default Sentence
