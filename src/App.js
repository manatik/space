import React from 'react';
import Router from "./Routing/Router";
import {ContextProvider} from "./Pages/ContextProvider/Context";
import style from './App.module.scss'
const App = () => {

    return (
        // оберни в контекст провайдер, понадобится
        <ContextProvider>
            <div className={style}>
                <Router/>
            </div>
        </ContextProvider>
    );
}

export default App;
