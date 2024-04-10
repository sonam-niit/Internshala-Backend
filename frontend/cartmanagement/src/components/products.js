import React, { useEffect, useState } from 'react';
import {useDispatch} from 'react-redux';
function Products() {

    const [products, setProducts] = useState([]);
    const dispatch= useDispatch();
    const fetchData = async () => {
        try {
            const resp=await fetch('https://jsonplaceholder.typicode.com/users');
            const json= await resp.json();
            setProducts(json);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    const addtocart=(product)=>{
        product.quantity=1;
        dispatch({type:'ADD_TO_CART',payload:product})
    }
    return (
        <div className='container'>
            <div className='row'>{
                products.map((product) => (
                    <div className='col'>
                        <div class="card">
                            <div className="card-body">
                                <h5 className="card-title">{product.name}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{product.username}</h6>
                                <p className="card-text">{product.address.stree},{product.address.suite}</p>
                                <button className="btn btn-primary" onClick={()=>addtocart(product)} >Add to CART</button>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Products;