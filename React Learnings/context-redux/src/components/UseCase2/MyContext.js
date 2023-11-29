import { createContext, useContext, useState } from "react";

const MyContext= createContext();

function MyContextProvider({children}){
    const [data,setData]= useState('Hello From Grand Parent');

    return(
        <MyContext.Provider value={{data,setData}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider;

export const useMyContext=()=>{
    return useContext(MyContext);
}