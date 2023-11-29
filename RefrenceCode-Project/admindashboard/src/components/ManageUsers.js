import axios from 'axios';
import React, { useEffect, useState } from 'react';

function ManageUsers() {

    const [users, setUsers] = useState([]);

    const getData = async () => {
        try {
            const resp = await axios.get('https://jsonplaceholder.typicode.com/users');

            setUsers(resp.data);

        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <h3>Users List <button>Add New User</button></h3>
            <table>
                <thead>
                    <tr>
                        <th>Id</th><th>Name</th><th>UserName</th><th>
                            Operations
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>
                                    <button>Edit</button>
                                    <button>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}

export default ManageUsers;