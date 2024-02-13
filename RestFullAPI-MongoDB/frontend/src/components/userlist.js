import React, { useEffect, useState } from 'react';
import axios from 'axios';
function UserList() {
    const [users,setUsers]=useState([]);

    const fetchData=async()=>{
        try {
            const resp= await axios.get('https://crudapp-ojes.onrender.com/api/v1/user');
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
            {users.map(user=>(
                <p key={user._id}>
                    {user.name}, {user.email}
                </p>
            ))}
        </div>
      );
}

export default UserList;