// packages
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// components
import Header from '../../header/Header'
import MainPageProgram from './MainPageProgram'
import RegistrationModal from '../../modals/RegistrationModal'
import Modal from '../../components/modal/Modal'
import LoginModal from '../../modals/LoginModal'
// hooks
import { useContextProvider } from '../../hooks/context'
// styles
import style from './mainPage.module.css'
import 'react-toastify/dist/ReactToastify.css'
// pictures
const iodine = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/MainPage%2Fjoda.png?alt=media&token=007e653d-8819-4f19-b7d3-87c13bfa9e95'

const MainPage = () => {
  const {
    authenticate: { isAuthenticated },
    modals: { isModalLogin, isModalReg, setIsModalLogin, setIsModalReg }
  } = useContextProvider() || {}

  return (
      <>
          <div className={ style.mainPage }>
              <Header/>
              <ToastContainer/>
              <div className={ style.section }>
                  <div className={ style.offer }>
                      <p>Приложение, созданное для наиболее легкого и простого изучения английского языка</p>
                      <div style={ { marginTop: '30px' } }>
                          { !isAuthenticated
                            ? <span onClick={ () => setIsModalReg(true) }>
                                <NavLink
                                    className={ style.btn }
                                    to={ '/' }
                                >
                                    Начать обучение
                                    {/* eslint-disable */ }
                                </NavLink>
                              </span>

                : <NavLink
                  className={ style.btn }
                  to={ '/programEng' }
                >
                  Выбери уровень!
                </NavLink> }
            </div>
          </div>
          <img alt={ 'iodine' } className={ style.iodineMainPage } src={ iodine }/>
        </div>
      </div>
      <MainPageProgram/>

      <Modal isClose={ setIsModalReg } isOpen={ isModalReg }>
        <RegistrationModal/>
      </Modal>

      <Modal isClose={ setIsModalLogin } isOpen={ isModalLogin }>
        <LoginModal/>
      </Modal>
    </>
  )
}
export default MainPage

// TODO: для форм используй final-form или formik
