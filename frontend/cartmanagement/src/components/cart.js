import React from 'react';
import { useSelector, useDispatch} from 'react-redux';
function Cart() {

    const cart = useSelector(state => state.cart.cartItems);
    const dispatch= useDispatch();
    const removefromcart=(id)=>{
        dispatch({type:'REMOVE_FROM_CART',payload:id})
    }

    return (
        <div>
            {
                cart.map(item => (
                    <>
                        <p>{item.name}</p>
                        <p>Quantity: {item.quantity}</p>
                        <button className='btn btn-danger' onClick={()=>removefromcart(item.id)}>X</button>
                    </>
                ))
            }
        </div>
    );
}

export default Cart;