import axios from "axios";
import { useEffect } from "react";
import { useState } from "react"
import { useAuthState } from "react-firebase-hooks/auth";

const useToken=user=>{
    const [token,setToken]=useState('');
    useEffect( ()=>{
         const getToken=async ()=>{
            const email=user?.user?.email;
           if (email) {
             const { data } = await axios.post(
               "https://genius-car-db.up.railway.app/login",
               { email }
             );
             setToken(data.accessToken);
             localStorage.setItem("accessToken", data.accessToken);
           }
           }
         getToken();

    },[user])
    return[token];
}
export default useToken;