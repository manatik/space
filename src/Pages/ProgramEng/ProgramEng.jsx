// packages
import React from "react";
import {NavLink} from "react-router-dom";
// components
import Hamburger from "../../Header/Hamburger/Hamburger";
// styles
import styles from "./ProgramEng.module.scss"

const ProgramEng = () => {

    return (
        <>
            <div className={styles.main}>
                <Hamburger/>
                <h1 className={styles.caption}>Выберите уровень знания английского</h1>
                <div className={styles.content}>
                    <NavLink className={styles.navLink} to={'/lesson'}>Elementary</NavLink>
                    <NavLink className={styles.navLink} to={'/lesson'}>Intermediate</NavLink>
                    <NavLink className={styles.navLink} to={'/lesson'}>Pre-Intermediate</NavLink>
                    <NavLink className={styles.navLink} to={'/lesson'}>Upper-Intermediate</NavLink>
                    <span className={styles.footer}>Стартуй за знаниями</span>
                </div>
            </div>
        </>
    )
}
export default ProgramEng
