/* eslint-disable */
import { useRef, useEffect } from 'react'
// components
import { MessageListItem } from './MessageListItem'
import style from '../../../chat.module.css'

export const MessageList = ({ messages, removeMessage }) => {
  const messagesEndRef = useRef(null)

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }, [messages])

  return (
    <>
      <div className={style.messageFormMain}>
        {messages.map((msg) => (
          <MessageListItem
            key={msg.messageId}
            msg={msg}
            removeMessage={removeMessage}
          />
        ))}
        <span ref={messagesEndRef}/>
      </div>
    </>
  )
}
