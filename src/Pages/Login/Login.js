import React, { useRef } from 'react';
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useNavigate, useLocation } from "react-router-dom";
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from './SocialLogin/SocialLogin';
import Loading from '../../Shared/Loading/Loading';



const Login = () => {
    const emailRef=useRef('');
    const passRef=useRef('');
    const navigate=useNavigate();
    const location =useLocation();
    let errorElement;
    const [signInWithEmailAndPassword, user, loading, error] =useSignInWithEmailAndPassword(auth);
    if (loading ) {
      return <Loading></Loading>;
    }
    
    const handleSubmit=event=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password=passRef.current.value;
        console.log(email,password);
        signInWithEmailAndPassword(email,password);
    }
      let from = location.state?.from?.pathname || "/";

    const navigateRegister=event=>{
        navigate('/register');
    }
    if(user){
            navigate(from, { replace: true });

    }
     if (error ) {
       errorElement = <p className="text-danger">Error: {error?.message}</p>;
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
          <Button className='w-50  mx-auto d-block mb-2' variant="primary" type="submit">
            Log in
          </Button>
        </Form>
        {errorElement}
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
        <p>Forget password ? <Link to='/forgetpassword' className='text-danger'>Click here</Link></p>
        <SocialLogin></SocialLogin>
      </div>
    );
};

export default Login;