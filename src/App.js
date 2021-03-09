import React from 'react';
import Router from "./Routing/Router";
import {ContextProvider} from "./Pages/ContextProvider/Context";

const App = () => {

    return (
        // оберни в контекст провайдер, понадобится
        <ContextProvider>
            <div>
                <Router/>
            </div>
        </ContextProvider>
    );
}

export default App;
