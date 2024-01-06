import React, { useState } from 'react';

function Todo() {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');
    const handleClick=()=>{
        setTasks([...tasks,task]);//added new task in old array
        setTask('');
    }
    const deleteTask=(t)=>{
        setTasks(tasks.filter((item)=>item!=t))
    }
    return (
        <div>
            <h2>All Todos</h2>
            <ul>
                {
                    tasks.map((item, index) => (
                        <li key={index}>{item} <button onClick={()=>deleteTask(item)}>X</button></li>
                    ))
                }
            </ul>
            <hr></hr>
            <input type='text' placeholder='Enter Your Task' value={task}
            onChange={(e)=>setTask(e.target.value)}/>
            <button onClick={handleClick}>Add Task</button>
        </div>
    );
}

export default Todo;