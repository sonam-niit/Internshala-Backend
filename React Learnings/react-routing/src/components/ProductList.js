import React from 'react';
import products from './data/products';
import {Link} from 'react-router-dom';

function ProductList() {

    return (<div>
        <h3>Product List</h3>
        <table className='table table-bordered table-striped'>
            <thead><tr><th>Id</th><th>Name</th><th>Brand</th><th>Operations</th></tr></thead>
            <tbody>
                {
                    products.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.brand}</td>
                            <td><Link className='btn btn-success'
                             to={`/details/${item.id}`}>View</Link></td>
                        </tr>
                     ))
                }
            </tbody>
        </table>
    </div>);
}

export default ProductList;