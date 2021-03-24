// packages
import React, {useState, useContext, createContext} from "react";

export const Context = createContext(null)
export const useContextProvider = () => useContext(Context)

export const ContextProvider = (props) => {
  // флаг авторизации
  const [isAuthenticated, setIsAuthenticated] = useState(true)
  // флаги модальных окон
  const [isModalReg, setIsModalReg] = useState(false);
  const [isModalLogin, setIsModalLogin] = useState(false);
  // поля модального окна
  const [modalForm, setModalForm] = useState({})

  // объект для импорта
  const variablesContext = {
    authenticate: {
      isAuthenticated,
      setIsAuthenticated
    },
    registrationModal: {
      modalForm, setModalForm,
      isModalReg, setIsModalReg
    },
    loginModal: {
      modalForm, setModalForm,
      isModalLogin, setIsModalLogin
    }
  }

  return (
    <Context.Provider value={variablesContext}>
      {props.children}
    </Context.Provider>
  )
}
