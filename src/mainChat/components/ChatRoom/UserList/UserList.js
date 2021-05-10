/* eslint-disable */
import style from '../../../chat.module.css'
export const UserList = ({users}) => {
    const activeUsers = Object.values(users)
        .filter((u) => u.online).length

    return (
        <div className={style.userList}>
            Онлайн: {activeUsers}
        </div>
    )
}
