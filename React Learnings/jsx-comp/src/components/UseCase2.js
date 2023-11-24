import React from 'react';

function Login() {
    return ( <>
        <h2>Login Here</h2>
    </> );
}
function Dashboard() {
    return ( <>
        <h2>User Dashboard</h2>
    </> );
}
function UseCase2() {

    //for conditional rendering
    const isLoggedIn = true;
    const ele = isLoggedIn ? <p>Welcome User..!!</p> : <p>Kindly LogIn ...</p>
    return (
        <>
            <h1>Hello..</h1>
            <h2>Hiiiiiii</h2>
            {ele}
            <button> {isLoggedIn? 'Logout' : 'Login'} </button>
            { isLoggedIn ? <Dashboard /> : <Login />}
            {/* Conditional Based component Rendering */}
        </>
        // Wrap it in some Parent Tag like <div> or use JSX Fragent <> </>
    );
}

export default UseCase2;

