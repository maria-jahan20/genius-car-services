import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {Navigate,useLocation} from 'react-router-dom';
import Loading from '../../../Shared/Loading/Loading';
import { toast,ToastContainer } from 'react-toastify';



const RequireAuth = ({children}) => {
    const [user,loading] = useAuthState(auth);
      const [sendEmailVerification, sending, error] =
        useSendEmailVerification(auth);
    let location = useLocation();
    if(loading || sending){
        return <Loading></Loading>
    }
    if(!user){
         return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(user.providerData[0].providerId==='password' && !user.emailVerified){
        return <div>
            <h1 className='text-danger text-center'>Your email is not verified</h1>
            <h2>Please Varify your Email Address</h2>
            <button  onClick={async () => {
          await sendEmailVerification();
          toast('Email Sent')}}
          className="btn btn-primary">Send Verification Email Again</button>
        </div>
    }
    return children;
};

export default RequireAuth;