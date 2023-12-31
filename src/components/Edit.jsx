import React, { useEffect, useState } from 'react'
import Info from './Info';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


const Edit = () => {
    const [id, setId] = useState("");
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
 

    let history = useNavigate();
 
    let index = Info.map(function (e) {
            return e.Id;
        }).indexOf(id);
 

    const handelSubmit = (e) => {
        e.preventDefault();
        if (name == "" || email == ""|| phone == "") {
            alert("invalid input");
            return;
        }
 
    
        let a = Info[index];
        a.Name = name;
        a.Email = email;
        a.Phone = phone;
        history("/");
    };
 
 
    useEffect(() => {
        setName(localStorage.getItem("Name"));
        setEmail(localStorage.getItem("Email"));
        setPhone(localStorage.getItem("Phone"));
        setId(localStorage.getItem("Id"));
    }, []);
  return (
    <>
    <div>
            <Form
                className="d-grid gap-2"
                style={{ margin: "5rem" }}
            >
               
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail">
                    <Form.Control
                        value={name}
                        onChange={(e) =>setName(e.target.value) }
                        type="text"
                        placeholder="Enter Name"/>
                </Form.Group>
 
                {/* setting a age from the input textfiled */}
                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword">
                    <Form.Control
                        value={email}
                        onChange={(e) =>
                            setEmail(e.target.value)
                        }
                        type="email"
                        placeholder="Email"
                    />
                </Form.Group>

                <Form.Group
                    className="mb-3"
                    controlId="formBasicPassword">
                    <Form.Control
                        value={phone}
                        onChange={(e) =>  setPhone(e.target.value) }
                        type="phone"
                        placeholder="Phone"  />
                </Form.Group>
 
            
                <Button onClick={(e) => handelSubmit(e)}
                    variant="primary"
                    type="submit"
                    size="lg">
                    Update
                </Button>
 
               
                <Link className="d-grid gap-2" to="/">
                    <Button variant="warning" size="lg">
                        Home
                    </Button>
                </Link>
            </Form>
        </div>
    </>
  )
}

export default Edit