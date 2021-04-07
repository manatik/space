// packages
import React from 'react'
import { NavLink } from 'react-router-dom'
// components
import Hamburger from '../../components/hamburger/Hamburger'
// hooks
// styles
import style from './programEng.module.css'

const ProgramEng = () => {
  const data = [
    {
      id: '1',
      title: 'Elementary'
    },
    {
      id: '2',
      title: 'Intermediate'
    },
    {
      id: '3',
      title: 'Pre-Intermediate'
    },
    {
      id: '4',
      title: 'Upper-Intermediate'
    }
  ]
  return (
      <>
          <div className={ style.main }>
              <Hamburger/>
              <h1 className={ style.caption }>Выберите уровень знания английского</h1>
              <div className={ style.content }>
                  {data.map((link, index) =>
                      <span className={ style.span } key={index}>
                          <NavLink className={ style.navLink } id={link.id} to={ `/programEng/${link.title}` }>{link.title}</NavLink>
                      </span>
                  )}
                  <span className={ style.footer }>Стартуй за знаниями</span>
              </div>
          </div>
      </>
  )
}
export default ProgramEng
