import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
function Dashboard() {

    const [title,setTitle]=useState('');
    const [desc,setDesc]=useState('');
    const [todos,setTodos]=useState([]);
    const token=localStorage.getItem('token');
    const fetchData=async()=>{
        try {
            const resp= await axios.get('https://internshala-backend-rzia.onrender.com/api/todo',{
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

    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const resp= await axios.post('https://internshala-backend-rzia.onrender.com/api/todo',
            {title,description:desc},
            {
                headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            toast.success("Todo added");
            setTodos([...todos,{title,description:desc}]);
            setTitle('');setDesc('')
        } catch (error) {
            console.log(error);
        }
    }
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
            <h3>Enter Your Todo Details</h3>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Enter Todo Title' className='form-control mt-3'
                value={title} onChange={(e)=>setTitle(e.target.value)}/>
                <input type='text' placeholder='Enter Todo Description' className='form-control mt-3'
                value={desc} onChange={(e)=>setDesc(e.target.value)}/>
                <button className='btn btn-primary mt-3'>Add Todo</button>
            </form>
        </div>
     );
}

export default Dashboard;