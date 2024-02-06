import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Users() {
    const [users,setUsers]= useState([]);
    const [name,setName]= useState('');
    const fetchData=async()=>{
        try {
            // const resp= await axios.get('http://localhost:5000/user');
            // setUsers(resp.data);
            const resp= await fetch('http://localhost:5000/user');
            const json= await resp.json();
            setUsers(json);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    const handlesubmit=async(e)=>{
        e.preventDefault();
        try {
             // const resp= await axios.post('http://localhost:5000/user',{name});
            fetch('http://localhost:5000/user',{
                method:'POST',
                body:JSON.stringify({name}),
                headers:{
                    'content-type':'application/json'
                }
            })
            alert("User Inserted");
            fetchData();
            setName('')
        } catch (error) {
            console.log(error);
        }
    }
    const deleteUser=async(id)=>{
        try {
            await axios.delete('http://localhost:5000/user/'+id);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            <h1 className='mt-3 p-2 text-center text-bg-info'>Users List</h1>
            <table className='table table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>
                                    <button onClick={()=>deleteUser(item.id)} className='btn btn-danger'>X</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <h1 className='mt-3 p-2 text-center text-bg-info'>Add User</h1>
            <form onSubmit={handlesubmit}>
                <div className='form-group'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Your Name' value={name}
                    onChange={(e)=>setName(e.target.value)} className='form-control'/>
                </div>
                <button className='mt-3 btn btn-success w-100' type='submit'>Add User</button>
            </form>
        </div>
    );
}

export default Users;