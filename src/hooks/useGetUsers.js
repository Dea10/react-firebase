import { useCallback, useState } from "react";
import { getDocuments } from "../components/dbUtils";


export const useGetUsers = () => {
    const [users, setUsers] = useState([]);
    
    const fetchUsers = useCallback(async () => {
        const users = await getDocuments();
    
        setUsers(users);
    })

    return [ users, setUsers, fetchUsers ];
}    
