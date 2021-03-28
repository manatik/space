import { useCallback, useEffect, useState } from 'react'
import { useHttp } from '../../api/api'
import { useContextProvider } from '../../hooks/context'
import { useMessage } from '../../hooks/msg.hook'

export const useProfile = () => {
  const { clearError, error, loading, request } = useHttp()
  const {
    loginModal: { modalForm, setModalForm } = {},
    profile: { dataUser, setDataUser } = {}
  } = useContextProvider() || {}

  const message = useMessage()
  const [toggle, setToggle] = useState(false)
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
      setDataUser({
        email: getDataUser.data.email,
        name: getDataUser.data.name,
        phone: getDataUser.data.phone
      })
    } catch (e) {
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    if (dataUser) {
      getProfileData().then()
    }
    // eslint-disable-next-line
  }, [])

  return { dataUser, editProfile, handleChange, loading, saveProfile, setToggle, toggle }
}
