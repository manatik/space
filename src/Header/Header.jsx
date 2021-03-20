// импорты библиотек
import React from "react";
import _ from "lodash";
import {NavLink} from "react-router-dom";
// импорты компонентов
import useHeader from "./useHeader";
import {useContextProvider} from "../Pages/ContextProvider/Context";
// импорты картинок
import logo from "../Img/logo.svg";
import user from '../Img/Header/user 1.png'
// иморты стилей
import stylesHeader from "./Header.module.scss";

const Header = () => {
    const {routes} = useHeader()
    const {
        registrationModal: {
            setIsModalReg
        } = {},
        loginModal: {
            isModalLogin,
            setIsModalLogin
        } = {}
    } = useContextProvider() || {}


    return (
        <div className={stylesHeader.headerDiv}>
            <div className={stylesHeader.header}>
                <div className={stylesHeader.logoHeaderBack}>
                    <img className={stylesHeader.logoHeader} src={logo} alt={'logo'}/>
                </div>
                <span className={stylesHeader.txtLogoHeader}>Space</span>
                <div>
                    {_.map(routes, (route) => <NavLink key={route.id} className={stylesHeader.link}
                                                       to={route.to}>{route.name}</NavLink>)}
                </div>
                <div>
                    <NavLink className={stylesHeader.enter} to={'/'} onClick={() => setIsModalLogin(true)}>
                        Вход
                        <img className={stylesHeader.userImg} src={user} alt={'user'}/>
                    </NavLink>
                    <NavLink className={stylesHeader.enter} to={'/'} onClick={() => setIsModalReg(true)}>
                        Регистрация
                        <img className={stylesHeader.userImg} src={user} alt={'user'}/>
                    </NavLink>
                </div>

            </div>

        </div>

    )
}
export default Header

