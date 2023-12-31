import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from "react-router-dom";
import Info from './Info';


const Create = () => {
  
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    
    let history = useNavigate();
 
   
    const handelSubmit = (e) => {
        e.preventDefault(); 
 
        const ids = uuid(); // Creating unique id
        let uni = ids.slice(0, 8); // Slicing unique id
 
       
        let a = name,
            b = email,
            c = phone;
        if (name == "" || email == "" || phone== "") {
            alert("invalid input");
            return;
        }
       Info.push({ Id: uni, Name: a, Email: b, Phone: c });
      
 
        history("/");
    };
 
    return (
        <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
                {/* Fetching a value from input textfirld 
                    in a setname using usestate*/}
                <Form.Group className="mb-3"  controlId="formBasicName">
                    <Form.Control 
                        onChange={(e) => setName(e.target.value)}
                        type="text"
                        placeholder="Enter Name" required />
                    </Form.Group>
 
               
                <Form.Group
                    className="mb-3"
                    controlId="formBasicAge" >
                    <Form.Control
                        onChange={(e) => setEmail(e.target.value) }
                        type="email"
                        placeholder="Email"
                        required/>
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicAge" >
                    <Form.Control
                        onChange={(e) => setPhone(e.target.value) }
                        type="phone"
                        placeholder="Phone"
                        required/>
                </Form.Group>
 
              
                <Button
                    onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                >
                    Submit
                </Button>
 
              
                <Link className="d-grid gap-2" to="/">
                    <Button variant="info" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    );
}

export default Create