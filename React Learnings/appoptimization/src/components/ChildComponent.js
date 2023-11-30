import React from 'react';
const ChildComponent= 
React.memo(function ChildComponent({count,setCount}) {
    console.log("Child Component is rendering"+count);
    return ( 
        <div>
            <h2>This is My Child Component</h2>
            <h4>Count: {count}</h4>
            <button onClick={setCount}>Increment</button>
        </div>
     );
});

export default ChildComponent;