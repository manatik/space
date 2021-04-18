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
import style from './header.module.css'
// pictures
const logo = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/logo.svg?alt=media&token=dd2ca7a5-10e8-44c5-9d27-8612140f71d8'
const user = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/user.svg?alt=media&token=3ae3631f-334e-4647-aabd-602eda12b959'

const Header = () => {
  const { routes } = useHeader()
  const { logout } = useAuth()
  const {
    authenticate: { isAuthenticated, setIsAuthenticated },
    modals: { setIsModalLogin, setIsModalReg }
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
