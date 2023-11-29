import React from 'react';
import Child from './Child';
function Parent({data,setData}) {
    return ( 
        <div>
            <h2>Parent Comp</h2>
            <Child data={data} setData={setData} />
        </div>
     );
}

export default Parent;