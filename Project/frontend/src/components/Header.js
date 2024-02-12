import React from 'react';
import { Link } from 'react-router-dom';
function Header() {
    return (
        <div>
            <h3 className='mt-3 text-center text-bg-info p-2'>Product Management Application</h3>
            <ul className='nav'>
                <li className='nav-item'>
                    <Link to='/' className='nav-link'>Home</Link>
                </li>
                <li className='nav-item'>
                <Link to='/products' className='nav-link'>All Products</Link>
                </li>
                <li className='nav-item'>
                <Link to='/addproduct' className='nav-link'>Add New Product</Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;