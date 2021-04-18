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

  const [data, setData] = useState([])
  const [dataLessons, setDataLessons] = useState([])
  const [index, setIndex] = useState(0)

  const linkLevels = [
    { id: '1', title: 'Elementary' },
    { id: '2', title: 'Pre-Intermediate' },
    { id: '3', title: 'Intermediate' },
    { id: '4', title: 'Upper-Intermediate' }
  ]
  // объект для импорта
  const variablesContext = {
    authenticate: {
      isAuthenticated,
      setIsAuthenticated
    },
    data: {
      data,
      dataLessons,
      setData,
      setDataLessons
    },
    index: {
      index,
      setIndex
    },
    linkLevels,
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
