import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Login() {

    const [user,setUser]= useState({email:'',password:''})
    const navigate=useNavigate();
    const handleSubmit=async (e)=>{
        e.preventDefault();
        try {
            const resp= await axios.post('https://internshala-backend-rzia.onrender.com/api/auth/login',user);
            if(resp.status==200){
                toast.success(resp.data.message);
                localStorage.setItem('token',resp.data.token);
                localStorage.setItem('userInfo',JSON.stringify(resp.data.payload));
                navigate('/dashboard')
            }
        } catch (error) {
            toast.error(error.response.data.message);
        }
    }
    return ( 
        <div>
            <form className='col-md-6' onSubmit={handleSubmit}>
                <h3 className='text-center text-bg-warning p-2'>Login Form</h3>
                <div className='form-group mt-3'>
                    <label>Email</label>
                    <input type='email' placeholder='Enter Email' className='form-control'
                    value={user.email} onChange={(e)=>setUser({...user,email:e.target.value})}  />
                </div>
                <div className='form-group mt-3'>
                    <label>Password</label>
                    <input type='password' placeholder='Enter Password' className='form-control'
                    value={user.password} onChange={(e)=>setUser({...user,password:e.target.value})}  />
                </div>
                <button type='submit' className='btn btn-primary mt-3'>Login Me</button>
            </form>
        </div>
     );
}

export default Login;