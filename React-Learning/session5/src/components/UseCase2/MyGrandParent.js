import React from 'react';
import MyParent from './MyParent';
import MyContextProvider from './MyContext';
function MyGrandParent() {
    return (
        <MyContextProvider>
            <div>
                <h3>Grand Parent Component</h3>
                <MyParent />
            </div>
        </MyContextProvider>
    );
}

export default MyGrandParent;