import React from 'react';
import { useState } from 'react';

function FormComponent() {
    const [input,setInput]= useState('');
    return (
        <div>
            <input type='text' value={input} onChange={(e) => setInput(e.target.value)} />
            <h3>Input Text: {input}</h3>
        </div>
    );
}

export default FormComponent;