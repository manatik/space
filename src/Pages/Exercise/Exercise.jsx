import React from 'react'
import style from './Exercise.module.scss'
import {NavLink} from "react-router-dom";
import word from '../../Img/Exercise/imgWords.png'
import sen from '../../Img/Exercise/imgSentence.png'
import dialog from '../../Img/Exercise/imgDialogs.png'
import Hamburger from "../../Header/Hamburger/Hamburger";


const Exercise = () => {
    return (
        <>
            <div className={style.main}>
                <Hamburger/>
                <div className={style.exercise}>
                    <div className={style.words}>
                        <NavLink className={style.link} to={'/words'}>
                            <img className={style.img} src={word} alt={'logo book'}/>
                            <p className={style.textField}>Слова</p>
                        </NavLink>
                    </div>
                    <div className={style.sentence}>
                        <NavLink className={style.link} to={'/sentence'}>
                            <img className={style.img} src={sen} alt={'logo book'}/>
                            <p className={style.textField}>Предложения</p>
                        </NavLink>
                    </div>
                    <div className={style.dialogs}>
                        <NavLink className={style.link} to={'/dialog'}>
                            <img className={style.img} src={dialog} alt={'logo book'}/>
                            <p className={style.textField}>Диалог</p>
                        </NavLink>
                    </div>
                </div>

            </div>
        </>
    )
}
export default Exercise
