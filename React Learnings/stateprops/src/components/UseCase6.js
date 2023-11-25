import React from 'react';
// function UseCase6(props) {
//     return ( 
//         <div>
//             <h3>Welcome {props.name}</h3>
//             <h3>Message {props.message}</h3>
//         </div>
//      );
// }
//Props Destructuring
function UseCase6({name,message}) {
    return ( 
        <div>
            <h3>Welcome {name}</h3>
            <h3>Message {message}</h3>
        </div>
     );
}

export default UseCase6;