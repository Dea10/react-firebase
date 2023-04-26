import { useForm } from "../hooks/useForm";
import { addDocument, getDocuments } from "./dbUtils";
import './Form.css';

const initialForm = {
    name: '',
    age: ''
}

const Form = ({ setUsers }) => {
    const [values, handleInputChange, reset] = useForm(initialForm);
    const { name, age } = values;

    const handleOnSubmit = async (event) => {
        event.preventDefault();

        await addDocument(values);

        reset();

        const users = await getDocuments();

        setUsers(users);
    }

    return (
        <div className="Form">
            <form className="form-floating">
                <div className="form-floating mb-3">
                    <input onChange={handleInputChange} id='name' className="form-control" placeholder="Name" type="text" name="name" value={name} />
                    <label for='name'>Name</label>
                </div>
                <div className="form-floating mb-3">
                    <input onChange={handleInputChange} id='age' className="form-control" placeholder="Age" type="number" name="age" value={age} />
                    <label for='age'>Age</label>
                </div>
            </form>
            <button type="button" onClick={handleOnSubmit} className="btn btn-primary">submit</button>
        </div>
    )

}

export default Form;