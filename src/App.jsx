import { useEffect } from 'react';
import { useGetUsers } from './hooks/useGetUsers';
import Form from './components/Form'
import UsersList from './components/UsersList'
import './App.css';

const App = () => {

  const [ users, setUsers, fetchUsers ] = useGetUsers();

  useEffect( () => {
      fetchUsers();
  }, []);

  return (
    <div className='App'>
      <Form setUsers={setUsers} />
      <UsersList setUsers={setUsers} users={users} />
    </div>
  )
}

export default App
