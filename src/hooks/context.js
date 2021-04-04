// packages
import React, { createContext, useContext, useState } from 'react'

const Context = createContext(null)
export const useContextProvider = () => useContext(Context)

export const ContextProvider = (props) => {
  // флаг авторизации
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  // флаги модальных окон
  const [isModalReg, setIsModalReg] = useState(false)
  const [isModalLogin, setIsModalLogin] = useState(false)
  // поля модального окна
  const [modalForm, setModalForm] = useState({})
  // данные пользователя в профиле
  const [dataUser, setDataUser] = useState({ email: '', google: '', name: '', phone: '', vk: '' })
  // параметры для базы данных
  const [id, setId] = useState('')
  const [limit, setLimit] = useState(4)
  const [skip, setSkip] = useState(0)
  //
  const [arrayLessons, setArrayLessons] = useState([])
  const [arrayWords, setArrayWords] = useState([])
  const [arraySentence, setArraySentence] = useState([])

  // объект для импорта
  const variablesContext = {
    authenticate: {
      isAuthenticated,
      setIsAuthenticated
    },
    loginModal: {
      isModalLogin,
      modalForm,
      setIsModalLogin,
      setModalForm
    },
    profile: {
      dataUser, setDataUser
    },
    registrationModal: {
      isModalReg,
      modalForm,
      setIsModalReg,
      setModalForm
    },
    varLessons: {
      arrayLessons,
      arraySentence,
      arrayWords,
      id,
      limit,
      setArrayLessons,
      setArraySentence,
      setArrayWords,
      setId,
      setLimit,
      setSkip,
      skip
    }
  }

  return (
      <Context.Provider value={variablesContext}>
          {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
          {props.children}
      </Context.Provider>
  )
}
