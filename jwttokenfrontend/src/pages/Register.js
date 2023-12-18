import axios from 'axios';
import React, { useState } from 'react';
import { Button, CardImg, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import swal from 'sweetalert';
function Register() {
    const [user, setUser] = useState({ name: '', email: '', username: '', password: '' });
    const subminHandler = async (e) => {
        e.preventDefault();
        //console.log(user);
        try {
            const resp = await axios.post('http://localhost:5000/api/auth/register', user);
            //console.log(resp);
            if (resp.status == 201) {
                // alert(resp.data.message);
                toast.success(resp.data.message);
                setUser({ name: '', email: '', username: '', password: '' });
            }
        } catch (error) {
            console.log(error);
            //alert(error.response.data.message)
            //toast.error(error.response.data.message);
            swal({
                title: "Error",
                text:error.response.data.message,
                icon: "warning",
                dangerMode: true,
            })
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
                        <Form.Control type='text'
                            placeholder='John Doe'
                            value={user.name}
                            onChange={(e) => setUser({ ...user, name: e.target.value })} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='email'
                            placeholder='john.doe@gmail.com'
                            value={user.email}
                            onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='text'
                            placeholder='johndoe1'
                            value={user.username}
                            onChange={(e) => setUser({ ...user, username: e.target.value })} />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Control type='password'
                            placeholder='secret'
                            value={user.password}
                            onChange={(e) => setUser({ ...user, password: e.target.value })} />
                    </Form.Group>
                    <Button type='submit' variant='dark'>
                        Register
                    </Button>
                </Form>
                <Form.Text className='mb-3'>
                    Already Registered?
                    <Link to="/login">Login Here</Link>
                </Form.Text>
            </Col>
        </Row>

    );
}

export default Register;