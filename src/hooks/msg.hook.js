// packages
import { useCallback } from 'react'
import { toast } from 'react-toastify'
// styles
import 'react-toastify/dist/ReactToastify.css'

export const useMessage = () => {
  return useCallback(text => {
    return toast.dark(text, {
      autoClose: 5000,
      closeOnClick: true,
      draggable: true,
      hideProgressBar: false,
      pauseOnHover: true,
      position: 'top-center',
      progress: undefined
    })
  }, [])
}
