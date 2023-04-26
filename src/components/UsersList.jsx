import UserListItem from "./UserListItem";
import './UsersList.css';

const UsersList = ({users, setUsers}) => {

    return(
        <ol className="user-list">
            {
                users.map( user => (<UserListItem setUsers={setUsers} key={user.id} user={user} />))
            }
        </ol>
    )
}

export default UsersList;