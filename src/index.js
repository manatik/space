// packages
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom";
// components
import App from './App';
// hooks
import {ContextProvider} from "./hooks/context";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ContextProvider>
        <App/>
      </ContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
