import React from 'react';
import { useParams } from 'react-router-dom';
import users from './users.json';

function Details() {
    const {id}= useParams();//to read URL parameter
    const user= users.find((item)=>item.id==id);
    return ( 
        <div className='container'>
            <h3 className='mt-3 text-bg-info p-3'>{user.username} Details</h3>
            <ul className='list-group mt-3'>
                <li className='list-group-item'>Name: {user.name}</li>
                <li className='list-group-item'>Email: {user.email}</li>
                <li className='list-group-item'>Phone: {user.phone}</li>
                <li className='list-group-item'>Website: {user.website}</li>
                <li className='list-group-item'>Company: {user.company.name},
                 {user.company.catchPhrase}, {user.company.bs}</li>
                <li className='list-group-item'>Address: {user.address.city}, {user.address.suite}
                {user.address.street}, {user.address.zipcode}</li>
            </ul>
        </div>
     );
}

export default Details;