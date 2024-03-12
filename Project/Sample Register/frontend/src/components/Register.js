import axios from 'axios';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
function Register() {

    const [user,setUser]= useState({name:'',email:'',username:'',password:''})
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const resp= await axios.post('http://localhost:5000/api/auth/register',user);
            if(resp.status==201){
                toast.success(resp.data.message)
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return ( 
        <div>
            <form className='col-md-6' onSubmit={handleSubmit}>
                <h3 className='text-center text-bg-primary p-2'>Registration Form</h3>
                <div className='form-group mt-3'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name' className='form-control'
                    value={user.name} onChange={(e)=>setUser({...user,name:e.target.value})} />
                </div>
                <div className='form-group mt-3'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'
                    value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}  />
                </div>
                <div className='form-group mt-3'>
                    <label>Username</label>
                    <input type='text' placeholder='Enter Username' className='form-control'
                    value={user.username} onChange={(e)=>setUser({...user,username:e.target.value})}  />
                </div>
                <div className='form-group mt-3'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter Password' className='form-control'
                    value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}  />
                </div>
                <button type='submit' className='btn btn-primary mt-3'>Register Me</button>
            </form>
        </div>
     );
}

export default Register;