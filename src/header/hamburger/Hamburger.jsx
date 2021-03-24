// packages
import _ from "lodash";
import cn from 'classnames'
// components
import {NavLink} from "react-router-dom";
// hooks
import useHamburger from "./useHamburger";
// styles
import style from "./hamburger.module.scss"

const Hamburger = () => {
  const {
    routes,
    setOpenedBurgerMenu,
    openedBurgerMenu
  } = useHamburger()
  return (
    <>
      <div className={style.main}>
        <div className={style.buttonWrapper}>
          <div
            className={cn(style.navIcon4, openedBurgerMenu && style.open)}
            onClick={() => setOpenedBurgerMenu(!openedBurgerMenu)}
          >
            <span/>
            <span/>
            <span/>
          </div>
        </div>
      </div>
      {openedBurgerMenu &&
      <div className={style.hamburger}>
        {_.map(routes, (route) => <NavLink key={route.id} className={style.navLink}
                                           to={route.to}>{route.name}</NavLink>)}
      </div>}
    </>
  )
}
export default Hamburger
