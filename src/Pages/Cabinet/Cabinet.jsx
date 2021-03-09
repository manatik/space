import React from 'react'
import style from './Cabinet.module.scss'
import Hamburger from "../../Header/Hamburger/Hamburger";
import logo from "../../Img/logoCabinet.png";
import {NavLink} from "react-router-dom";
import book from '../../Img/book.png'

const Cabinet = () => {

    return (
        <>
            <div className={style.main}>
                <Hamburger/>
                <div className={style.content}>
                    <div className={style.navBar}>
                        <img src={logo} alt="logo"/>
                        <div className={style.navLinks}>
                            <NavLink className={style.navLink} to={'/'}>линк 1</NavLink>
                            <NavLink className={style.navLink} to={'/'}>линк 2</NavLink>
                            <NavLink className={style.navLink} to={'/'}>линк 3</NavLink>
                            <NavLink className={style.navLink} to={'/'}>линк 4</NavLink>
                        </div>
                    </div>
                    <div className={style.profileField}>
                        <div className={style.profile}>
                            <div className={style.divImgProfile}>
                                <img className={style.imgProfile} src={book} alt=""/>
                            </div>
                            <div className={style.inputs}>
                                <input className={style.input} type="text" placeholder='Имя'/>
                                <input className={style.input} type="text" placeholder='Почта'/>
                                <input className={style.input} type="text" placeholder='Что-то'/>
                                <input className={style.input} type="text" placeholder='Что-то'/>
                                <input className={style.input} type="text" placeholder='Что-то'/>
                            </div>
                            <div className={style.btnProfile}>
                                <button className={style.btn}>Редактировать</button>
                            </div>
                        </div>
                        <div className={style.progress}>
                            <div className={style.progressField1}>

                            </div>
                            <div className={style.progressField2}>
                                <h1 className={style.lvls}>Levels</h1>
                                <hr/>
                                <ul className={style.ul}>
                                    <li>fdfasfsafa</li>
                                    <li>fdfasfasfsaf</li>
                                    <li>fdfsafafafa</li>
                                    <li>fdfasfasfafs</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Cabinet
