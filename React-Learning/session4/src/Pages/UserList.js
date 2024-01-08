import React from 'react';
import users from './users.json';
import { Link } from 'react-router-dom';

function UserList() {
    return ( 
        <div className='container'>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>UserName</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Phone</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.username}</td>
                                <td>{item.email}</td>
                                <td>{item.website}</td>
                                <td>{item.phone}</td>
                                <td>
                                    <Link to={`/users/${item.id}`} className='btn btn-success'>Details</Link>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default UserList;