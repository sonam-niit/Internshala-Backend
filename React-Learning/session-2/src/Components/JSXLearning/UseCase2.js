import React from 'react';

function Login() {
    return (<><h2>Login Here.....</h2></>)
}

function Dashboard() {
    return (<><h2>User Dashboard</h2></>)
}
// Conditional Rendering Using JSX
function UseCase2() {
    const isLoggedIn = false;

    return (<div className='mt-3'>
        <button className='btn btn-primary'>
            {isLoggedIn ? "logout" : "Login"}
        </button>
        {isLoggedIn ? <Dashboard /> : <Login />}
    </div>);
}

export default UseCase2;