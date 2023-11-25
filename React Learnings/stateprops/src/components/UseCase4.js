import React, { useState } from 'react';
function UseCase4() {

    const [input,setInput]= useState('');
    const [items, setItems] = useState(['Pen', 'Pencil', 'Scale']);

    const handleAdd=()=>{
        setItems([...items,input]);//update my array state
        //spread operator
        setInput('');
    }
    return (
        <div>
            <h3>Item List</h3>
            <ul>
                {items.map((item,index)=>(
                    <li key={index}>{item}</li>
                ))}
            </ul>
            <input type='text' placeholder='Type New Item' 
            value={input} onChange={(e)=>setInput(e.target.value)}/>

            <button onClick={handleAdd}>Add Item</button>
        </div>
    );
}

export default UseCase4;