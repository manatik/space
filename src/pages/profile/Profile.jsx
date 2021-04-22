// packages
import React from 'react'
import { NavLink } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import _ from 'lodash'
// components
import Hamburger from '../../components/hamburger/Hamburger'
import Loader from '../../components/loader/Loader'
import DatePicker from '../../components/datePicker/DatePicker'
// hooks
import { useProfile } from './useProfile'
// styles
import style from './profile.module.css'
// pictures
import profile from '../../assets/user.svg'
import logo from '../../assets/logo.png'

const Profile = () => {
  const {
    data, editProfile, handleChange,
    loading, progress, saveProfile,
    setToggle, toggle
  } = useProfile() || {}

  if (loading && !data) {
    return <Loader/>
  }

  return (
      <div>
          <ToastContainer/>
          <div className={ style.main }>
              <Hamburger/>
              <div className={ style.content }>
                  <div className={ style.navBar }>
                      <img alt="logo" src={ logo }/>
                      <div className={ style.pagesProfile }>
                          <span className={ style.pageProfile } onClick={() => setToggle(false)}>
                              <NavLink className={ style.navLink } to='/profile'>Ваш профиль</NavLink>
                          </span>
                          <span className={ style.pageProfile } onClick={ editProfile }>
                              <NavLink className={ style.navLink } to='/profile'>Редактировать профиль</NavLink>
                          </span>
                          <span className={ style.pageProfile }>
                              <NavLink className={ style.navLink } to='/chat'>Общий чат</NavLink>
                          </span>
                      </div>
                  </div>

                  <div className={ style.profileField }>
                      <div className={ style.profile }>
                          <div className={ style.divImgProfile }>
                              <img alt="картинка пользователя" className={ style.imgProfile } src={ profile }/>
                          </div>
                          { !toggle
                            ? <div className={ style.profileFields }>
                                <span className={ style.span }>
                                    { `Имя: ${data.name}` }
                                </span>
                                <span className={ style.span }>
                                    { `E-mail: ${data.email}` }
                                </span>
                                <span className={ style.span }>
                                    { `Телефон: ${data.phone}` }
                                </span>
                                {/*eslint-disable*/ }
                </div>
                : <div className={ style.inputs }>
                  <input className={ style.input } name='name' onChange={ handleChange } placeholder='Имя' type="text"/>
                  <input className={ style.input } name='email' onChange={ handleChange } placeholder='Почта'
                         type="text"/>
                  <input className={ style.input } name='phone' onChange={ handleChange } placeholder='Телефон'
                         type="text"/>
                </div> }
              <div className={ style.btnProfile }>
                { toggle &&
                <button className={ style.btn } disabled={ loading } onClick={ saveProfile }
                        type='button'>Сохранить</button> }
              </div>
            </div>
            <div className={ style.progress }>
              <div className={ style.progressField1 }>
                <DatePicker/>
              </div>
              <div className={ style.progressField2 }>
                <h1 className={ style.lvls }>Прогресс</h1>
                <hr/>
                {_.map(progress, (value, index) =>
                  <ul key={index} className={ style.ul }>
                  <li>{value.name}: {value.completed} из {value.all} упражнений</li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Profile
