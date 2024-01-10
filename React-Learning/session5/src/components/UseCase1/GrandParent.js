import React, { useState } from 'react';
import Parent from './Parent';

function GrandParent({data}) {

    return ( 
        <div>
            <h1>Grand Parent</h1>
            <Parent data={data} />
        </div>
     );
}

export default GrandParent;