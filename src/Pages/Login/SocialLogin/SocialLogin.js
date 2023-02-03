import React from "react";
import { useSignInWithGithub, useSignInWithGoogle,useSignInWithFacebook } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import googleLogo from "../../../image//google.png";
import facebooklogo from "../../../image/facebooklogo.png";
import githublogo from "../../../image/github.png";
import { useLocation, useNavigate } from "react-router-dom";
import Loading from "../../../Shared/Loading/Loading";
import useToken from "../../../hooks/useToken";


const SocialLogin = () => {
const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
const [signInWithFacebook, user2, loading2, error2] = useSignInWithFacebook(auth);
const [token]=useToken(user ||user1);
const location=useLocation();
let errorElement;

  const navigate = useNavigate();
  const handleGoogleSignIn = () => {
    signInWithGoogle();
  };
  const handleGithubSignIn=()=>{
    signInWithGithub();
  }
  const handleFacebookSignIn=()=>{
    signInWithFacebook();
  }
   let from = location.state?.from?.pathname || "/";
  if (error || error1 ||error2) {
    errorElement = (
      <p className="text-danger">
        Error: {error?.message} {error1?.message} {error2?.message}
      </p>
    );
  }
  if (loading || loading1||loading2) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate(from, {replace:true});
  }
  
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-primary w-50 mx-2"></div>
        <p className="mt-2">or</p>
        <div style={{ height: "1px" }} className="bg-primary w-50 mx-2"></div>
      </div>
      {errorElement}
      <div>
        
        <button
          onClick={handleGoogleSignIn}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ width: "30px" }} src={googleLogo} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
        <button onClick={handleGithubSignIn} className="btn btn-info w-50 d-block mx-auto my-2">
          <img style={{ width: "30px" }} src={githublogo} alt="" />
          <span className="px-2">Github Sign In</span>
        </button>
        <button onClick={handleFacebookSignIn} className="btn btn-info w-50 d-block mx-auto my-2">
          <img style={{ width: "30px" }} src={facebooklogo} alt="" />
          <span className="px-2">Facebook Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
