import axios from 'axios';
import React, { useState } from 'react';
function AddProduct() {
    const [product, setProduct] = useState({ name: '', price: 120,picture:null });

    const submitHandler=async(e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append('name',product.name);
        formData.append('price',product.price);
        formData.append('picture',product.picture);

        try {
            await axios.post('http://localhost:5000/api/product/addproduct',formData,{
                headers:{
                    'Content-Type':'multipart/form-data'
                }
            })
            alert('Product Added');
        } catch (error) {
            console.log(error);
        }   
    }

    return (<div>
        <form onSubmit={submitHandler}>
            <input type='text' className='form-control mt-3' placeholder='Name of the Product'
                value={product.name} onChange={(e) => setProduct({ ...product, name: e.target.value })} />

            <input type='text' className='form-control mt-3' placeholder='Price of the Product'
                value={product.price} onChange={(e) => setProduct({ ...product, price: e.target.value })} />

            <input type='file' className='form-control mt-3' 
            onChange={(e)=>{setProduct({...product,picture:e.target.files[0]})}}/>

            <button className='btn btn-primary mt-3' type='submit'>Save Product</button>
        </form>
    </div>);
}

export default AddProduct;