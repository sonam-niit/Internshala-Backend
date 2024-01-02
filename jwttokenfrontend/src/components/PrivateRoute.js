import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const PrivateRoute=({children,isAuthenticated,...rest})=>{

    const navigate= useNavigate();

    useEffect(()=>{
        if(!isAuthenticated){
            navigate('/login')
        }
    },[isAuthenticated,navigate])

    return isAuthenticated?<>{children}</>  :null
}
export default PrivateRoute;