import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

function CounterComponent() {

    //Read Global State using useSelector Hook
    const count= useSelector(state=>state.counterReducer.count);
    const dispatch= useDispatch();
    return (
        <div>
            <h3>Count: {count}</h3>
            <button onClick={()=>dispatch({type:"INCREMENT"})}>+</button>
            <button onClick={()=>dispatch({type:"DECREMENT"})}>-</button>
        </div>
      );
}

export default CounterComponent;