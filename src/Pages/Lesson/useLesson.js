import styles from "./Lesson.module.scss";
import star from "../../Img/Lesson/Raiting.png";
import zat from '../../Img/Lesson/zatichka.png'

const useLesson = () => {
    const stars =
        <>
            <img className={styles.star} src={star} alt={'StarRating'}/>
            <img className={styles.star} src={star} alt={'StarRating'}/>
            <img className={styles.star} src={star} alt={'StarRating'}/>
        </>

    const objectLesson = [
        {
            id: 1,
            numberLesson: 1,
            stars: stars,
            imgLesson: zat,
            themeLesson: "Жожоба жумайсынба"
        },
        {
            id: 2,
            numberLesson: 2,
            stars: stars,
            imgLesson: zat,
            themeLesson: "Жожоба жумайсынба"
        },
        {
            id: 2,
            numberLesson: 2,
            stars: stars,
            imgLesson: zat,
            themeLesson: "Жожоба жумайсынба"
        }

    ]
    return {
        objectLesson
    }
}
export default useLesson
