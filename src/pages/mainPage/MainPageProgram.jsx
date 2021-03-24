// packages
import React from 'react'
import cn from 'classnames'
import _ from 'lodash'
// hooks
import useMainPage from "./useMainPage";
// styles
import style from './mainPageProgram.module.scss'

const MainPageProgram = () => {

  const {lishki, text, setText} = useMainPage()
  return (
    <>
      <div className={style.main}>
        <h1 className={style.caption}>Программа</h1>
        <div className={style.section}>
          <div className={style.list}>
            <ol>
              {_.map(lishki, (l) =>
                <li
                  key={l.id}
                  className={cn(style.li, text === l.click && style.liActive)}
                  onClick={() => setText(l.click)}
                >
                  {l.name}
                </li>
              )}
            </ol>
          </div>
          <div className={style.listText}>
            {text}
          </div>
        </div>
      </div>
    </>
  )
}

export default MainPageProgram
