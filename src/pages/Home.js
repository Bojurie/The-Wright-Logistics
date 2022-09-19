import React, { Component } from 'react'
import Clients from '../components/Clients'
import Contact from '../components/Contact'
// import HeaderNavbar from '../components/HeaderNav'
import Hero from '../components/Hero'
import HomeAbout from '../components/HomeAbout'
import HomeServices from '../components/HomeServices'
import Review from '../components/Review'

import './Home.css'

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <div className='home-content'>
         
        <HomeAbout />
        <HomeServices />
       <Clients />
       <Review />
       <Contact />
        </div>
    
   
      </div>
    )
  }
}
export default Home;