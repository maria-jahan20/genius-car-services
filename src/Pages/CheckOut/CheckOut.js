import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import useServiceById from '../../hooks/UseServiceById';
import PageTitle from '../../PageTitle/PageTitle';
import { useAuthState } from "react-firebase-hooks/auth";
import auth from '../../firebase.init';
import axios from 'axios';
import { toast } from 'react-toastify';

const CheckOut = () => {
    const {serviceId}=useParams();
    const [service]=useServiceById(serviceId);
    const [user] = useAuthState(auth);
    console.log(user);
    // const [user,setUser]=useState({
    //     name:'Maria Jahan',
    //     email:'maria78@gmail.com',
    //     address:'Building No-5 Tower No-1 Flat No-0201 Rakeen City,Mirpur-13',
    //     phone:'0111111111111'
    // })
    // const handleAddressChange=event=>{
    //     const {address,...rest}=user;
    //     const newAddress=(event.target.value);
    //     const newUser={address: newAddress, ...rest}
    //     setUser(newUser);
    //     console.log(newUser);
    // }
    const handlePlaceOrder=event=>{
        event.preventDefault();
        const order={
            service:service.name,
            serviceId:serviceId,
            address:event.target.address.value,
            phone:event.target.phone.value,

        }
        axios
          .post("https://genius-car-db.up.railway.app/orders", order)
          .then((res) => {
            const { data } = res;
            if (data.insertedId) {
              toast("Your Order Is Booked");
              event.target.reset();
            }
          });
    }

    return (
      <div className="w-50 mx-auto">
        <PageTitle title="Checkout"></PageTitle>
        <h2>please pay for your booking</h2>
        <img className="w-100 mb-3" src={service.img} alt="" />
        <form className="w-50 mx-auto" onSubmit={handlePlaceOrder}>
          <input
            className="w-100 mb-3"
            type="text"
            value={user.displayName}
            name="name"
            placeholder="name"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="w-100 mb-3"
            type="email"
            value={user.email}
            name="email"
            placeholder="Your Email"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="w-100 mb-3"
            type="text"
            value={service.name}
            name="service"
            placeholder="Service"
            required
            readOnly
            disabled
          />
          <br />
          <input
            className="w-100 mb-3"
            type="text"
            // value={user.Password}
            name="address"
            placeholder="Address"
            autoComplete='off'
            required
          />
          <br />
          <input
            className="w-100 mb-3"
            type="text"
            // value={user.phone}
            name="phone"
            placeholder="Phone Number"
            required
          />
          <br />
          <input
            className="btn btn-primary d-block mx-auto mb-3"
            type="submit"
            name=""
            id=""
          />
        </form>
      </div>
    );
};

export default CheckOut;