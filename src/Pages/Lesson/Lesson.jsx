// packages
import React from 'react'
import {NavLink} from "react-router-dom";
import _ from 'lodash'
// components
import Hamburger from "../../Header/Hamburger/Hamburger";
import useLesson from "./useLesson";
// styles
import styles from './Lesson.module.scss'

const Lesson = () => {
    const {objectLesson} = useLesson()

    return (
        <>
            <div className={styles.main}>
                <Hamburger/>
                <div className={styles.lesson}>
                    {_.map(objectLesson, (less) =>
                        <div key={less.id} className={styles.backLesson}>
                            <h1 className={styles.caption}>Урок #{less.numberLesson}</h1>
                            <div className={styles.stars}>
                                {less.stars}
                            </div>
                            <NavLink to={"/exercise"}>
                                <img className={styles.backImg} src={less.imgLesson} alt={'huy'}/>
                            </NavLink>
                            <h1 className={styles.captionTheme}>{less.themeLesson}</h1>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default Lesson
