// packages
import React, { createContext, useContext, useState } from 'react'

const Context = createContext(null)

export const useContextProvider = () => useContext(Context)

export const ContextProvider = (props) => {
  // флаг авторизации
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  // флаги модальных окон
  const [isModalReg, setIsModalReg] = useState(false)
  const [isModalLogin, setIsModalLogin] = useState(false)
  // поля модального окна
  const [modalForm, setModalForm] = useState({})
  // данные пользователя в профиле
  const [dataUser, setDataUser] = useState({})
  // параметры для базы данных
  const [id, setId] = useState('')
  const [limit, setLimit] = useState(4)
  const [skip, setSkip] = useState(0)
  // массивы данных по урокам
  const [arrayLessons, setArrayLessons] = useState([])
  const [arrayWords, setArrayWords] = useState([])
  const [arraySentence, setArraySentence] = useState([])

  const [index, setIndex] = useState(0)

  // объект для импорта
  const variablesContext = {
    authenticate: {
      isAuthenticated,
      setIsAuthenticated
    },
    modals: {
      isModalLogin,
      isModalReg,
      modalForm,
      setIsModalLogin,
      setIsModalReg,
      setModalForm
    },
    profile: {
      dataUser, setDataUser
    },
    varLessons: {
      arrayLessons,
      arraySentence,
      arrayWords,
      id,
      index,
      limit,
      setArrayLessons,
      setArraySentence,
      setArrayWords,
      setId,
      setIndex,
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
