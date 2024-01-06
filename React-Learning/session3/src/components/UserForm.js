import React, { useState } from 'react';

function UserForm() {

    //usf for writing state
    const [firstName,setFirstName]=useState('Sonam');
    const [lastName,setLastName]= useState('Soni');
    const [fullName, setfullName] = useState(null);
    const handleClick=()=>{
        setfullName(firstName+' '+lastName)
    }
    return ( 
        <div>
            <input type='text' placeholder='First name'
            onChange={(e)=>setFirstName(e.target.value)} value={firstName} />
            <input type='text' placeholder='Last Name'
            onChange={(e)=>setLastName(e.target.value)} value={lastName} />

            {/* <h1>Welcome {firstName} {lastName}</h1> */}
            <button onClick={handleClick}>Show FullName</button>
            <h3>{fullName ? 'Welcome '+fullName : ""}</h3>
        </div>
     );
}

export default UserForm;