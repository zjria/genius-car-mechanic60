import React from 'react';
import './Service.css';

const Service = ({service}) => {
    const {id, name, Price, Description, img, time} = service;
   
    return (
        <div>
            <div className="service-stayle">
            <img src={img} alt="Images"/>
            <h1>{name}</h1>
            <h5>Price: $-{Price}</h5>
            <h6>Duration: {time}</h6>
            <p className="px-3">{Description}</p>
            </div>
        </div>
    );
};

export default Service;