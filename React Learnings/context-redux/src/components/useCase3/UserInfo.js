import React, { useState } from 'react';
import { useAuthContext } from './AuthContext';
function UserInfo() {

    const [userName,setUserName]=useState('');
    const [password,setPassword]=useState('');
    
    const {user,login,logout}=useAuthContext();

    const loginUser=()=>{
        login({userName,password});
        setUserName('');
        setPassword('');
    }
    return (
        <div>
            {
                user?(
                    <>
                    <p>Welcome {user.userName}</p>
                    <button onClick={logout}>Logout</button>
                    </>
                ):
                (
                    <>
                        <h3>Login Form</h3>
                        <input type='text' value={userName} 
                        onChange={(e)=>setUserName(e.target.value)} />
                        <input type='password' value={password} 
                        onChange={(e)=>setPassword(e.target.value)} />
                        <button onClick={loginUser}>Login</button>
                    </>
                )
            }
        </div>
     );
}

export default UserInfo;