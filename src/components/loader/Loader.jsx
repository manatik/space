import React from 'react'
import style from './loader.module.css'

const Loader = () => {
  return (
      <div className={ style.main }>
          <div className={ style.ldsRing }>
              <div/>
              <div/>
              <div/>
              <div/>
          </div>
          <p style={ { fontSize: 35 } }>Загрузка...</p>
      </div>
  )
}

export default Loader
