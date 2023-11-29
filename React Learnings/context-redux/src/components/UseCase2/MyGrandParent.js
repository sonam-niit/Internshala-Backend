import React from 'react';
import MyContextProvider, { useMyContext } from './MyContext';
import MyParent from './MyParent';

function MyGrandParent() {

    return ( 
        <MyContextProvider>
            <div>
                <h1>Grand Parent: </h1>
                <MyParent />
            </div>
        </MyContextProvider>
     );
}

export default MyGrandParent;