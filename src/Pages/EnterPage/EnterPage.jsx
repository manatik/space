import React from 'react'
import style from './EnterPage.module.scss'
import img from "../../Img/Modal/modalImg.png";
import {NavLink} from "react-router-dom";
import {Formik} from "formik";


const EnterPage = () => {

    return (
        <>
            <div className={style.main}>
                <NavLink className={style.link} to={"/"}>Назад</NavLink>
                <div className={style.window}>
                    <div className={style.band}/>
                    <img className={style.modalImg} src={img} alt={'modalImg'}/>
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
                            <div className={style.inputs}>
                                <input
                                    type="email"
                                    name="email"
                                    className={style.input}
                                    placeholder="E-mail"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <input
                                    type="password"
                                    name="password"
                                    className={style.input}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.password}
                                    placeholder={'Пароль'}
                                />
                                {errors.password && touched.password && errors.password}
                                <button className={style.btn}>
                                    Войти
                                </button>
                            </div>
                        )}
                    </Formik>
                    <p>войти через гугл</p>
                    <p>войти через вк</p>
                </div>
            </div>
        </>
    )
}
export default EnterPage
