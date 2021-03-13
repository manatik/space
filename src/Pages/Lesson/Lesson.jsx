import React from 'react'
import styles from './Lesson.module.scss'
import {NavLink} from "react-router-dom";
import Hamburger from "../../Header/Hamburger/Hamburger";
import _ from 'lodash'
import useLesson from "./useLesson";

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
