import React from 'react';
import {useNavigate} from 'react-router-dom';
function Login() {

    const navigate= useNavigate();

    const handleLogin=()=>{
        navigate('/admin');
    }
    return ( 
        <div>
            <button onClick={handleLogin}>Login</button>
        </div>
     );
}

export default Login;