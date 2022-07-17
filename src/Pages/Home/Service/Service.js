import React from 'react';
import './Service.css';
import {useNavigate} from 'react-router-dom';

const Service = ({service}) => {
    const {id,name,img,description,price}=service;
    const navigate=useNavigate();
    const navigateService=id=>{
        navigate(`/service/${id}`);

    }
    return (
      <div className="service-container">
        <img className="w-100" src={img} alt="" />
        <h2>{name}</h2>
        <p>{price}</p>
        <p>{description}</p>
        <button onClick={()=>navigateService(id)}>{name}</button>
      </div>
    );
};

export default Service;