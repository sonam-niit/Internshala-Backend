import { createContext, useContext, useState } from "react";


const AuthContext= createContext();

export const AuthProvider=({children})=>{

    const [user,setUser]=useState(null);

    const login= (userData)=>{
        console.log(userData);
        setUser(userData);
        //Login we do API
    }
    const logout=()=>{
        setUser(null);
    }

    return (
        <AuthContext.Provider value={{user,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuthContext=()=>{
    return useContext(AuthContext);
}