
import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../NavBar'

import "./index.css"

const Home = () => {
  return (
    <div className='home-container'>
      <NavBar />
      <div className='home-content'>
        <div className='top-text'>
         <div className='texts'>
         <span className='title'>Apple Watch Studio</span>
          <span className='pick'>Choose a case.</span>
          <span className='pick'>Pick a band.</span>
          <span className='pick'>Create your own style.</span>
            <Link to="/navbar2" className='start'>
            <button type=' button' className='start-btn'>Get started</button>
            </Link>
         </div>
        </div>
        <img src='https://res.cloudinary.com/dcbul0ogm/image/upload/v1735192194/112630_112631_Apple_Watch-10_46_AL_JBK_BK_Sport_Band_S-M-L_lrg1_zsjcvs.png' 
        alt='watch'
        className='watch-img' />
      </div>
    </div>
  )
}

export default Home

