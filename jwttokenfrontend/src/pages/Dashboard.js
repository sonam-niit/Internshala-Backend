import React, { useEffect } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Dashboard() {

    const navigate= useNavigate();

    useEffect(()=>{
        if(localStorage.getItem('token')==undefined)
            navigate('/login');
    },[])
    return ( 
        <Row className='d-flex justify-content-center min-vh-100 align-items-center'>
            <Col lg={6}>
                <h1>Welcome</h1>
                <Link to='/profile'>Profile</Link>
            </Col>
        </Row>
     );
}

export default Dashboard;