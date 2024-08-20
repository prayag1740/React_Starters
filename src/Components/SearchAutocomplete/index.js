import React, { useEffect, useState } from 'react'
import "./search.css"

export default function SearchAutoComplete() {

    const [users, setUsers] = useState([]);
    const [userName, setUserName] = useState('');
    const [filteredUsers, setFilteredUsers] = useState([]);

    const fetchAPIUsers = async () => {
        const url = "https://dummyjson.com/users" ;
        const response = await fetch(url) ;
        const data = await response.json() ;
        const data_filtered = data.users
        const userData = data_filtered.map(user => ({
            id: user.id,
            username : user.username
        }));
        setUsers(userData);
    }

    useEffect(() => {
        fetchAPIUsers();
    }, []);

    const handleUserName = (event) => {
        const input = event.target.value ;
        setUserName(input);
        if (input === "") {
            setFilteredUsers([]);
        } else {
        const filteredUsers = users.filter(user => user.username.startsWith(input, 0));
        setFilteredUsers(filteredUsers);
        }
    }
    console.log(userName, filteredUsers);
    
  return (
    <div className='autocomplete-container'>
        <input type='text' value={userName} onChange={handleUserName}></input>
        {filteredUsers && filteredUsers.map(user => (
            <li key={user.id}>{user.username}</li>
        ))}
    </div>
  )
}
