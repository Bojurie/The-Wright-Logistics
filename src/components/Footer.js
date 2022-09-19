import React, { Fragment } from 'react';
import {Link } from 'react-router-dom';
import './Footer.css'
import footerLogo from './Images/footerlogoimg.png'

const Footer = () => {
  return (
    <Fragment>
    <div className='footer'>
      <div className='container'>
        <div className='container-wrapper'>
            <div className='left-side'>
              <img src={footerLogo} alt='' />
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mi facilisi lectus ut sem elementum, tincidunt. Faucibus velit tempor, posuere vitae quam proin mauris dolor sit..</p>
            </div>

            <div className='middle-side'>
              <h4>Pages</h4>
                <ul>
                  <Link to='/home'></Link>
                  <Link to='/about'></Link>
                  <Link to='/services'></Link>
                  <Link to='/contact'></Link>
                </ul>
            </div>

            <div className='right-side'>
                <h4>Services</h4>
               <ul>
                  <li>Home</li>
                  <li>About Us</li>
                  <li>Services</li>
                  <li>Contact Us</li>
                </ul> 
            </div>

            <div className='newletter'>
              <h4>News Letter</h4>
              <p>Please sign up for update on everything new.</p>
              <input type='email' placeholder='Enter Email Address....'/>
              <input type='submit' title='Subscribe'/>

            </div>
        </div>
       
       <div className='footer-logo-copyright'>
          
       </div>
      </div>
      
    </div>
    </Fragment>
  )
}
export default Footer;