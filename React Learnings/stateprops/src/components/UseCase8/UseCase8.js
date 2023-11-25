import React, { useState } from 'react';
import Form from './Form';
import Details from './Details';
import './test.css';
function UseCase8() {

    const [user,setUser]=useState([{id:1,name:'alex'},{id:2,name:'Bob'}]);
    const [selected,setSelected]= useState(null);
    const addUser=(u)=>{
        setUser([...user,u]);
        alert("User Added Successfully")
    }
    return ( 
        <div className='divcon'>
            <h4>User's List</h4>
            <table>
                <thead><tr><th>Id</th><th>Name</th></tr></thead>
                <tbody>
                    {user.map(item=>(
                        <tr key={item.id} onClick={()=>setSelected(item)}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <Form addUser={addUser} />
            {selected && <Details user={selected}/>}
        </div>
     );
}

export default UseCase8;