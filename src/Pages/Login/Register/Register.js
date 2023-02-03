import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from "react-firebase-hooks/auth";
import auth from '../../../firebase.init';
import { useNavigate } from "react-router-dom";
import SocialLogin from '../SocialLogin/SocialLogin';
import Loading from '../../../Shared/Loading/Loading';
import PageTitle from '../../../PageTitle/PageTitle';
import { toast, ToastContainer } from 'react-toastify';
import useToken from '../../../hooks/useToken';

const Register = () => {
  <PageTitle title="Register"></PageTitle>
  const [agree,setAgree]=useState(false);
     const [createUserWithEmailAndPassword,loading,user,error] = useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});
     const [updateProfile, updating, error1] = useUpdateProfile(auth);
     const [token]=useToken(user);

     const navigate=useNavigate();
     if (loading || updating) {
       return <Loading></Loading>;
     }
    const handleSubmit= async(event)=>{ 
        event.preventDefault();
      const displayName = event.target.displayName.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
    //     const agree=event.target.terms.checked;
        await createUserWithEmailAndPassword(email,password);
        await updateProfile({ displayName });
        toast("Profile Updated");
        navigate('/home');
     }
    if(token){
        navigate('/home');
        
    }
   

    return (
      <div className="w-50 mx-auto">
        <h2 className="text-center text-primary">Please Register</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formUserName">
            <Form.Label>User Name</Form.Label>
            <Form.Control
              type="text"
              name="displayName"
              placeholder="Enter User Name"
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
              required
            />
          </Form.Group>
          <input
            onClick={() => setAgree(!agree)}
            type="checkbox"
            name="terms"
            id="terms"
          ></input>
          <label
            className={agree ? "ps-2 text-primary " : "ps-2 text-danger"}
            htmlFor="terms"
          >
            Accept Terms and Condition
          </label>
          {agree ? (
            <Button
              className="w-50  mx-auto d-block mb-2 mt-2"
              variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
          ) : (
            <Button
              disabled
              className="w-50  mx-auto d-block mb-2 mt-2"
              variant="primary"
              type="submit"
            >
              Sign Up
            </Button>
          )}
        </Form>
        <p>
          Already have an account?
          <Link to="/login" className="text-danger">
            Please Login
          </Link>
        </p>
        <SocialLogin></SocialLogin>
      </div>
    );
};

export default Register;