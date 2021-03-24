// packages
import React, {useEffect} from "react";
// components
import {useContextProvider} from "../../hooks/context";
// hooks
import {useHttp} from "../../api/api";
import {useAuth} from "../../hooks/auth.hook";
import {useMessage} from "../../hooks/msg.hook";
// pictures
import google from '../../img/google.png'
import vk from '../../img/vk.png'
// style
import style from "../modal.module.scss";

const LoginModal = () => {
  const {
    loginModal: {
      modalForm, setModalForm,
      setIsModalLogin
    } = {}
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
      const data = await request('/api/auth/login', 'POST', {...modalForm})
      login(data.token, data.userId)
      setIsModalLogin(false)
    } catch (e) {
    }

  }

  return (
    <>
      <div className={style.inputs}>
        <label className={style.label} htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          className={style.input}
          placeholder="E-mail"
          onChange={handleChange}
        />
        <label className={style.label} htmlFor="password">Пароль:</label>
        <input
          type="password"
          name="password"
          className={style.input}
          placeholder={'Пароль'}
          onChange={handleChange}
        />
        <button className={style.btn} onClick={handleClick} disabled={loading}>
          Войти
        </button>
        <p className={style.p}>Войти через Google:<img className={style.icons} src={google} alt="google"/></p>
        <p className={style.p}>Войти через Vkontakte: <img className={style.icons} src={vk} alt="vk"/></p>
      </div>

    </>
  )
}
export default LoginModal
