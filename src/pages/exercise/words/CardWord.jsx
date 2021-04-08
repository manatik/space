/* eslint-disable */
import React from 'react'
import _ from 'lodash'
import style from './words.module.css'

const CardWord = (props) => {

  return (
    <>
      <div className={ style.content }>
        <div className={ style.divImageWord }>
          <img alt={ props.alt } className={ style.imageWord } src={ props.image }/>
        </div>
        <div className={ style.divWords }>
          <p className={ style.word }>{ props.word }</p>
          <div className={ style.divTranslate }>
            { _.map(props.translate, (value, index) =>
              <p key={ index } className={ style.translate }>{ value }</p>
            ) }
          </div>
        </div>
      </div>
    </>
  )
}

export default CardWord
