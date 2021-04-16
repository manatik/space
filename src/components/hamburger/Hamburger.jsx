// packages
import React from 'react'
import cn from 'classnames'
// components
import { NavLink, Link } from 'react-router-dom'
// hooks
import useHamburger from './useHamburger'
// styles
import style from './hamburger.module.css'

const user = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/Header%2Fuser%201.png?alt=media&token=895414f7-43d3-462d-a877-8798b7c7d14a'

const Hamburger = () => {
  const {
    logoutHandler,
    openedBurgerMenu,
    setOpenedBurgerMenu
  } = useHamburger()

  const data = [
    {
      id: '1',
      title: 'Elementary'
    },
    {
      id: '2',
      title: 'Pre-Intermediate'
    },
    {
      id: '3',
      title: 'Intermediate'
    },
    {
      id: '4',
      title: 'Upper-Intermediate'
    }
  ]

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
                      {data.map((link, index) =>
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
