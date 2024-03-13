import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function Header() {

    const token = localStorage.getItem('token');
    const navigate= useNavigate();
    const handleLogout=()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        navigate('/login');
    }
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            {token ?
                                ""
                                : <Link to='register' className='nav-link'>Register</Link>
                            }

                        </li>
                        <li className="nav-item">
                            {token ?
                                <button className='nav-link' onClick={handleLogout}>logout</button>
                                : <Link to='login' className='nav-link'>Login</Link>
                            }
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
}

export default Header;