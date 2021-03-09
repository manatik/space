import {useState} from 'react'

const useMainPage = () => {
    const [text, setText] = useState('level 1')

    const lishki = [
        {
            id: 1,
            name: 'Elementary',
            click: 'level 1'
        },
        {
            id: 2,
            name: 'Intermediate',
            click: 'level 2'
        },
        {
            id: 3,
            name: 'Pre-Intermediate',
            click: 'level 3'
        },
        {
            id: 4,
            name: 'Upper-Intermediate',
            click: 'level 4'
        }
    ]
    return {
        lishki,text,setText
    }
}
export default useMainPage
