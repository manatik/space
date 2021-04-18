// packages
import React from 'react'
import cn from 'classnames'
// components
import { NavLink, Link } from 'react-router-dom'
// hooks
import useHamburger from './useHamburger'
import { useContextProvider } from '../../hooks/context'
// styles
import style from './hamburger.module.css'
// pictures
import user from '../../assets/user.svg'

const Hamburger = () => {
  const {
    logoutHandler,
    openedBurgerMenu,
    setOpenedBurgerMenu
  } = useHamburger()
  const { linkLevels } = useContextProvider()

  return (
      <>
          <div className={ style.main }>
              <div className={ style.buttonWrapper }>
                  <div
                      className={ cn(style.navIcon4, openedBurgerMenu && style.open) }
                      onClick={ () => setOpenedBurgerMenu(!openedBurgerMenu) }
                  >
                      <span/>
                      <span/>
                      <span/>
                  </div>
              </div>
          </div>
          { openedBurgerMenu &&
          <div className={ style.hamburger }>
              <NavLink className={ style.navLink } to='/'>
                  Главная
              </NavLink>
              <div className={ style.dropDown }>
                  <span className={style.programSpan}>Программа и методика</span>
                  <div className={ style.dropDownContent }>
                      {linkLevels.map((link, index) =>
                          <Link
                              className={ style.navLink }
                              id={link.id}
                              key={index}
                              to={`/programEng/${link.title}` }
                          >
                              {link.title}
                          </Link>
                      )}
                  </div>
              </div>
              <NavLink className={ style.navLink } to='/about'>
                  О нас
              </NavLink>
              <div className={ style.enter }>
                  <NavLink className={ style.navLink } to={ '/profile' }>
                      Профиль
                      <img alt={ 'user' } className={ style.userImg } src={ user }/>
                  </NavLink>
                  <NavLink className={ style.navLink } onClick={logoutHandler} to={ '/' }>
                      Выход
                      <img alt={ 'user' } className={ style.userImg } src={ user }/>
                  </NavLink>
              </div>
          </div> }
      </>
  )
}
export default Hamburger
