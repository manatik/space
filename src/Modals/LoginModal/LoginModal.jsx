// packages
import React, {useEffect} from "react";
// components
import {useContextProvider} from "../../Hooks/Context";
// pictures
import google from '../../Img/google.png'
import vk from '../../Img/vk.png'
// styles
import styles from "../Modal.module.scss";
import {useHttp} from "../../Api/api";
import {useAuth} from "../../Hooks/auth.hook";
import {useMessage} from "../../Hooks/msg.hook";

const LoginModal = () => {
    const {
        loginModal: {
            modalForm, setModalForm,
            setIsModalLogin
        }= {}
    } = useContextProvider() || {}

    const message = useMessage()
    const {clearError, error, request, loading} = useHttp()

    const {login} = useAuth()

    useEffect(() => {
        message(error)
        clearError()
    }, [error, message, clearError])

    const handleChange = (e) => {
        setModalForm({...modalForm, [e.target.name]: e.target.value})
    }
    const handleClick = async () => {
        try {
            const data = await request('/api/auth/login', 'POST',{...modalForm})
            login(data.token, data.userId)
            setIsModalLogin(false)
        } catch (e) {
        }

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
                    onChange={handleChange}
                />
                <label className={styles.label} htmlFor="password">Пароль:</label>
                <input
                    type="password"
                    name="password"
                    className={styles.input}
                    placeholder={'Пароль'}
                    onChange={handleChange}
                />
                <button className={styles.btn} onClick={handleClick} disabled={loading}>
                    Войти
                </button>
                <p className={styles.p}>Войти через Google:<img className={styles.icons} src={google} alt="google"/></p>
                <p className={styles.p}>Войти через Vkontakte: <img className={styles.icons} src={vk} alt="vk"/></p>
            </div>

        </>
    )
}
export default LoginModal
