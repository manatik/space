// packages
import React from "react";
// components
import {useContextProvider} from "../../Pages/ContextProvider/Context";
import {sendDataFromRegistrationModal} from '../../Api/api'
//styles
import styles from '../Modal.module.scss'

const RegistrationModal = () => {

    const {
        authenticate: {
            setIsAuthenticated
        },
        registrationModal: {
            setIsModalReg,
            username,
            setUsername,
            userEmail,
            setUserEmail,
            userPhone,
            setUserPhone,
            userPassword,
            setUserPassword
        } = {},
        loginModal: {
            setIsModalLogin,
        }
    } = useContextProvider() || {}

    const handleClick = () => {
        const tempData = {
            name: username,
            email: userEmail,
            phone: userPhone,
            password: userPassword
        }
        sendDataFromRegistrationModal(tempData).then()
        setIsAuthenticated(true)
        setIsModalReg(false)
    }

    return (
        <>
            <div className={styles.inputs}>
                <label className={styles.label} htmlFor="name">Имя:</label>
                <input
                    id="name"
                    className={styles.input}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder={'Имя-Ник'}
                />
                <label className={styles.label} htmlFor="email">E-mail:</label>
                <input
                    type="email"
                    name="email"
                    className={styles.input}
                    onChange={(e) => setUserEmail(e.target.value)}
                    placeholder="E-mail"
                />
                <label className={styles.label} htmlFor="tel">Номер телефона:</label>
                <input
                    type="tel"
                    name="tel"
                    className={styles.input}
                    onChange={(e) => setUserPhone(e.target.value)}
                    placeholder={'Телефон'}
                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                />
                <label className={styles.label} htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    name="password"
                    className={styles.input}
                    onChange={(e) => setUserPassword(e.target.value)}
                    placeholder={'Пароль'}
                />

                <button className={styles.btn}
                        onClick={handleClick}
                >
                    Зарегистрироваться
                </button>
                <p className={styles.txtEnter}>
                    У вас уже есть аккаунт?
                    <button className={styles.btnRedirect} onClick={() => {
                        setIsModalReg(false);
                        setIsModalLogin(true)
                    }}>
                        Войти
                    </button>
                </p>
            </div>
        </>
    )
}

export default RegistrationModal
