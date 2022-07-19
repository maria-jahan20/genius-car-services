import React from 'react';
import { useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";



const ForgetPassword = () => {
    const [email,setEmail]=useState('');
    const [sendPasswordResetEmail, sending, error] =useSendPasswordResetEmail(auth);
    
  if (error) {
   
        toast('Please Enter Your Email');
  }
  if (sending) {
    return <p>Sending...</p>;
  }
    return (
      <div className="w-50 mx-auto ">
        <h2>Reset Password</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" required />
          </Form.Group>
          <Button
            onClick={async () => {
              await sendPasswordResetEmail(email);
              toast("Sent email");
            }}
            className="w-50  mx-auto d-block mb-2"
            variant="primary"
            type="submit"
          >
            Reset Password
          </Button>
        </Form>
        <ToastContainer></ToastContainer>
      </div>
    );
};

export default ForgetPassword;