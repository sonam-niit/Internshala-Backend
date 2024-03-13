import axios from 'axios';
import React, { useEffect, useState } from 'react';
function Dashboard() {
    const [todos,setTodos]=useState([]);
    const token=localStorage.getItem('token');
    const fetchData=async()=>{
        try {
            const resp= await axios.get('http://localhost:5000/api/todo',{
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            setTodos(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
        <div>
            <h3>Dashboard</h3>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        todos.map((item)=>(
                            <tr key={item._id}>
                                <td>{item.title}</td>
                                <td>{item.description}</td>
                                <td>{item.status}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Dashboard;