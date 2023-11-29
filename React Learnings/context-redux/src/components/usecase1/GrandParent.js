import React, { useState } from 'react';
import Parent from './Parent';

function GrandParent() {
    const [data,setData]=useState('Hello From GrantParent')

    const changeData=(e)=>{
        setData(e.target.value);
    }
    return ( 
        <div>
            <h3>GrandParent</h3>
            <Parent data={data} setData={changeData} ></Parent>
        </div>
     );
}

export default GrandParent;