import React, {useState} from "react";
import stylesHeader from "./Header.module.scss";
import logo from "../Img/logo.svg";
import _ from "lodash";
import {NavLink} from "react-router-dom";
import useHeader from "./useHeader";
import {useContextProvider} from "../Pages/ContextProvider/Context";
import user from '../Img/Header/user 1.png'
const Header = () => {
    const {routes} = useHeader()
    const {RegistrationModal} = useContextProvider()
    const {setIsModal} = RegistrationModal


    return (
        <div className={stylesHeader.headerDiv}>
            <div className={stylesHeader.header}>
                <div className={stylesHeader.logoHeaderBack}>
                    <img className={stylesHeader.logoHeader} src={logo} alt={'logo'}/>
                </div>
                <span className={stylesHeader.txtLogoHeader}>Space</span>
                <div>
                    {_.map(routes, (route) => <NavLink key={route.id} className={stylesHeader.link} to={route.to}>{route.name}</NavLink>)}
                </div>
                <div>
                    <NavLink className={stylesHeader.enter} to={'/'} onClick={()=>setIsModal(true)}>
                        Регистрация
                        <img className={stylesHeader.userImg} src={user} alt={'user'}/>
                    </NavLink>
                </div>

            </div>

        </div>

    )
}
export default Header

