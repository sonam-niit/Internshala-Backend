import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import axios from 'axios';

function Register() {

  const [id,setId]= useState('');
  const [name,setName]= useState('');
  const [age,setAge]= useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try {
      const resp=await axios.post('http://localhost:5000/user',{id,name,age});
      console.log(resp);
      if(resp.status==201){
        alert("User Added Successfully")
      }
    } catch (error) {
        console.log(error);
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Id</Form.Label>
        <Form.Control type="text" placeholder="109" value={id}
        onChange={(e)=>setId(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Sonam Soni" value={name}
        onChange={(e)=>setName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput2">
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" placeholder="78" value={age}
        onChange={(e)=>setAge(e.target.value)} />
      </Form.Group>
      <Button type='submit' variant="primary">Register</Button>{' '}
    </Form>

  );
}

export default Register;