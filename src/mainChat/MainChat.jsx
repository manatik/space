/* eslint-disable */
// hooks
import {useLocalStorage} from './hooks/useLocalStorage'
import {useChat} from './hooks/useChat'
// components
import {MessageForm} from './components/ChatRoom/MessageForm/MessageForm'
import {MessageList} from './components/ChatRoom/MessageList/MessageList'
import {UserList} from './components/ChatRoom/UserList/UserList'
// styles
import style from './chat.module.css'

const MainChat = () => {
  const roomId = 'chat'
  const [username] = useLocalStorage('username')
  const {users, messages, sendMessage, removeMessage} = useChat(roomId)

  return (
    <div className={style.main}>
      <div className={style.chatField}>
        <div className={style.online}>
          <span>Общий чат: </span>
          <UserList users={users}/>
        </div>
        <MessageList username={username} messages={messages} removeMessage={removeMessage}/>
        <MessageForm username={username} sendMessage={sendMessage}/>
      </div>
    </div>
  )
}
export default MainChat
