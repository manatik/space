// packages
import React from 'react'
import {NavLink} from "react-router-dom";
import {ToastContainer} from 'react-toastify';
//components
import Header from "../../header/Header";
import MainPageProgram from "./MainPageProgram";
import RegistrationModal from "../../modals/registrationModal/RegistrationModal";
import Modal from "../../modals/Modal";
import LoginModal from "../../modals/loginModal/LoginModal";
// hooks
import {useContextProvider} from "../../hooks/context";
// styles
import style from './mainPage.module.scss'
import 'react-toastify/dist/ReactToastify.css';
// pictures
import joda from "../../img/MainPage/joda.png";


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
      <div className={style.mainPage}>
        <Header/>
        <ToastContainer/>
        <div className={style.section}>
          <div className={style.offer}>
            <p>Приложение, созданное для наиболее легкого и простого изучения англиского языка</p>
            <div style={{marginTop: '30px'}}>
              {!isAuthenticated
                ? <NavLink className={style.btn}
                           to={"/"}
                           onClick={() => setIsModalReg(true)}
                >
                  Начать обучение
                </NavLink>
                : <NavLink className={style.btn}
                           to={"/programEng"}
                >
                  Выбери уровень!
                </NavLink>}
            </div>
          </div>
          <img className={style.jodaMainPage} src={joda} alt={"joda"}/>
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

