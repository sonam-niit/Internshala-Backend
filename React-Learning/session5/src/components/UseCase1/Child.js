import React from 'react';

function Child({data}) {
    return ( 
        <div>
            <h3>Child Component</h3>
            <h4>{data}</h4>
        </div>
     );
}

export default Child;