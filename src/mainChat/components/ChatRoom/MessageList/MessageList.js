/* eslint-disable */
import { useRef, useEffect } from 'react'
// components
import { MessageListItem } from './MessageListItem'
import style from '../../../chat.module.css'
import {useProfile} from "../../../../pages/profile/useProfile";
import cn from "classnames";

export const MessageList = ({ messages, removeMessage }) => {
  const { data } = useProfile() || {}
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
          <div key={msg.messageId} className={cn(style.messageItem, data.name == msg.senderName && style.messageItemAuthor)}>
          <MessageListItem
            user={data.name}
            msg={msg}
            removeMessage={removeMessage}
          />
          </div>
        ))}
        <span ref={messagesEndRef}/>
      </div>
    </>
  )
}
