// packages
import { useState } from 'react'

const useHamburger = () => {
  // это тело хука, тут можно писать его логику, получение даных, хранить информацию и все что угодно
  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false)
  const routes = [
    {
      id: 1,
      name: 'Главная',
      to: '/'
    },
    {
      id: 2,
      name: 'Программа и методика',
      to: '/programEng'
    },
    {
      id: 3,
      name: 'Elementary',
      to: '/lesson'
    },
    {
      id: 4,
      name: 'Intermediate',
      to: '/lesson'
    },
    {
      id: 5,
      name: 'Pre-Intermediate',
      to: '/lesson'
    },
    {
      id: 6,
      name: 'Upper-Intermediate',
      to: '/lesson'
    },
    {
      id: 7,
      name: 'О нас',
      to: '/about'
    }
  ]

  return {
    openedBurgerMenu,
    routes,
    setOpenedBurgerMenu
  }
}

export default useHamburger
