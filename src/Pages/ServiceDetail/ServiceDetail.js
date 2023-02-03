import React, { useState } from 'react';
import { useEffect } from 'react';
import {useParams,Link} from 'react-router-dom';
import useServiceById from '../../hooks/UseServiceById';

const ServiceDetail = () => {
    const {serviceId}=useParams();
    const[service]=useServiceById(serviceId);
    

    return (
        <div className='text-center'>
            <h2>Welcome to detail:{service.name}</h2>
            <p>Description:{service.description}</p>
            <p>Price:{service.price}</p>
            <Link to={`/checkout/${serviceId}`}><button className='btn btn-primary'>Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;