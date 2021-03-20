import React from 'react';
import Router from "./Routing/Router";
import {useContextProvider} from "./Pages/ContextProvider/Context";
import style from './App.module.scss'
const App = () => {
    const {
        authenticate: {
            isAuthenticated,
        }
    } = useContextProvider()
    const routes = Router(isAuthenticated)
    return (
            <div className={style}>
                {routes}
            </div>

    );
}

export default App;
