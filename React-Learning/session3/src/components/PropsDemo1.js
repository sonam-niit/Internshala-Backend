import React from 'react';
import PropTypes from 'prop-types';

function PropsDemo1({name,message}) {

    // const name= props.name? props.name : "User";
    // const message= props.message? props.message :"Welcome";
    return ( 
        <div>
            <h1>Welcome {name}</h1>
            <p>Your Message: {message}</p>
        </div>
     );
}
//Setting up an default Props
PropsDemo1.propTypes={
    name:PropTypes.string.isRequired,
    message:PropTypes.string
}
PropsDemo1.defaultProps={
    name:"User",
    message:"Welcome"
}

export default PropsDemo1;