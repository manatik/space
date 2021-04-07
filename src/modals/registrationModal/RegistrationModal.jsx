// packages
import React, { useEffect } from 'react'
// components
import { useContextProvider } from '../../hooks/context'
import { useHttp } from '../../api/api'
import { useMessage } from '../../hooks/msg.hook'
// styles
import styles from '../../components/modal/modal.module.css'

const RegistrationModal = () => {
  const {
    registrationModal: {
      modalForm,
      setIsModalReg,
      setModalForm
    } = {},
    loginModal: { setIsModalLogin }
  } = useContextProvider() || {}

  const message = useMessage()

  const { clearError, error, loading, request } = useHttp()

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const handleChange = (e) => {
    setModalForm({ ...modalForm, [e.target.name]: e.target.value })
  }
  const handleClick = async () => {
    try {
      console.log(modalForm)
      const data = await request('/api/auth/register', 'POST', { ...modalForm })
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
                  className={styles.input}
                  id="name"
                  name="name"
                  onChange={handleChange}
                  placeholder={'Имя-Ник'}
              />
              <label className={styles.label} htmlFor="email">E-mail:</label>
              <input
                  className={styles.input}
                  name="email"
                  onChange={handleChange}
                  placeholder="E-mail"
                  type="email"
              />
              <label className={styles.label} htmlFor="tel">Номер телефона:</label>
              <input
                  className={styles.input}
                  name="phone"
                  onChange={handleChange}
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  placeholder={'Телефон'}
                  type="tel"
              />
              <label className={styles.label} htmlFor="password">Пароль:</label>
              <input
                  className={styles.input}
                  name="password"
                  onChange={handleChange}
                  placeholder={'Пароль'}
                  type="password"
              />

              <button
                  className={styles.btn}
                  disabled={loading}
                  onClick={handleClick}
                  type='button'
              >
                  Зарегистрироваться
              </button>

              <p className={styles.txtEnter}>
                  У вас уже есть аккаунт?
                  <button
                      className={styles.btnRedirect}
                      onClick={() => {
                        setIsModalReg(false)
                        setIsModalLogin(true)
                      }}
                      type='button'
                  >
                      Войти
                  </button>
              </p>
          </div>
      </>
  )
}

export default RegistrationModal
