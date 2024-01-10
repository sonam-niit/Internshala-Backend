import { createContext, useContext, useState } from "react";

//Create My Context
const MyContext= createContext();
//Coming Children as Prop
function MyContextProvider({children}){

    const [data,setData]= useState("Hello From Grand Parent..!");
    return (
        <MyContext.Provider value={{data,setData}}>
            {children}
        </MyContext.Provider>
    )
}

export default MyContextProvider;

export const useMyContext=()=>{
    return useContext(MyContext);
}