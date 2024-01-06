import React from 'react';

//Directly Destructure the Props
function PropsDemo2({name,title}) {
    return ( 
        <div>
            <h3>Name: {name}, Title: {title}</h3>
        </div>
     );
}

export default PropsDemo2;