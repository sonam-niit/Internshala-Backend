import React, { useState } from 'react';
function Form({addUser}) {
    const [user, setUser] = useState({ id: '', name: ''})

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
        addUser(user);
        setUser({ id: '', name: ''})
    }

    return (
        <form onSubmit={handleSubmit} className='form'>
            <h5>Form Component</h5>
            <input type='number' placeholder='Enter Id'
                value={user.id} onChange={(e) => setUser({ ...user, id: e.target.value })} />
            <br /><br />
            <input type='text' placeholder='Enter Name'
                value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
            <br /><br />
            <button type='submit'>Register</button>
        </form>
    );
}

export default Form;