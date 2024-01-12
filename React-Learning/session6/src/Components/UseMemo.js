import React, { useState } from 'react';

const ChildComponent= React.memo(
    ({count,onClick})=>{
        return(
            <>
                <h3>Child Component</h3>
                <button onClick={onClick}>+</button>
            </>
        );
    }
)

const countCalculate=(count)=>{
    //long delay
    for(let i=0;i<1000000000;i++){}
    return count*2;
}

function UseMemo() {
    const [input,setInput]= useState("");
    const [count,setCount]= useState(0);
    // const incrementCount=()=>setCount(count+1)
    // const myCount= countCalculate(count);

    const myCount= React.useMemo(()=>{
        return countCalculate(count);
    },[count])

    const incrementCount=React.useCallback(()=>{
        setCount(count+1)
    },[count])
    return ( 
        <div>
            <h3>Use Memo Demo</h3>
            <input type='text' value={input} onChange={(e)=>setInput(e.target.value)}/>
            <h4>Text typed: {input}</h4>
            <h2>Count Calculation: {myCount}</h2>
            <ChildComponent count={count} onClick={incrementCount}/>
        </div>
     );
}

export default UseMemo;