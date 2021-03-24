// styles
import style from "./lesson.module.scss";
// pictures
import star from "../../img/Lesson/Raiting.png";
import zat from '../../img/Lesson/zatichka.png'

const useLesson = () => {
  const stars =
    <>
      <img className={style.star} src={star} alt={'StarRating'}/>
      <img className={style.star} src={star} alt={'StarRating'}/>
      <img className={style.star} src={star} alt={'StarRating'}/>
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
      id: 3,
      numberLesson: 3,
      stars: stars,
      imgLesson: zat,
      themeLesson: "Жожоба жумайсынба"
    }, {
      id: 4,
      numberLesson: 4,
      stars: stars,
      imgLesson: zat,
      themeLesson: "Жожоба жумайсынба"
    }, {
      id: 5,
      numberLesson: 5,
      stars: stars,
      imgLesson: zat,
      themeLesson: "Жожоба жумайсынба"
    }, {
      id: 6,
      numberLesson: 6,
      stars: stars,
      imgLesson: zat,
      themeLesson: "Жожоба жумайсынба"
    },

  ]
  return {
    objectLesson
  }
}
export default useLesson
