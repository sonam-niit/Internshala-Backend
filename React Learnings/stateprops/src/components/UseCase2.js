import React, { useState } from 'react';
function UseCase2() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [fullName,setFullName]=useState(null);

    const handleClick=()=>{
        setFullName(firstName+" "+lastName);
    }
    return (<div>
        <input type='text' placeholder='Enter First Name'
            value={firstName} onChange={(e) => setFirstName(e.target.value)} />

        <input type='text' placeholder='Enter Last Name'
            value={lastName} onChange={(e) => setLastName(e.target.value)} />

        {/* <h3>Show Directly {firstName} {lastName}</h3> */}
        <button onClick={handleClick}>Show Full Name</button>
        <h3>{fullName ? 'Welcome '+ fullName :''}</h3>
    </div>);
}

export default UseCase2;