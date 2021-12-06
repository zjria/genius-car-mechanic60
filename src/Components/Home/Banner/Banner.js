import React from 'react';
import { Carousel } from 'react-bootstrap';
import mechanic1 from '../../../img/banner/1.png'
import mechanic2 from '../../../img/banner/2.png'
import mechanic3 from '../../../img/banner/3.png'


const Banner = () => {
    return (
        <>
            <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={mechanic1}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={mechanic2}
            alt="Second slide"
            />

            <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src={mechanic3}
            alt="Third slide"
            />

            <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </>

    
    );
};

export default Banner;