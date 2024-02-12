import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Products() {

    const [products,setProducts]=useState([]);
    const fetchData=async()=>{
        try {
            const resp= await axios.get('http://localhost:5000/api/product');
            setProducts(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return ( 
        <div>
            <h3 className='text-center'>Product List</h3>
            <table className='table table-bordered table-striped'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Description</th>
                        <th>Picture</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((item)=>(
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.price}</td>
                                <td>{item.description}</td>
                                <td>
                                    <img src={`http://localhost:5000/uploads/${item.picture}`} height='100' width='100' alt={item.name}/>
                                </td>
                                <td>{item.quantity}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
     );
}

export default Products;