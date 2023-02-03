import React, { useEffect, useState } from 'react';
import PageTitle from '../../../PageTitle/PageTitle';
import Service from '../Service/Service';
import './Services.css';
const Services = () => {
    const [services,setServices]=useState([]);
    useEffect(()=>{
        fetch("https://genius-car-db.up.railway.app/service")
          .then((res) => res.json())
          .then((data) => setServices(data));
    },[])
  
    return (
      <div id="services" className="container">
        <PageTitle title="Services"></PageTitle>
        <div>
          <h2 className="services-title">Our Services</h2>
        </div>
        <div className="services-container">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
      </div>
    );
};

export default Services;