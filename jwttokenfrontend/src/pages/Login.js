import axios from 'axios';
import React, { useState } from 'react';
import { Button, CardImg, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
    const [user, setUser] = useState({ email: '', password: '' });
    const navigate= useNavigate();
    const subminHandler = async (e) => {
        e.preventDefault();
        //console.log(user);
        try {
            const resp = await axios.post('https://jwtdemo.onrender.com/api/auth/login', user);
            //console.log(resp);
            if (resp.status == 200) {
                // alert(resp.data.message);
                console.log(resp);
                toast.success(resp.data.message);
                localStorage.setItem('token',resp.data.token);
                navigate('/dashboard');
            }
        } catch (error) {
            console.log(error);
            //alert(error.response.data.message)
            toast.error(error.response.data.message);
        }
    }
    return ( 
        <Row className='d-flex justify-content-center min-vh-100 align-items-center'>
            <Col lg={6}>
                <CardImg src='https://images.unsplash.com/photo-1702750722257-6bc38db1267a?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                    height="500"
                    alt='Brand Image' />
            </Col>
            <Col lg={6}>
                <Form className='mb-3' onSubmit={subminHandler}>
                    <Form.Group className='mb-3'>
                        <Form.Control type='email'
                            placeholder='john.doe@gmail.com'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='password'
                            placeholder='secret'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </Form.Group>
                    <Button type='submit' variant='dark'>
                        Login
                    </Button>
                </Form>
                <Form.Text className='mb-3'>
                    Don't have an account?
                    <Link to="/">Register Here</Link>
                </Form.Text>
            </Col>
        </Row>
     );
}

export default Login;