/* eslint-disable */
import TimeAgo from 'react-timeago'
// styles
import localizationRu from 'react-timeago/lib/language-strings/ru'
import buildFormatter from 'react-timeago/lib/formatters/buildFormatter'
import style from '../../../chat.module.css'

const formatter = buildFormatter(localizationRu)

export const MessageListItem = ({msg, removeMessage}) => {

  const handleRemoveMessage = (id) => {
    removeMessage(id)
  }

  const {messageId, messageText, senderName, createdAt, currentUser} = msg

  return (
    <div className={style.messageItem}>
      <div>
        <div>
          {senderName}
          <br/>
          {messageText}
        </div>
        <div style={{marginTop: '10px'}}>
          <TimeAgo date={createdAt} formatter={formatter}/>
          {currentUser && (
            <button
              className={style.btnRemoveMsg}
              onClick={() => handleRemoveMessage(messageId)}
            >
              Удалить
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
