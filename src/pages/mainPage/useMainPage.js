// packages
import { useState } from 'react'

const useMainPage = () => {
  const [text, setText] = useState('level 1')

  const lishki = [
    {
      click: 'level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1level 1',
      id: 1,
      name: 'Elementary'
    },
    {
      click: 'level 2',
      id: 2,
      name: 'Intermediate'
    },
    {
      click: 'level 3',
      id: 3,
      name: 'Pre-Intermediate'
    },
    {
      click: 'level 4',
      id: 4,
      name: 'Upper-Intermediate'
    }
  ]
  return {
    lishki, setText, text
  }
}
export default useMainPage
