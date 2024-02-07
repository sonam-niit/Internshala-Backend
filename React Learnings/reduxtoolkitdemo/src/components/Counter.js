import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment, set } from '../slice/counterSlice';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleSet = () => {
    const newValue = parseInt(inputValue);
    if (!isNaN(newValue)) {
      dispatch(set(newValue));
      setInputValue('');
    }
  };

  const [inputValue, setInputValue] = useState('');

  return (
    <div>
      <h1>Counter: {counter.value}</h1>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <input
          type="text"
          placeholder="Set value"
          value={inputValue}
          onChange={e => setInputValue(e.target.value)}
        />
        <button onClick={handleSet}>Set</button>
      </div>
    </div>
  );
};

export default Counter;
