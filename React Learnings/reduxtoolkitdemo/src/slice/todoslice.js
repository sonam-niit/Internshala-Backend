// Import necessary functions from Redux Toolkit
import {createSlice } from '@reduxjs/toolkit';

// Define initial state
const initialState = {
    todos: []
};

// Create a slice of state
const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo(state, action) {
            state.todos.push(action.payload);
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(todo => todo.id !== action.payload);
        },
        toggleTodo(state, action) {
            const todo = state.todos.find(todo => todo.id === action.payload);
            if (todo) {
                todo.completed = !todo.completed;
            }
        }
    }
});

// Export action creators
export const { addTodo, removeTodo, toggleTodo } = todosSlice.actions;

//export Reducer

export const todosReducer = todosSlice.reducer;