// packages
import React from "react";
import _ from "lodash";
import {NavLink} from "react-router-dom";
// components
import useHeader from "./useHeader";
// hooks
import {useContextProvider} from "../hooks/context";
import {useAuth} from "../hooks/auth.hook";
// style
import style from "./header.module.scss";
// pictures
import logo from "../img/logo.svg";
import user from '../img/Header/user 1.png'

const Header = () => {
  const {routes} = useHeader()
  const {logout} = useAuth()
  const {
    authenticate: {isAuthenticated},
    registrationModal: {setIsModalReg},
    loginModal: {setIsModalLogin}
  } = useContextProvider() || {}

  const logoutHandler = (e) => {
    e.preventDefault()
    logout()
  }
  console.log(isAuthenticated)
  return (
    <div className={style.headerDiv}>
      <div className={style.header}>
        <div className={style.logoHeaderBack}>
          <img className={style.logoHeader} src={logo} alt={'logo'}/>
        </div>

        <span className={style.txtLogoHeader}>Space</span>

        <div>
          {_.map(routes, (route) => <NavLink key={route.id} className={style.link}
                                             to={route.to}>{route.name}</NavLink>)}
        </div>

        {!isAuthenticated ? <div>
            <NavLink
              className={style.enter}
              to={'/'}
              onClick={() => setIsModalLogin(true)}>
              Вход
              <img className={style.userImg} src={user} alt={'user'}/>
            </NavLink>

            <NavLink
              className={style.enter}
              to={'/'}
              onClick={() => setIsModalReg(true)}>
              Регистрация
              <img className={style.userImg} src={user} alt={'user'}/>
            </NavLink>
          </div> :
          <div>
            <NavLink
              className={style.enter}
              to={'/profile'}
            >
              Профиль
              <img className={style.userImg} src={user} alt={'user'}/>
            </NavLink>

            <NavLink
              className={style.enter}
              to={'/'}
              onClick={logoutHandler}>
              Выход
              <img className={style.userImg} src={user} alt={'user'}/>
            </NavLink>
          </div>}


      </div>

    </div>

  )
}
export default Header

