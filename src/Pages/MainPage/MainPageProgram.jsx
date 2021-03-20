// packages
import React from 'react'
import cn from 'classnames'
import _ from 'lodash'
// components
import useMainPage from "./useMainPage";
// styles
import styles from './MainPageProgram.module.scss'

const MainPageProgram = () => {

    const {lishki, text, setText} = useMainPage()
    return (
        <>
            <div className={styles.main}>
                <h1 className={styles.caption}>Программа</h1>
                <div className={styles.section}>
                    <div className={styles.list}>
                        <ol>
                            {_.map(lishki, (l) =>
                                <li
                                    key={l.id}
                                    className={cn(styles.li, text === l.click && styles.liActive)}
                                    onClick={() => setText(l.click)}
                                >
                                    {l.name}
                                </li>
                            )}
                        </ol>
                    </div>
                    <div className={styles.listText}>
                        {text}
                    </div>
                </div>
            </div>
        </>
    )
}

export default MainPageProgram
