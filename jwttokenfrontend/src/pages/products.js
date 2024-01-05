import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Products() {

    const navigate=useNavigate();
    const [products,setProducts]=useState([]);
    const viewProduct=(id)=>{
       navigate('/details/'+id);
    }
    const fetchData=async ()=>{
        try {
            const resp= await axios.get('http://localhost:5000/api/product/allproducts');
            setProducts(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])
    return (<div className='container'>

        <table className='table table-striped table-bordered'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Image</th>
                </tr>
            </thead>
            <tbody>
                {
                    products.map((item)=>(
                        <tr key={item._id}>
                            <td>{item.name}</td>
                            <td>{item.price}</td>
                            <td><img src={`http://localhost:5000/uploads/${item.picture.split('\\')[1]}`} 
                            height="100" width="100" alt={item.name}/></td>
                            <td><button onClick={()=>viewProduct(item._id)}>view</button></td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>);
}

export default Products;