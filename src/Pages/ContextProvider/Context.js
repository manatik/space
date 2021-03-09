import React, {useState, useContext, createContext} from "react";

export const Context = createContext(null)
export const useContextProvider = () => useContext(Context)

export const ContextProvider = (props) => {
    const [isModal, setIsModal] = useState(false);

    const value = {
        RegistrationModal: {
            isModal,
            setIsModal
        },
    }
    return (
        <Context.Provider value={value}>
            {props.children}
        </Context.Provider>
    )
}
