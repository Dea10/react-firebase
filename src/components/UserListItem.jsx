import { useForm } from "../hooks/useForm";
import { deleteDocument, getDocuments, updateDocument } from "./dbUtils";
import './UserListItem.css';

const UserListItem = ({ user, setUsers }) => {
    const initialForm = { name: user.name, age: user.age }
    const [values, handleInputChange] = useForm(initialForm);

    const { name, age } = values;
    const { id } = user;

    const handleUpdate = async (event) => {
        event.preventDefault();
        updateDocument(id, { name, age })

        const users = await getDocuments();

        setUsers(users);
    }

    const handleDelete = async (event) => {
        event.preventDefault();
        deleteDocument(id);

        const users = await getDocuments();

        setUsers(users);
    }

    return (
        <form className="user-record">
            <input onChange={handleInputChange} className="input-update" type="text" name="name" value={name} />
            <input onChange={handleInputChange} className="input-update" type="number" name="age" value={age} />
            <button className="btn btn-warning mx-2" onClick={handleUpdate}>update</button>
            <button className="btn btn-danger mx-2" onClick={handleDelete}>delete</button>
        </form>
    )
}

export default UserListItem;