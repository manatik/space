/* eslint-disable */
import { useParams } from 'react-router-dom'
// hooks
import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useChat } from '../../hooks/useChat'
// components
import { MessageForm } from './MessageForm/MessageForm'
import { MessageList } from './MessageList/MessageList'
import { UserList } from './UserList/UserList'
// styles
import style from '../../chat.module.css'
export function ChatRoom() {
  const { roomId } = useParams()
  const [username] = useLocalStorage('username')
  const { users, messages, sendMessage, removeMessage } = useChat(roomId)

  return (
    <div className={style.main}>
      <h2 className={style.caption}>Добро пожаловать в общий чат</h2>
      <UserList users={users} />
      <MessageList messages={messages} removeMessage={removeMessage} />
      <MessageForm username={username} sendMessage={sendMessage} />
    </div>
  )
}
