import React from 'react';
import MyChild from './MyChild';
import { useMyContext } from './MyContext';

function MyParent() {
    const {data}= useMyContext();
    return ( 
        <div>
            <h3>Parent Compo: {data}</h3>
            <MyChild />
        </div>
     );
}

export default MyParent;