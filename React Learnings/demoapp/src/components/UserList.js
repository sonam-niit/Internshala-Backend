import axios from 'axios';
import React, { useEffect, useState } from 'react';
function UserList() {

    const [users, setUsers] = useState([]);

    const getData = async () => {
        try {
            // const resp = await fetch('https://jsonplaceholder.typicode.com/users');
            // const data= await resp.json();
            const resp = await axios.get('http://localhost:5000/user');
            console.log(resp.data);
            setUsers(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    //use UseEffect hook which will run in background to fetch Data
    useEffect(() => {
        getData();
    },[]) //[] says it will run only once when the comp renders
    return (<div>
        <h3>User List</h3>
        <table className='table table-striped table-bordered'>
            <thead>
                <tr><th>Id</th><th>Name</th><th>Age</th></tr>
            </thead>
            <tbody>
                {
                    users.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>);
}

export default UserList;