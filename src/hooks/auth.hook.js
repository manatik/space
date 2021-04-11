// packages
import { useCallback, useEffect, useState } from 'react'
import { useContextProvider } from './context'
// name localStorage
const storageName = 'userData'

export const useAuth = () => {
  const { authenticate: { setIsAuthenticated } } = useContextProvider() || {}
  const [token, setToken] = useState(null)
  const [userId, setUserId] = useState(null)
  const [ready, setReady] = useState(false)

  const login = useCallback((jwtToken, id) => {
    setToken(jwtToken)
    setUserId(id)
    localStorage.setItem(storageName, JSON.stringify({
      token: jwtToken, userId: id
    }))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    localStorage.removeItem(storageName)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storageName))
    if (data && data.token) {
      setIsAuthenticated(!!data.userId)
      login(data.token, data.userId)
    }
    setReady(true)
    // eslint-disable-next-line
  }, [login])

  return { login, logout, ready, token, userId }
}
