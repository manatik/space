/* eslint-disable */
// packages
import { useCallback, useState } from 'react'
import {QueryClient, useQuery} from 'react-query'
export const useHttp = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const request = useCallback(async (url, method = 'GET', body = null, headers = {}) => {
    setLoading(true)
    try {
      if (body) {
        body = JSON.stringify(body)
        headers['Content-Type'] = 'application/json'
      }
      const response = await fetch(url, { body, headers, method })
      const data = await response.json()
      if (!response.ok) {
        throw new Error(data.message || 'Что-то пошло не так')
      }

      setLoading(false)
      return data
    } catch (e) {
      setLoading(false)
      setError(e.message)
      throw e
    }
  }, [])

  const clearError = useCallback(() => setError(null), [])

  return { clearError, error, loading, request }
  // const request = (url, method = 'GET', body = null, headers = {}) => {
  //   try {
  //     if (body) {
  //       body = JSON.stringify(body)
  //       headers['Content-Type'] = 'application/json'
  //     }
  //     const {isLoading, error, data } = useQuery('data', () =>
  //       fetch(url, {body, headers, method}).then(res => res.json())
  //     )
  //     if (isLoading) return 'Loading...'
  //
  //     if (error) return 'An error has occurred' + error.message
  //
  //     return data
  //   } catch (e) {
  //
  //   }
  // }
  // return { request }
}
