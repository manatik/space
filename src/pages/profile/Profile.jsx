// packages
import React, {useState} from 'react'
import {NavLink} from "react-router-dom";
// components
import Hamburger from "../../header/hamburger/Hamburger";
// styles
import style from './profile.module.scss'
// pictures
import logo from "../../img/logoCabinet.png";
import book from '../../img/book.png'

const Profile = () => {
  const [toggle, setToggle] = useState(false)
  const handleClick = () => {

  }
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
              <div className={style.profileFields}>
                <span className={style.span}>Имя пользователя</span>
                <span className={style.span}>Почта пользователя</span>
                <span className={style.span}>Телефон пользователя</span>
                <span className={style.span}>Гугл аккаунт пользователя</span>
                <span className={style.span}>ВК аккаунт пользователя</span>
              </div>
              {/*<div className={style.inputs}>*/}
              {/*    <input className={style.input} type="text" placeholder='Имя'/>*/}
              {/*    <input className={style.input} type="text" placeholder='Почта'/>*/}
              {/*    <input className={style.input} type="text" placeholder='Что-то'/>*/}
              {/*    <input className={style.input} type="text" placeholder='Что-то'/>*/}
              {/*    <input className={style.input} type="text" placeholder='Что-то'/>*/}
              {/*</div>*/}
              <div className={style.btnProfile}>
                <button className={style.btn} onChange={handleClick}>Редактировать</button>
              </div>
            </div>
            <div className={style.progress}>
              <div className={style.progressField1}>
                Тут наверно будет дата пикер
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
export default Profile
