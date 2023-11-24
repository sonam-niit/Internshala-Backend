import React, { useEffect, useState } from 'react';
function Counter() {
    const [count,setCount]=useState(0);

    //state will not change on the spot when you call setCount function
    //when the state change you want to get the actual value then use side effect
    const handleDec=()=>{
        setCount(count-1);
        //console.log("Decremented "+count);
    }
    const handleInc=()=>{
        setCount(count+1);
       // console.log("Incremented "+count);
    }
    useEffect(()=>{
        console.log(count);
    },[count])
    return ( <div>
        <h3>Count: {count}</h3>
        <button onClick={handleInc}>Increment</button>
        <button onClick={handleDec}>Decrement</button>
    </div> );
}

export default Counter;