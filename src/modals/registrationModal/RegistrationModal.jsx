// packages
import React, {useEffect} from "react";
// components
import {useContextProvider} from "../../hooks/context";
import {useHttp} from '../../api/api'
import {useMessage} from "../../hooks/msg.hook";
//styles
import styles from '../modal.module.scss'

const RegistrationModal = () => {
  const {
    registrationModal: {
      modalForm,
      setModalForm,
      setIsModalReg
    } = {},
    loginModal: {setIsModalLogin}
  } = useContextProvider() || {}

  const message = useMessage()

  const {clearError, error, request, loading} = useHttp()

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const handleChange = (e) => {
    setModalForm({...modalForm, [e.target.name]: e.target.value})
  }
  const handleClick = async () => {
    try {
      const data = await request('/api/auth/register', 'POST', {...modalForm})
      message(data.message)
      setIsModalReg(false)
    } catch (e) {
    }
  }

  return (
    <>
      <div className={styles.inputs}>
        <label className={styles.label} htmlFor="name">Имя:</label>
        <input
          id="name"
          name="name"
          className={styles.input}
          onChange={handleChange}
          placeholder={'Имя-Ник'}
        />
        <label className={styles.label} htmlFor="email">E-mail:</label>
        <input
          type="email"
          name="email"
          className={styles.input}
          onChange={handleChange}
          placeholder="E-mail"
        />
        <label className={styles.label} htmlFor="tel">Номер телефона:</label>
        <input
          type="tel"
          name="phone"
          className={styles.input}
          onChange={handleChange}
          placeholder={'Телефон'}
          pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
        />
        <label className={styles.label} htmlFor="password">Пароль:</label>
        <input
          type="password"
          name="password"
          className={styles.input}
          onChange={handleChange}
          placeholder={'Пароль'}
        />

        <button className={styles.btn}
                onClick={handleClick}
                disabled={loading}
        >
          Зарегистрироваться
        </button>

        <p className={styles.txtEnter}>
          У вас уже есть аккаунт?
          <button
            className={styles.btnRedirect}
            onClick={() => {
              setIsModalReg(false);
              setIsModalLogin(true)
            }}
          >
            Войти
          </button>
        </p>
      </div>
    </>
  )
}

export default RegistrationModal
