import React from 'react';

function Child({data,setData}) {
    return ( 
        <div>
            <h2>Child Compo</h2>
            <p>Data:{data}</p>
            <input type='text' value={data} onChange={setData} />
        </div>
     );
}

export default Child;