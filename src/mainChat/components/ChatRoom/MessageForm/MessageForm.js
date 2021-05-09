/* eslint-disable */
import { useState } from 'react'
// emoji
import { Picker } from 'emoji-mart'
import style from '../../../chat.module.css'
export const MessageForm = ({ username, sendMessage }) => {
  const [text, setText] = useState('')
  const [showEmoji, setShowEmoji] = useState(false)

  const handleChangeText = (e) => {
    setText(e.target.value)
  }

  const handleEmojiShow = () => {
    setShowEmoji((v) => !v)
  }

  const handleEmojiSelect = (e) => {
    setText((text) => (text += e.native))
  }

  const handleSendMessage = (e) => {
    e.preventDefault()
    const trimmed = text.trim()
    if (trimmed) {
      sendMessage({ messageText: text, senderName: username })
      setText('')
    }
  }

  return (
    <>
        <div className={style.inputForm}>
          <button type='button' onClick={handleEmojiShow}>
            смайлики
          </button>
          <input
            className={style.input}
            value={text}
            onChange={handleChangeText}
            type='text'
            placeholder='Введите сообщение'
          />
          <button type='submit' onClick={handleSendMessage} className={style.sendBtn}>
            отправить
          </button>
        </div>
      {showEmoji && <Picker onSelect={handleEmojiSelect} emojiSize={20} />}
    </>
  )
}
