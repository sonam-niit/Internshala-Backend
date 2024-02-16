import React from 'react';

const products=[
    {
        id:1,
        name:"Laptop",
        price:67000
    },
    {
        id:2,
        name:"I phone",
        price:150000
    }
]
function Products({cart,setCart}) {
    const addToCart=(obj)=>{
        const foundIndex=cart.findIndex((x)=>x.item.id===obj.id);
        
        if(foundIndex!==-1){
            const existingCart=[...cart];
            existingCart[foundIndex].quantity+=1;
            setCart(existingCart);
        }else{
            setCart([...cart,{item:obj,quantity:1}])
        }
        
    }
    return ( 
        <div>
            <h3>Products Page</h3>
            {
                products.map((item)=>(
                    <div key={item.id}>
                        <hr/>
                        <h4>{item.name}</h4>
                        <h5>Price: {item.price}</h5>
                        <button onClick={()=>addToCart(item)}>Add to Cart</button>
                    </div>
                ))
            }
        </div>
     );
}

export default Products;