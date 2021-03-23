// packages
import React from 'react'
import {NavLink} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
//components
import Header from "../../Header/Header";
import MainPageProgram from "./MainPageProgram";
import {useContextProvider} from "../../Hooks/Context";
import RegistrationModal from "../../Modals/RegistrationModal/RegistrationModal";
import Modal from "../../Modals/Modal";
import LoginModal from "../../Modals/LoginModal/LoginModal";
// styles
import styles from './MainPage.module.scss'
// pictures
import joda from "../../Img/MainPage/joda.png";


const MainPage = () => {
    const {
        authenticate: {
            isAuthenticated,
            setIsAuthenticated
        },
        registrationModal: {
            isModalReg,
            setIsModalReg
        },
        loginModal: {
            isModalLogin,
            setIsModalLogin
        }
    } = useContextProvider() || {}

    return (
        <>
            <div className={styles.mainPage}>
                <Header/>
                <ToastContainer/>
                <div className={styles.section}>
                    <div className={styles.offer}>
                        <p>Приложение, созданное для наиболее легкого и простого изучения англиского языка</p>
                        <div style={{marginTop: '30px'}}>
                            {!isAuthenticated
                                ? <NavLink className={styles.btn}
                                           to={"/"}
                                           onClick={() => setIsModalReg(true)}
                                >
                                    Начать обучение
                                </NavLink>
                                : <NavLink className={styles.btn}
                                           to={"/programEng"}
                                >
                                    Выбери уровень!
                                </NavLink>}
                        </div>
                    </div>
                    <img className={styles.jodaMainPage} src={joda} alt={"joda"}/>
                </div>
            </div>
            <MainPageProgram/>

            {isModalReg &&
            <Modal isOpen={isModalReg} isClose={setIsModalReg}>
                <RegistrationModal/>
            </Modal>}

            {isModalLogin &&
            <Modal isOpen={isModalLogin} isClose={setIsModalLogin}>
                <LoginModal/>
            </Modal>}
        </>
    )
}
export default MainPage

// TODO: для форм используй final-form или formik

