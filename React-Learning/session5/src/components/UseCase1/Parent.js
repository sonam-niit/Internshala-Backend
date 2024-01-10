import React from 'react';
import Child from './Child';

function Parent({data}) {
    return (
        <div>
            <h2>Parent Component</h2>
            <Child data={data} />
        </div>
      );
}

export default Parent;