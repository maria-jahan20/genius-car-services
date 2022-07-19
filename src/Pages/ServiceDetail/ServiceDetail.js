import React from 'react';
import {useParams,Link} from 'react-router-dom';

const ServiceDetail = () => {
    const {serviceId}=useParams();
    return (
        <div className='text-center'>
            <h2>Welcome to detail:{serviceId}</h2>
            <Link to='/checkout'><button className='btn btn-primary'>Checkout</button></Link>
        </div>
    );
};

export default ServiceDetail;