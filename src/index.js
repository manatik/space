// packages
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
// components
import App from './App'
// hooks
import { ContextProvider } from './hooks/context'

ReactDOM.render(
    <React.StrictMode>
        <ContextProvider>
            <Router>
                <App/>
            </Router>
        </ContextProvider>
    </React.StrictMode>,
    document.getElementById('root')
)
