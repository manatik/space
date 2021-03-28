// packages
import React from 'react'
import _ from 'lodash'
import { NavLink } from 'react-router-dom'
// components
import useHeader from './useHeader'
// hooks
import { useContextProvider } from '../hooks/context'
import { useAuth } from '../hooks/auth.hook'
// style
import style from './header.module.scss'
// pictures
import logo from '../img/logo.svg'
import user from '../img/Header/user 1.png'

const Header = () => {
  const { routes } = useHeader()
  const { logout } = useAuth()
  const {
    authenticate: { isAuthenticated, setIsAuthenticated },
    loginModal: { setIsModalLogin },
    registrationModal: { setIsModalReg }
  } = useContextProvider() || {}

  const logoutHandler = (e) => {
    e.preventDefault()
    logout()
    setIsAuthenticated(false)
  }
  return (
      <div className={style.headerDiv}>
          <div className={style.header}>
              <div className={style.logoHeaderBack}>
                  <img alt={'logo'} className={style.logoHeader} src={logo}/>
              </div>

              <span className={style.txtLogoHeader}>Space</span>

              <div>
                  {_.map(routes, (route) =>
                      <NavLink
                          className={style.link} key={route.id}
                          to={route.to}
                      >
                          {route.name}
                      </NavLink>)}
              </div>
              {!isAuthenticated
                ? <div>
                    <span onClick={() => setIsModalLogin(true)}>
                        <NavLink
                            className={style.enter}
                            to={'/'}
                        >
                            Вход
                            <img
                                alt={'user'}
                                className={style.userImg}
                                src={user}
                            />
                        </NavLink>
                    </span>
                    <span onClick={() => setIsModalReg(true)}>
                        <NavLink className={style.enter} to={'/'}>
                            Регистрация
                            <img alt={'user'} className={style.userImg} src={user}/>
                        </NavLink>
                    </span>
                    {/* eslint-disable */}
          </div>
          : <div>
            <NavLink
              className={style.enter}
              to={'/profile'}>
              Профиль
              <img alt={'user'} className={style.userImg} src={user}/>
            </NavLink>
            <NavLink className={style.enter} onClick={logoutHandler} to={'/'}>
              Выход
              <img alt={'user'} className={style.userImg} src={user}/>
            </NavLink>
          </div>}

      </div>
    </div>
  )
}
export default Header
