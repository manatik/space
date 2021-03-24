// pictures
import imageWords from '../../../img/book.png'

const useWords = () => {
  const objectWords = [
    {
      id: 1,
      img: imageWords,
      alt: 'картинка',
      engWord: 'work',
      _1translate: 'работа',
      _2translate: 'не волк',
      _3translate: 'работаЭтоВорк(АУФ)'
    }
  ]
  return {
    objectWords
  }
}
export default useWords
