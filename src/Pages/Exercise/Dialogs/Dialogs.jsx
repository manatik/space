import React from 'react'
import style from './Dialogs.module.scss'
import Hamburger from "../../../Header/Hamburger/Hamburger";

const Dialogs = () => {
    return (
        <>
            <div className={style.main}>
                <Hamburger/>
                <h1 className={style.caption}>Let's talk</h1>
                <div className={style.content}>
                    тут будет чат хз как его делать пока
                </div>
            </div>
        </>
    )
}
export default Dialogs
