import React, { useEffect, useState } from 'react';
import {useParams, useNavigate} from 'react-router-dom';
import products from './data/products';

function Details() {

    const navigate= useNavigate();//for programatic routes
    const [product,setProduct]= useState({id:'',name:'',brand:''})

    const {pid}= useParams(); //destructring of url parameter

    const goback= ()=>{
        navigate(-1); // -1 to go back to previous page
    }
    //side effects run in the background and fetch data for that ID
    useEffect(()=>{
        setProduct(products.find(item=>item.id==pid));
    },[])
    return ( 
        <div>
            <button className='btn btn-secondary' onClick={goback}>Go Back</button>
            <h3>Product Details Componenet</h3>
            <hr></hr>
            <h4>Id: {pid}</h4>
            <h5>Name: {product.name}</h5>
            <h5>Brand: {product.brand}</h5>
            <img src={product.url} alt='product image'/>
        </div>
     );
}

export default Details;