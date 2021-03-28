// packages
import React from 'react'
import _ from 'lodash'
import cn from 'classnames'
// components
import { NavLink } from 'react-router-dom'
// hooks
import useHamburger from './useHamburger'
// styles
import style from './hamburger.module.scss'

const Hamburger = () => {
  const {
    openedBurgerMenu,
    routes,
    setOpenedBurgerMenu
  } = useHamburger()
  return (
      <>
          <div className={style.main}>
              <div className={style.buttonWrapper}>
                  <div
                      className={cn(style.navIcon4, openedBurgerMenu && style.open)}
                      onClick={() => setOpenedBurgerMenu(!openedBurgerMenu)}
                  >
                      <span/>
                      <span/>
                      <span/>
                  </div>
              </div>
          </div>
          {openedBurgerMenu &&
          <div className={style.hamburger}>
              {_.map(routes, (route) =>
                  <NavLink
                      className={style.navLink}
                      key={route.id}
                      to={route.to}
                  >
                      {route.name}
                  </NavLink>
              )}
          </div>}
      </>
  )
}
export default Hamburger
