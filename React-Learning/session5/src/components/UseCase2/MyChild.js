import React from 'react';
import { useMyContext } from './MyContext';
function MyChild() {

    const {data,setData}
    =useMyContext();
    return ( <div>
        <h3>Child Component</h3>
        <h4>{data}</h4>
        <button 
        onClick=
        {()=>setData("Hello From Internshala")}>Click Me</button>
    </div> );
}

export default MyChild;