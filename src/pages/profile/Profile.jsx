// packages
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
// components
import Hamburger from '../../components/hamburger/Hamburger'
// styles
import style from './profile.module.scss'
import { useProfile } from './useProfile'
// pictures
const logo = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/logoCabinet.png?alt=media&token=f1190f8b-a1a4-4fe3-93d5-be801d12dfd6'

const Profile = () => {
  const { dataUser, editProfile, handleChange, loading, saveProfile, setToggle, toggle } = useProfile() || {}

  return (
      <>
          <ToastContainer/>
          <div className={ style.main }>
              <Hamburger/>
              <div className={ style.content }>
                  <div className={ style.navBar }>
                      <img alt="logo" src={ logo }/>
                      <div className={ style.spans }>
                          <span className={ style.span } onClick={() => setToggle(false)}>
                              <NavLink className={ style.navLink } to='/profile'>Ваш профиль</NavLink>
                          </span>
                          <span className={ style.span } onClick={ editProfile }>
                              <NavLink className={ style.navLink } to='/profile'>Редактировать профиль</NavLink>
                          </span>
                          <span className={ style.span }>
                              <NavLink className={ style.navLink } to='/'>линк 3</NavLink>
                          </span>
                          <span className={ style.span }>
                              <NavLink className={ style.navLink } to='/'>линк 4</NavLink>
                          </span>
                      </div>
                  </div>
                  <div className={ style.profileField }>
                      <div className={ style.profile }>
                          <div className={ style.divImgProfile }>
                              <img alt="" className={ style.imgProfile } src={ dataUser.imageProfile }/>
                          </div>
                          { !toggle
                            ? <div className={ style.profileFields }>
                                <span className={ style.span }>
                                    { `Имя: ${dataUser.name}` }
                                </span>
                                <span className={ style.span }>
                                    { `E-mail: ${dataUser.email}` }
                                </span>
                                <span className={ style.span }>
                                    { `Телефон: ${dataUser.phone}` }
                                </span>
                                <span className={ style.span }>{ dataUser.google }</span>
                                <span className={ style.span }>{ dataUser.vk }</span>
                                {/*eslint-disable*/ }
                </div>
                : <div className={ style.inputs }>
                  <input className={ style.input } name='name' onChange={ handleChange } placeholder='Имя' type="text"/>
                  <input className={ style.input } name='email' onChange={ handleChange } placeholder='Почта'
                         type="text"/>
                  <input className={ style.input } name='phone' onChange={ handleChange } placeholder='Телефон'
                         type="text"/>
                  {/*<input className={ style.input } name='google' onChange={ handleChange } placeholder='Гугл'*/}
                  {/*       type="text"/>*/}
                  {/*<input className={ style.input } name='vk' onChange={ handleChange } placeholder='ВК' type="text"/>*/}
                </div> }
              <div className={ style.btnProfile }>
                { toggle &&
                <button className={ style.btn } disabled={ loading } onClick={ saveProfile }
                        type='button'>Сохранить</button> }
              </div>
            </div>
            <div className={ style.progress }>
              <div className={ style.progressField1 }>
                Тут наверно будет дата пикер
              </div>
              <div className={ style.progressField2 }>
                <h1 className={ style.lvls }>Levels</h1>
                <hr/>
                <ul className={ style.ul }>
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
