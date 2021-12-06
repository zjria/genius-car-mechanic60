import React from 'react';
import './Expert.css';

const Expert = ({expert}) => {
    const {img, name, Expertize } = expert;

    return (
        <div className="col-lg-4 col-sm-6 col-12 bg-style">
            <img className=" border-radius: 5px w-75" src={img} alt="" />
            <h3>{name}</h3>
            <h5 className="text-danger">{Expertize}</h5>
        </div>
    );
};

export default Expert;