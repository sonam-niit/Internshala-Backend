import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
function Profile() {
    const [user,setUser]= useState({name:'',username:'',email:''});
    const navigate= useNavigate();

    const fetchData=async()=>{
        const token=localStorage.getItem('token');
        if(token!=undefined){
        try {
            const resp=await axios('http://localhost:5000/api/user/profile',{
                headers:{Authorization:`Bearer ${token}`}
            })
            console.log(resp);
            if(resp.status==200){
                setUser(resp.data);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.responses.data.message);
            navigate('/login');
        }
    }
        else{
            toast.error('Login first to access Profile')
            navigate('/login');
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return ( 
        <div>
            <h1>Profile Page</h1>
            <h2>Welcome {user.name}</h2>
            <h3>{user.email}</h3>
            <h3>{user.username}</h3>
        </div>
     );
}

export default Profile;