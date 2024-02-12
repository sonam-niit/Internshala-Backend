import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NewProduct() {
    const [product,setProduct]=useState({name:'',price:0,description:'',
    quantity:0,picture:null})

    const navigate= useNavigate();

    const handleSubmit=async(e)=>{
        e.preventDefault();
        const formData= new FormData();
        formData.append('name',product.name);
        formData.append('price',product.price);
        formData.append('description',product.description);
        formData.append('quantity',product.quantity);
        formData.append('picture',product.picture);

        try {
            const resp= await axios.post('http://localhost:5000/api/product',formData,{
                headers:{
                    "Content-Type":'multipart/form-data'
                }
            })
            if(resp.status===201){
                alert("Product Created");
                navigate('/products');
            }
        } catch (error) {
            console.log(error);
        }
    }
    return ( 
        <div>
            <h3>Add New Product</h3>
            <form onSubmit={handleSubmit}>
                <div className='form-group mt-3'>
                    <label>Name</label>
                    <input type='text' placeholder='Enter Name' value={product.name}
                    onChange={(e)=>setProduct({...product,name:e.target.value})} 
                    className='form-control'/>
                </div>
                <div className='form-group mt-3'>
                    <label>Price</label>
                    <input type='number' placeholder='Enter Price' value={product.price}
                    onChange={(e)=>setProduct({...product,price:e.target.value})}
                    className='form-control' />
                </div>
                <div className='form-group mt-3'>
                    <label>Description</label>
                    <input type='text' placeholder='Enter Description' value={product.description}
                    onChange={(e)=>setProduct({...product,description:e.target.value})}
                    className='form-control' />
                </div>
                <div className='form-group mt-3'>
                    <label>Quantity</label>
                    <input type='number' placeholder='Enter Quantity' value={product.quantity}
                    onChange={(e)=>setProduct({...product,quantity:e.target.value})} 
                    className='form-control'/>
                </div>
                <div className='form-group mt-3'>
                    <label>Select Picture</label>
                    <input type='file'
                    onChange={(e)=>setProduct({...product,picture:e.target.files[0]})}
                    className='form-control' />
                </div>
                <button type='submit' className='btn btn-primary w-100 mt-3'>Add Product</button>
            </form>
        </div>
     );
}

export default NewProduct;