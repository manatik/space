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
    }
  }

  return (
      <Context.Provider value={variablesContext}>
          {/* eslint-disable-next-line react/prop-types,react/destructuring-assignment */}
          {props.children}
      </Context.Provider>
  )
}
