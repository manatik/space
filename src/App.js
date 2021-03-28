// packages
import React from 'react'
// components
import Router from './routing/router'
// hooks
// styles
import style from './app.module.scss'
import { useContextProvider } from './hooks/context'

const App = () => {
  const { authenticate: { isAuthenticated } } = useContextProvider() || {}

  const routes = Router(isAuthenticated)

  return (
      <div className={style}>
          {routes}
      </div>

  )
}

export default App
