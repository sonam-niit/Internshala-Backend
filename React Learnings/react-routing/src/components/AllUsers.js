import React, { useState } from 'react';
import {Outlet} from 'react-router-dom';

function AllUsers() {

    const [users, setUsers] = useState([
        { id: 1, name: 'alex', skills: ['HTML', 'CSS'] },
        { id: 2, name: 'bob', skills: ['JS', 'Java'] }
    ])
    return (
        <div>
            <h3>All Users</h3>
            <div>
                {
                    users.map((item) => (
                        <p>{item.id}</p>
                    ))
                }
            </div>
            <Outlet />
        </div>
    );
}

export default AllUsers;