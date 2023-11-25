import React from 'react';
function Details({user}) {
    return ( <div className='details'>
        <h3>Details Component</h3>
        <h3>Welcome {user.id}</h3>
        <h4>Have a Great Day {user.name}</h4>
    </div> );
}

export default Details;