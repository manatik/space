// packages
import React from 'react'
// components
import Router from './routing/router'
// hooks
import { useContextProvider } from './hooks/context'
// styles
import style from './app.module.css'
import Loader from './components/loader/Loader'
import { useAuth } from './hooks/auth.hook'

const App = () => {
  const { ready } = useAuth()
  const { authenticate: { isAuthenticated } } = useContextProvider() || {}
  const routes = Router(isAuthenticated)

  if (!ready) {
    return <><Loader/></>
  }

  return (
      <div className={style}>
          {routes}
      </div>
  )
}

export default App
