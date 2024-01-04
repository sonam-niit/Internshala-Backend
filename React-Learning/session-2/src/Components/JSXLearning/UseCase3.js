import React from 'react';

function UseCase3() {
    const product = { id: 1, name: "Pencil", price: 10, rating: 4.0 }
    //Browser will not accept the objects directly
    //Either print object by converting it in String using stringify or
    //Print individual values by its properties
    return (<>
        {JSON.stringify(product)}
        {/* Above line is for developers testing */}
        {/* Below code we will use for our real time App */}
        <h3>Id: {product.id}</h3>
        <h3>Name: {product.name}</h3>
        <h3>Price: {product.price}</h3>
        <h3 className={product.rating > 4 ? 'text-success' : 'text-danger'}>
            Rating: {product.rating}</h3>
    </>);
}

export default UseCase3;