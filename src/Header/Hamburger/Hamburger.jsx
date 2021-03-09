import style from "./Hamburger.module.scss"
import _ from "lodash";
import {NavLink} from "react-router-dom";
import useHamburger from "./useHamburger";

const Hamburger = () => {
    const {routes} = useHamburger()
    return (
        <>
            <div className={style.main}>
                <div className={style.hamburger}>
                    {_.map(routes, (route) => <NavLink key={route.id} className={style.navLink} to={route.to}>{route.name}</NavLink>)}
                </div>
            </div>
        </>
    )
}
export default Hamburger
