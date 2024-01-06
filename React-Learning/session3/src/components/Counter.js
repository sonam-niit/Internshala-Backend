import React, { useState } from 'react';

function Counter() {

    //const [stateName,stateUpdateFunction]=useState(initialValue)
    const [count,setCount]= useState(0);

    const handleIncrement=()=>{
        setCount(count+1);
    }
    const handleDecrement=()=>{
        setCount(count-1);
    }

    return ( 
        <div>
            <h1>Counter Component</h1>
            <h2>Count: {count}</h2>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
        </div>
     );
}

export default Counter;