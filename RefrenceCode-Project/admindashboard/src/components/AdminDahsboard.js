import React from 'react';
import {Link,Outlet} from 'react-router-dom'

function AdminDashboard() {
    return ( 
        <div>
            <Link to='products'>Manage Products</Link>
            <Link to='users'>Manage Users</Link>

            <Outlet />
        </div>
     );
}

export default AdminDashboard;