import React from 'react'
import style from './Sentence.module.scss'
import Hamburger from "../../../Header/Hamburger/Hamburger";
import useExercise from "../useExercise";
import _ from 'lodash'

const Sentence = () => {
    const {objectExercise} = useExercise() || {}
    return (
        <>
            <div className={style.main}>
                <Hamburger/>
                {_.map(objectExercise, (exercise) =>
                    <div key={exercise.id} className={style.content}>
                        <div className={style.rules}>
                            {exercise.rules}
                        </div>
                        <div className={style.sentence}>
                            {exercise.sentence}
                        </div>
                        <div className={style.answer}>
                            <input className={style.fieldAnswer} type="text" placeholder='Напишите ваш ответ'
                                   onChange={(e) => exercise.answer = e.target.value}/>
                            <button className={style.buttonSentence}>Проверить</button>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}
export default Sentence
