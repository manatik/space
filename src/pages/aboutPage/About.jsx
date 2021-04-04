// packages
import React from 'react'
// components
import Header from '../../header/Header'
// styles
import style from './about.module.scss'
// pictures
const offerImg = 'https://firebasestorage.googleapis.com/v0/b/space-eng.appspot.com/o/joda.png?alt=media&token=f08934c0-ba3c-4f29-be95-eedc8b7854b3'

const About = () => {
  return (
      <>
          <div className={style.main}>
              <Header/>
              <div className={style.offer}>
                  <p className={style.txtOffer}>
                      Данное приложение было сделано молодыми людьми, которые стремятся познать
                      Английский язык.
                      Надеемся и вы будете стремиться к познаниям английского. Удачи.
                  </p>
                  <img alt="" className={style.img} src={offerImg}/>
              </div>
              <div className={style.contacts}>
                  <p className={style.p}>Product by Elena + Matvey Mikheev`s</p>
                  <p className={style.p}>
                      E-mail:
                      <a
                          className={style.email}
                          href="mailto:name@email.com"
                      >
                          mml21122012@gmail.com
                      </a>
                  </p>
              </div>

          </div>

      </>
  )
}
export default About
