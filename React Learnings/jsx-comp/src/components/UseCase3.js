import React from 'react';

import users from './data.json';

//Print Array using JSX
function UseCase3() {
    //Print Object in JSX
    const product = { id: 1, name: "pencil", price: 20 }
    return (<>
        {JSON.stringify(product)}
        {/* Object pronting directly is not possible */}
        {product.id} {product.name} {product.price}

        <h3>User's List</h3>
        <ul>
            {users.map((item) => (
                <li key={item.id}>{item.id} {item.name} {item.email}</li>
            ))}
        </ul>
    </>);
}

export default UseCase3;