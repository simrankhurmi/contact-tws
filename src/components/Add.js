import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, FormGroup, table } from 'react-bootstrap';
import Info from './Info';
import {v4 as uuid} from "uuid";
import { Link, useNavigate } from 'react-router-dom';



const Add = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  let history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const ids = uuid();
    let uniqueId = ids.slice(0, 8);

    let a = name;
    let b = email;
    let c = phone;
    Info.push({ Id: uniqueId, Name: name, Email: email, Phone: phone });

    history("/");
  };

  return (
    <>
      <Form className='d-grid gap-3'>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Control type='text' placeholder='Enter Name' value={a} required onChange={(e) => setName(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formEmail'>
          <Form.Control type='email' placeholder='Enter Your Email' value={b} required onChange={(e) => setEmail(e.target.value)} />
        </Form.Group>
        <Form.Group className='mb-3' controlId='formphone'>
          <Form.Control type='number' placeholder='Enter Your Phone' value={c} required onChange={(e) => setPhone(e.target.value)} />
        </Form.Group>

        <Button type='submit' onClick={(e)=>handleSubmit(e)}>
          Update
        </Button>
      </Form>
    </>
  );
};

export default Add;