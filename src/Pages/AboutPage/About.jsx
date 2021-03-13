import React from "react";
import Header from "../../Header/Header";
import style from './About.module.scss'
import offerImg from '../../Img/joda.png'
const About = () => {

    return (
        <>
            <div className={style.main}>
                <Header/>
                <div className={style.offer}>
                    <p className={style.txtOffer}>Данное приложение было сделано молодыми людьми, которые стремятся познать Английский язык.
                    Надеемся и вы будете стремиться к познаниям английского. Удачи.</p>
                    <img className={style.img} src={offerImg} alt=""/>
                </div>
                <div className={style.contacts}>
                    <p className={style.p}>Product by Elena + Matvey Mikheev's</p>
                    <p className={style.p}>E-mail: <a className={style.email} href="mailto:name@email.com">mml21122012@gmail.com</a></p>
                </div>

            </div>

        </>
    )
}
export default About
