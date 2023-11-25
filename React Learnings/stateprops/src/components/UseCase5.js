import React, { useState } from 'react';
function UseCase5() {

    const [user, setUser] = useState({ id: '', name: '', email: '', passowrd: '' })

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(user);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='number' placeholder='Enter Id'
                    value={user.id} onChange={(e) => setUser({ ...user, id: e.target.value })} />
                <br /><br />
                <input type='text' placeholder='Enter Name'
                    value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} />
                <br /><br />
                <input type='email' placeholder='Enter Email'
                    value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                <br /><br />
                <input type='password' placeholder='**********'
                    value={user.passowrd} onChange={(e) => setUser({ ...user, passowrd: e.target.value })} />
                <br /><br />
                <button type='submit'>Register</button>
                {JSON.stringify(user)}
            </form>
        </div>
    );
}

export default UseCase5;