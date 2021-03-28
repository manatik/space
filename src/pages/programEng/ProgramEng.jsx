// packages
import React from 'react'
import { NavLink } from 'react-router-dom'
// components
import Hamburger from '../../components/hamburger/Hamburger'
// hooks
import { useProgramEng } from './useProgramEng'
// styles
import style from './programEng.module.scss'

const ProgramEng = () => {
  const { handleClick } = useProgramEng()

  return (
      <>
          <div className={ style.main }>
              <Hamburger/>
              <h1 className={ style.caption }>Выберите уровень знания английского</h1>
              <div className={ style.content }>

                  <span className={ style.span } onClick={ handleClick }>
                      <NavLink className={ style.navLink } id='1' to={ '/lesson' }>Elementary</NavLink>
                  </span>

                  <span className={ style.span } onClick={ handleClick }>
                      <NavLink className={ style.navLink } id='2' to={ '/lesson' }>Intermediate</NavLink>
                  </span>

                  <span className={ style.span } onClick={ handleClick }>
                      <NavLink className={ style.navLink } id='3' to={ '/lesson' }>Pre-Intermediate</NavLink>
                  </span>

                  <span className={ style.span } onClick={ handleClick }>
                      <NavLink className={ style.navLink } id='4' to={ '/lesson' }>Upper-Intermediate</NavLink>
                  </span>

                  <span className={ style.footer }>Стартуй за знаниями</span>
              </div>
          </div>
      </>
  )
}
export default ProgramEng
