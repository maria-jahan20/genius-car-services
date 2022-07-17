import React, { useRef } from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";


const Login = () => {
    const emailRef=useRef('');
    const passRef=useRef('');
    const navigate=useNavigate();
    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passRef.current.value;
        console.log(email,password);
    }
    const navigateRegister=event=>{
        navigate('/register');
    }
    
    return (
      <div className="w-50 mx-auto">
        <h2 className="text-primary text-center mt-12">please log in</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              ref={emailRef}
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              Fill up the box
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              ref={passRef}
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <p>
          New to Genius-car?{" "}
          <Link
            to="/register"
            className="text-danger"
            onClick={navigateRegister}
          >
            Please Register
          </Link>
        </p>
      </div>
    );
};

export default Login;