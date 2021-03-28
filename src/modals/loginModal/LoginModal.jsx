// packages
import React, { useEffect } from 'react'
// components
import { useContextProvider } from '../../hooks/context'
// hooks
import { useHttp } from '../../api/api'
import { useAuth } from '../../hooks/auth.hook'
import { useMessage } from '../../hooks/msg.hook'
// pictures
import google from '../../img/google.png'
import vk from '../../img/vk.png'
// style
import style from '../../components/modal/modal.module.scss'

const LoginModal = () => {
  const {
    authenticate: {
      setIsAuthenticated
    },
    loginModal: {
      modalForm, setIsModalLogin,
      setModalForm
    } = {}
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
                  <img alt="google" className={style.icons} src={google}/>
              </p>
              <p className={style.p}>
                  Войти через Vkontakte:
                  <img alt="vk" className={style.icons} src={vk}/>
              </p>
          </div>

      </>
  )
}
export default LoginModal
