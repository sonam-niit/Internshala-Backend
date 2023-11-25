import React, { useState } from 'react';
function UseCase1() {

    const [count,setCount]=useState(0);

    const handleInc=()=>{
        setCount(count+1);
    }
    const handleDec=()=>{
        setCount(count-1);
    }
    return (<>
            <p>Count: {count}</p>
            <button onClick={handleInc}>+</button>
            <button onClick={handleDec}>-</button>
            <button onClick={()=>setCount(0)}>Clear Counter</button>
    </>);
}

export default UseCase1;