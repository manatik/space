// packages
import React from 'react'
import _ from 'lodash'
// components
import Hamburger from '../../../components/hamburger/Hamburger'
// hooks
import useExercise from '../useExercise'
// styles
import style from './sentence.module.scss'

const Sentence = () => {
  const { objectExercise } = useExercise() || {}
  return (
      <>
          <div className={style.main}>
              <Hamburger/>
              {_.map(objectExercise, (exercise) =>
                  <div className={style.content} key={exercise.id}>
                      <div className={style.rules}>
                          {exercise.rules}
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
                  </div>
              )}
          </div>
      </>
  )
}
export default Sentence
