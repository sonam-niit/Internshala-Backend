import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

function ProductDetails() {

    const [product,setProduct]=useState(null);
    const {id}=useParams();

    const fetchData=async ()=>{
        try {
            const resp= await axios.get('http://localhost:5000/api/product/details/'+id);
            setProduct(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div>
            <h3>Product details</h3>
            {product && 
                <h3>{product.name}</h3>
            }
        </div>
      );
}

export default ProductDetails;