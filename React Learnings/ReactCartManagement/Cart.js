import React from 'react';
function Cart({cart,setCart}) {

    const handleInc=(id)=>{
        const foundIndex=cart.findIndex((x)=>x.item.id===id);
        if(foundIndex!==-1){
            const existingCart=[...cart];
            existingCart[foundIndex].quantity+=1;
            setCart(existingCart);
        }
    }
    const handleDec=(id)=>{
        const foundIndex=cart.findIndex((x)=>x.item.id===id);
        if(foundIndex!==-1){
            const existingCart=[...cart];
            existingCart[foundIndex].quantity-=1;
            setCart(existingCart);
        }
    }
    const remove=(id)=>{
        setCart(cart.filter(item=>item.item.id!==id));
    }
    return ( 
        <div>
            <h2>CART Page</h2>
            <p>{cart.length>0?`${cart.length} items in CART`:`CART is EMPTY`}</p>
            {cart.map(x=>(
                <div key={x.item.id}>
                    <h3>{x.item.name}, No Of Q:{x.quantity}
                    <button onClick={()=>handleInc(x.item.id)}>+</button>
                    <button onClick={()=>handleDec(x.item.id)}>-</button>

                    <button onClick={()=>remove(x.item.id)}>RemoveFromCart</button>
                    </h3>
                </div>
            ))}
        </div>
     );
}

export default Cart;