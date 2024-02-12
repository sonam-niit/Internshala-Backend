import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
function ProductDetail() {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const fetchData = async () => {
        try {
            const resp = await axios.get(`http://localhost:5000/api/product/${id}`);
            setProduct(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                <img src={`http://localhost:5000/uploads/${product.picture}`}  
                             alt={product.name} height='400'/>
                </div>
                <div className='col-md-6 text-center'>
                    <h3>{product.name}</h3>
                    <h4>Price: ${product.price}</h4>
                    <p>Description: {product.description}</p>
                    <p>Available Quantity: {product.quantity}</p>
                </div>

            </div>
        </div>
    );
}

export default ProductDetail;