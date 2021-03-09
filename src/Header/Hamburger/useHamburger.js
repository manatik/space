import {useState} from "react";


const useHamburger = () => {
    // это тело хука, тут можно писать его логику, получение даных, хранить информацию и все что угодно
    const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false)
    const routes = [
        {
            id: 1,
            name: 'Главная',
            to: '/',
        },
        {
            id: 2,
            name: 'Программа и методика',
            to : '/programEng'
        },
        {
            id: 3,
            name: 'О нас',
            to : '/about'
        },
    ]

    return {
        openedBurgerMenu,
        setOpenedBurgerMenu,
        routes
    }
}

export default useHamburger
