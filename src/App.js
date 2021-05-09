// packages
import React from 'react'
// components
import Router from './routing/router'
import Loader from './components/loader/Loader'
// hooks
import { useContextProvider } from './hooks/context'
import { useAuth } from './hooks/auth.hook'
// styles
import style from './app.module.css'

const App = () => {
  const { ready } = useAuth()
  const { authenticate: { isAuthenticated } } = useContextProvider() || {}
  const routes = Router(isAuthenticated)

  if (!ready) {
    return <Loader/>
  }

  return (
      <div className={style.main}>
          {routes}
      </div>
  )
}

export default App
