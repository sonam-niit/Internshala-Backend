import React, { useState } from 'react';
function Sample() {
    
    const [name,setName]= useState('Sonam Soni')

    // let handleClick=()=>{
    //     setName('Internshala.COM')
    // }

    return ( <div>
        <h5>Sample Component:{name}</h5>
        <input type='text' name={name} onChange={(e)=>setName(e.target.value)}/>

        {/* <button onClick={handleClick}>Click Me</button> */}
    </div> );
}

export default Sample;