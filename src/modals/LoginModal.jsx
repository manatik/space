// packages
import React, { useEffect } from 'react'
// components
import { useContextProvider } from '../hooks/context'
// hooks
import { useHttp } from '../api/api'
import { useAuth } from '../hooks/auth.hook'
import { useMessage } from '../hooks/msg.hook'
// style
import style from '../components/modal/modal.module.css'

const LoginModal = () => {
  const {
    authenticate: { setIsAuthenticated },
    modals: { modalForm, setIsModalLogin, setModalForm }
  } = useContextProvider() || {}

  const message = useMessage()
  const { clearError, error, loading, request } = useHttp()

  const { login } = useAuth()

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const handleChange = (e) => {
    setModalForm({ ...modalForm, [e.target.name]: e.target.value })
  }

  const handleClick = async () => {
    try {
      const data = await request('/api/auth/login', 'POST', { ...modalForm })
      login(data.token, data.userId)
      setIsModalLogin(false)
      setIsAuthenticated(true)
    } catch (e) {
    }
  }

  return (
      <>
          <div className={style.inputs}>
              <label className={style.label} htmlFor="email">E-mail:</label>
              <input
                  className={style.input}
                  name="email"
                  onChange={handleChange}
                  placeholder="E-mail"
                  type="email"
              />
              <label className={style.label} htmlFor="password">Пароль:</label>
              <input
                  className={style.input}
                  name="password"
                  onChange={handleChange}
                  placeholder={'Пароль'}
                  type="password"
              />
              <button
                  className={style.btn} disabled={loading} onClick={handleClick}
                  type='button'
              >
                  Войти
              </button>
              <p className={style.p}>
                  Войти через Google:
              </p>
              <p className={style.p}>
                  Войти через Vkontakte:
              </p>
          </div>

      </>
  )
}
export default LoginModal
