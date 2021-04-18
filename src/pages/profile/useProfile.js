// packages
import { useCallback, useEffect, useState } from 'react'
// hooks
import { useHttp } from '../../api/api'
import { useContextProvider } from '../../hooks/context'
import { useMessage } from '../../hooks/msg.hook'

export const useProfile = () => {
  const { clearError, error, loading, request } = useHttp()
  const {
    modals: { modalForm, setModalForm } = {},
    data: { data, setData } = {}
  } = useContextProvider() || {}
  const message = useMessage()

  const [toggle, setToggle] = useState(false)
  const [progress, setProgress] = useState({})
  const dataUserFromLS = JSON.parse(localStorage.getItem('userData'))
  const id = dataUserFromLS.userId

  const editProfile = () => {
    setToggle(true)
  }

  useEffect(() => {
    message(error)
    clearError()
  }, [error, message, clearError])

  const handleChange = (e) => {
    setModalForm({ ...modalForm, [e.target.name]: e.target.value, id: dataUserFromLS.userId })
  }

  const saveProfile = async () => {
    try {
      await request('/api/profile/update', 'POST', { ...modalForm })
      setToggle(false)
    } catch (e) {
    }
  }

  const getProfileData = useCallback(async () => {
    try {
      const getDataUser = await request('/api/profile/data', 'POST', { id })
      setData({
        email: getDataUser.data.email,
        imageProfile: getDataUser.data.imageProfile,
        name: getDataUser.data.name,
        phone: getDataUser.data.phone
      })
      const getProgress = await request('/api/profile/progress', 'POST', { id })
      setProgress(getProgress)
    } catch (e) {
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (data) {
      getProfileData().then()
    }
    // eslint-disable-next-line
  }, [!toggle])

  return { data, editProfile, handleChange, loading, progress, saveProfile, setToggle, toggle }
}
