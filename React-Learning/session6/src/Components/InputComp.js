import React, { useState } from 'react';

function InputComp() {
    const [input, setInput] = useState('');
    return (
        <div>
            <h3>Welcome {input}</h3>
            <input type='text' value={input} placeholder='Enter Name'
                onChange={(e) => setInput(e.target.value)} />
        </div>
    );
}

export default InputComp;