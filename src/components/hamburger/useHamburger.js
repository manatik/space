// packages
import { useState } from 'react'
import { useAuth } from '../../hooks/auth.hook'
import { useContextProvider } from '../../hooks/context'

const useHamburger = () => {
  const {
    authenticate: { setIsAuthenticated }
  } = useContextProvider() || {}
  const { logout } = useAuth()
  // это тело хука, тут можно писать его логику, получение даных, хранить информацию и все что угодно
  const [openedBurgerMenu, setOpenedBurgerMenu] = useState(false)

  const logoutHandler = (e) => {
    e.preventDefault()
    logout()
    setIsAuthenticated(false)
  }

  const handleClick = (e) => {
    localStorage.setItem('lvl', e.target.id)
  }

  return {
    handleClick,
    logoutHandler,
    openedBurgerMenu,
    setOpenedBurgerMenu
  }
}

export default useHamburger
