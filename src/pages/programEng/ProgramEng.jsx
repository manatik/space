// packages
import React from 'react'
import { NavLink } from 'react-router-dom'
// components
import Hamburger from '../../components/hamburger/Hamburger'
// hooks
import { useContextProvider } from '../../hooks/context'
// styles
import style from './programEng.module.css'

const ProgramEng = () => {
  const { linkLevels } = useContextProvider()
  return (
      <div className={ style.main }>
          <Hamburger/>
          <h1 className={ style.caption }>Выберите уровень английского</h1>
          <div className={ style.content }>
              { linkLevels.map((link, index) =>
                  <span className={ style.span } key={ index }>
                      <NavLink
                          className={ style.navLink } id={ link.id }
                          to={ `/programEng/${link.title}` }
                      >
                          { link.title }
                      </NavLink>
                  </span>
              ) }
              <span className={ style.footer }>Стартуй за знаниями</span>
          </div>
      </div>
  )
}
export default ProgramEng
