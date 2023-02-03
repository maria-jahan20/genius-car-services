import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import axiosPrivate from '../../api/axiosPrivate';
import auth from '../../firebase.init';

const OrderHistory = () => {
    const [user]=useAuthState(auth);
    const [orders,setOrders]=useState([]);
    const navigate=useNavigate();
    useEffect(()=>{
        const getOrder=async()=>{
            const email=user?.email;
            const url = `https://genius-car-db.up.railway.app/order?email=${email}`;
           try{
             const { data } = await axiosPrivate.get(url)
              
             setOrders(data);

           }
           catch(error){
            console.log(error.message);
            if(error.response.status===403 || error.response.status===401){
                signOut(auth);
              navigate("/login");
            }

           }
        }
        getOrder();
        // const email=user.email;
        // fetch(`http://localhost:5000/order?email=${email}`)
        // .then(res=>res.json())
        // .then(data=>setOrders(data))
    },[user])
    return (
        <div>
            <h1>{orders.length}</h1>
            {
                orders.map(order=><div key={order._id}>
                    <p>{order.email}</p>
                    <p>{order.address}</p>
                    <p>{order.service}</p>
                    </div>)
            }
            {/* {
                orders.map(order=>{
                    <div><h1>{order.service}</h1></div>
                }) 
            }
             */}
        </div>
    );
};

export default OrderHistory;