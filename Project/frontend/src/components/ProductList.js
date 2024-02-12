import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function ProductList() {

    const [products, setProducts] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await axios.get('http://localhost:5000/api/product');
            setProducts(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <h3 className='text-center'>Product List</h3>
            <div className='row'>
                {
                    products.map(item => (
                        <div className='col-lg-3 col-md-6' key={item._id}>
                            <div className="card">
                                <img src={`http://localhost:5000/uploads/${item.picture}`}  
                                className="card-img-top" alt={item.name} height='200' width='200'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <h5 className='text-center'>${item.price}</h5>
                                        <p className="card-text">{item.description}</p>
                                        <Link to={`/products/${item._id}`} className="btn btn-primary">View Product</Link>
                                    </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ProductList;