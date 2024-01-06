import React from 'react';
function PropsDemo3({setIsLoggedIn}) {
    return ( 
        <div>
            <button onClick=
            {()=>setIsLoggedIn(true)}>
                Keep Me LoggedIn</button>
        </div>
     );
}

export default PropsDemo3;