// packages
import React from "react";
// components
import {useContextProvider} from "../../Pages/ContextProvider/Context";
import {sendDataFromLoginModal} from "../../Api/api";
// pictures
import google from '../../Img/google.png'
import vk from '../../Img/vk.png'
// styles
import styles from "../Modal.module.scss";

const LoginModal = () => {
    const {
        authenticate: {
            setIsAuthenticated
        },
        loginModal: {
            setIsModalLogin,
            userEmail,
            setUserEmail,
            userPassword,
            setUserPassword
        } = {}
    } = useContextProvider() || {}

    const handleClick = () => {
        const tempData = {
            email: userEmail,
            password: userPassword,
        }
        sendDataFromLoginModal(tempData).then()
        setIsAuthenticated(true)
        setIsModalLogin(false)
    }

    return (
        <>
            <div className={styles.inputs}>
                <label className={styles.label} htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    name="email"
                    className={styles.input}
                    placeholder="E-mail"
                    onChange={(e) => setUserEmail(e.target.value)}
                />
                <label className={styles.label} htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    name="password"
                    className={styles.input}
                    placeholder={'Пароль'}
                    onChange={(e) => setUserPassword(e.target.value)}
                />
                <button className={styles.btn} onClick={handleClick}>
                    Войти
                </button>
                <p className={styles.p}>Войти через Google:<img className={styles.icons} src={google} alt="google"/></p>
                <p className={styles.p}>Войти через Vkontakte: <img className={styles.icons} src={vk} alt="vk"/></p>
            </div>

        </>
    )
}
export default LoginModal
