import React from "react";
import {Modal} from "office-ui-fabric-react";
import {useContextProvider} from "../ContextProvider/Context";
import styles from './RegistrationModalWindow.module.scss'
import {NavLink} from "react-router-dom";
import img from '../../Img/Modal/modalImg.png'
import {Formik} from 'formik';

const RegistrationModalWindow = () => {
    const {RegistrationModal} = useContextProvider()
    const {isModal, setIsModal} = RegistrationModal
    return (
        <>
            <Modal
                isOpen={isModal}
                onDismiss={() => setIsModal(false)}>
                <div className={styles.main}>
                    <div className={styles.band}/>
                    <img className={styles.modalImg} src={img} alt={'modalImg'}/>
                    <Formik
                        initialValues={{email: '', password: ''}}
                        validate={values => {
                            const errors = {};
                            if (!values.email) {
                                errors.email = 'Обязательное поле';
                            } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                            ) {
                                errors.email = 'Неверный E-mail адрес';
                            }
                            return errors;
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                              values,
                              errors,
                              touched,
                              handleChange,
                              handleBlur,
                          }) => (
                            <div className={styles.inputs}>
                                <input className={styles.input} placeholder={'Имя'}/>
                                <input
                                    type="email"
                                    name="email"
                                    className={styles.input}
                                    placeholder="E-mail"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <input
                                    type="tel"
                                    name="tel"
                                    className={styles.input}
                                    placeholder={'Телефон'}
                                    pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                                />
                                <input
                                    type="password"
                                    name="password"
                                    className={styles.input}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder={'Пароль'}
                                />
                                {errors.password && touched.password && errors.password}
                                <button className={styles.btn}>
                                    Зарегистрироваться
                                </button>
                                <p className={styles.txtEnter}>
                                    У вас уже есть аккаунт?
                                    <NavLink className={styles.link} to={'/enter'}>
                                        Войти
                                    </NavLink>
                                </p>
                            </div>
                        )}
                    </Formik>
                </div>
            </Modal>
        </>
    )
}

export default RegistrationModalWindow
