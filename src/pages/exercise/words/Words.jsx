// packages
import React from 'react'
import _ from 'lodash'
// components
import Hamburger from '../../../components/hamburger/Hamburger'
// hooks
import { useExercise } from '../useExercise'
// styles
import style from './words.module.scss'

const Words = () => {
  const { arrayWords } = useExercise()

  return (
      <>
          <div className={ style.main }>
              <Hamburger/>
              { _.map(arrayWords, (word) =>
                  <div className={ style.content } key={ word.word }>
                      <div className={ style.divImageWord }>
                          <img alt={ word.alt } className={ style.imageWord } src={ word.image }/>
                      </div>
                      <div className={ style.divWords }>
                          <p className={ style.word }>{ word.word }</p>
                          <div className={ style.divTranslate }>
                              <p className={ style.translate }>{ word.translate1 }</p>
                              <p className={ style.translate }>{ word.translate2 }</p>
                          </div>
                      </div>
                  </div>
              ) }
              <div className={ style.empty }/>
          </div>
      </>
  )
}

export default Words
