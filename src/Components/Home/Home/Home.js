import React from 'react';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Services from '../Services/Services';

const Home = () => {
    
    return (
        <div>
            <Banner></Banner>
            <h2>Our File add</h2>
            <Services></Services>
            <Experts></Experts>
        </div>
    );
};

export default Home;