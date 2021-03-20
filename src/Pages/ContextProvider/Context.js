// packages
import React, {useState, useContext, createContext} from "react";

export const Context = createContext(null)
export const useContextProvider = () => useContext(Context)

export const ContextProvider = (props) => {
    // флаг авторизации
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    // флаги модальных окон
    const [isModalReg, setIsModalReg] = useState(false);
    const [isModalLogin, setIsModalLogin] = useState(false);
    // поля модального окна
    const [username, setUsername] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userPhone, setUserPhone] = useState('');
    const [userPassword, setUserPassword] = useState('');

    const variablesContext = {
        authenticate: {
            isAuthenticated,
            setIsAuthenticated
        },
        registrationModal: {
            isModalReg,
            setIsModalReg,
            username,
            setUsername,
            userEmail,
            setUserEmail,
            userPhone,
            setUserPhone,
            userPassword,
            setUserPassword
        },
        loginModal: {
            isModalLogin,
            setIsModalLogin,
            userEmail,
            setUserEmail,
            userPassword,
            setUserPassword
        }
    }

    return (
        <Context.Provider value={variablesContext}>
            {props.children}
        </Context.Provider>
    )
}
