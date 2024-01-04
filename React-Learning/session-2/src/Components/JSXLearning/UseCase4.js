import React from 'react';
function UseCase4() {

    const users = [
        { id: 1, name: 'Alex', email: 'alex@gmail.com', country: "US" },
        { id: 2, name: 'Bob', email: 'bob@gmail.com', country: "UK" },
        { id: 3, name: 'Catty', email: 'catty@gmail.com', country: "India" },
        { id: 4, name: 'John', email: 'john@gmail.com', country: "Indonesia" },
    ]
    return (<div>
        <h2>User's Data</h2>
        <table className='table table-bordered table-striped'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Country</th>
                </tr>
            </thead>
            <tbody>
                {
                    users.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.country}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>);
}

export default UseCase4;