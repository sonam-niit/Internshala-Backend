import React from 'react';
function UseCase7({setIsLoggedIn}) {
    return ( 
        <div>
            <button onClick={()=>setIsLoggedIn(true)}>Keep Me LoggrdIn</button>
        </div>
     );
     //From Child Call the prop function and change the state of parent Component from child
}

export default UseCase7;