// import { Button } from 'bootstrap';
import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import './Hero.css'
import './Review.css'
// import image from  './IMG_3015.JPG';
// 
const image = 'https://images.unsplash.com/photo-1592805144716-feeccccef5ac?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'
const image1 = 'https://images.unsplash.com/photo-1561702469-c4239ced3f47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80';

const Review = () => {  
  return(
        <div className='review '>
          <div className='-overlay'>

              <Carousel className='Carousel ' >
                <Carousel.Item>
                    <img
                      className="d-block w-100 carimage revimg"
                      src={image1}
                      alt=""
                    />
                   
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 carimage revimg"
                    src={image}
                    alt="Second slide"
                  />

                  {/* <Carousel.Caption className='carousel-caption'>
                    <h3 className='Carousel-sub'> </h3>
                    <p className='carousel-para'></p>
                  </Carousel.Caption> */}
                </Carousel.Item>

                

              </Carousel>
            </div>
        </div>
  )
}
export default Review;