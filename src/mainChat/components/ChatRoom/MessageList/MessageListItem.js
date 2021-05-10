/* eslint-disable */
import TimeAgo from 'react-timeago'
// styles
import localizationRu from 'react-timeago/lib/language-strings/ru'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import style from '../../../chat.module.css'
import cn from "classnames";

const formatter = buildFormatter(localizationRu)

export const MessageListItem = ({msg, removeMessage, user}) => {

  const handleRemoveMessage = (id) => {
    removeMessage(id)
  }

  const {messageId, messageText, senderName, createdAt, currentUser} = msg

  return (
    <div className={cn(user == senderName ? style.messageAuthor : style.message)}>
      <span className={style.msgAuthor}>Отправил: {senderName}</span>
      <span className={style.msgText}>{messageText}</span>
      <div>
        <TimeAgo date={createdAt} formatter={formatter}/>
      </div>
      {currentUser && (
        <button className={style.btnRemoveMsg} onClick={() => handleRemoveMessage(messageId)}>Удалить сообщение</button>
      )}
    </div>
  )
}
