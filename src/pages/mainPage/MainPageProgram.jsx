// packages
import React from 'react'
import cn from 'classnames'
import _ from 'lodash'
// hooks
import useMainPage from './useMainPage'
// styles
import style from './mainPageProgram.module.css'

const MainPageProgram = () => {
  const { lishki, setText, text } = useMainPage()

  return (
      <div className={ style.main }>
          <h1 className={ style.caption }>Программа</h1>
          <div className={ style.section }>
              <div className={ style.list }>
                  <ol>
                      { _.map(lishki, (l) =>
                          <li
                              className={ cn(style.li, text === l.click && style.liActive) }
                              key={ l.id }
                              onClick={ () => setText(l.click) }
                          >
                              { l.name }
                          </li>
                      ) }
                  </ol>
              </div>
              <div className={ style.listText }>
                  <p style={{ textAlign: 'start', whiteSpace: 'pre-wrap' }}>{ text }</p>
              </div>
          </div>
      </div>
  )
}

export default MainPageProgram
