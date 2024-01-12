import React, { useState } from 'react';
import MemChild from './MemChild';

function Memoization() {
    const [input, setInput] = useState("");
    const [count, setCount] = useState(0);

    const incrementCount=(e)=>setCount(count+1)
    // const incrementCount= React.useCallback(
    //     () => setCount(count+1), [count]
    // )
    return (
        <div>
            <input type='text' value={input}
                onChange={(e)=>setInput(e.target.value)} />

            <button onClick={incrementCount}>+</button>
            <h3>Input Text:{input}</h3>
            <h3>count: {count}</h3>

            <MemChild count={count} onClick={incrementCount} />
        </div>

    );
}

export default Memoization;