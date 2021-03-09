import {useState} from 'react'

const useRegistrationModalWindow = () => {
    const [isModal, setIsModal] = useState(false);

    return {
        isModal,
        setIsModal
    }
}

export default useRegistrationModalWindow
