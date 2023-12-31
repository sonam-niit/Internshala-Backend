import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

function Register() {

    const navigate= useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        //apply logic to call APIs and store data in backend
        alert("User Registered Successfully");
        navigate('/login');
    }
    return (
        <div className='container'>
            <h3 className='text-center mt-3 text-bg-info p-2'>Register Here</h3>
            <Form className='mt-3' onSubmit={handleSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="John Doe" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" placeholder="john123" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder='**********'
                        aria-describedby="passwordHelpBlock"
                    />
                    <Form.Text id="passwordHelpBlock" muted>
                        Your password must be 8-20 characters long, contain letters and numbers,
                        and must not contain spaces, special characters, or emoji.
                    </Form.Text>
                </Form.Group>
                <Button variant="primary" type='submit'>Register</Button>{' '}
            </Form>
        </div>
    );
}

export default Register;