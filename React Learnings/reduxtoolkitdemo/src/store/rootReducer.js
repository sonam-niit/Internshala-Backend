import { combineReducers } from '@reduxjs/toolkit';
import { todosReducer } from '../slice/todoslice';
import { counterReducer } from '../slice/counterSlice';


const rootReducer = combineReducers({
  counter: counterReducer,
  todos: todosReducer
});

export default rootReducer;
