// import { Button } from 'bootstrap';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'
import truckimage from './Images/Trucks.png';
import image from  './IMG_3015.JPG';

const image1 = 'https://images.unsplash.com/photo-1518623001395-125242310d0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1649&q=80';
const image2 = 'https://images.unsplash.com/photo-1591768793355-74d04bb6608f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1472&q=80';

const Hero = () => {  
  return(
        <div className='Hero'>
          <Carousel className='Carousel'>
            <Carousel.Item>
                <img
                  className="d-block w-100 carimage"
                  src={image}
                  alt=""
                />
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100 carimage"
                src={image1}
                alt="Second slide"
              />

              <Carousel.Caption className='carousel-cap'>
                <h3 className='Carousel-sub'>  Quick <span> & </span> Powerful Solution </h3>
                <h1 className='carousel-para'>UNBEATABLE TRUCKING AND TRANSPORTATION SERVICES</h1>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                  className="d-block w-100 carimage"
                  src={image2}
                  alt="Third slide"
                />

            </Carousel.Item>

          </Carousel>
          <div className='truckAbs'>
            <img src={truckimage} alt='' />
          
          </div>
        </div>
  )
}
export default Hero;