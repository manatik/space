import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'
import style from './words.module.css'
import { ToastContainer } from 'react-toastify'
import Loader from '../../../components/loader/Loader'
import { useExercise } from '../useExercise'

const CardWord = ({ alt, image, translate, word }) => {
  const { handleClickWords, random } = useExercise()

  if (!translate) {
    return <><Loader/></>
  }

  return (
      <>
          <ToastContainer/>
          <div className={ style.content }>
              <div className={ style.divImageWord }>
                  <img
                      alt={ alt } className={ style.imageWord }
                      src={ image }
                  />
              </div>
              <div className={ style.divWords }>
                  <p className={ style.word }>{ word }</p>
                  <div className={ style.divTranslate }>
                      { _.map(random(translate), (value, index) =>
                          <p className={ style.translate } key={ index } onClick={ handleClickWords }>{ value }</p>
                      ) }
                  </div>
              </div>
          </div>
      </>
  )
}

CardWord.propTypes = {
  alt: PropTypes.string,
  image: PropTypes.any,
  translate: PropTypes.array,
  word: PropTypes.string
}
export default CardWord
