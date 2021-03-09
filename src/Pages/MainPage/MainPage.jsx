import React from 'react'
import styles from './MainPage.module.scss'
import joda from "../../Img/MainPage/joda.png";
import Header from "../../Header/Header";
import MainPageProgram from "./MainPageProgram";
import {NavLink} from "react-router-dom";
import RegistrationModalWindow from "../RegistrationModalWindow/RegistrationModalWindow";
import {useContextProvider} from "../ContextProvider/Context";

// Называй компоненты с большой буквы, важное правило
const MainPage = () => {
    // а хуки и прочие js файлы с маленькой
    // хук с логикой компонента
    const {RegistrationModal} = useContextProvider()
    const {isModal, setIsModal} = RegistrationModal
    return (
        <>
            <div className={styles.mainPage}>
                <Header/>
                <div className={styles.section}>
                    <div className={styles.offer}>
                        <p>Приложение, созданное для наиболее легкого и простого изучения англиского языка</p>
                        <div style={{marginTop: '30px'}}>
                            <NavLink className={styles.btn} to={"/"} onClick={() => setIsModal(true)}>Начать
                                обучение</NavLink>
                        </div>
                    </div>
                    <img className={styles.jodaMainPage} src={joda} alt={"joda"}/>
                </div>
            </div>
            <MainPageProgram/>
            {isModal && <><RegistrationModalWindow/></>}
        </>
    )
}

export default MainPage

// TODO: для форм используй final-form или formik

