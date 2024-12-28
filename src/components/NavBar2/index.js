import React from 'react'
import {Link} from "react-router-dom"
import { IoIosArrowDown } from "react-icons/io";
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import "./index.css"

const NavBar2 = () => {
  return (
   
        <nav className='logo-box'>
         
            <Link to = "/">
            <img src='https://res.cloudinary.com/dcbul0ogm/image/upload/v1735189671/apple-watch-design-studio-logo_c2pmf4.jpg' 
            alt='logo' 
            className='logo' />
               
            </Link>


            <Popup
     modal
     trigger={
       <button type="button" className="trigger-button">
         Collections <IoIosArrowDown size={15} />
       </button>
     }

    
   >
    <div>
    <p className='item'>Apple Watch Series 10</p>
        <p className='item'>Apple Watch Hermes Series 10</p>
        <p className='item'>Apple Watch SE</p>
    </div>


    
   </Popup>
           

    {/* <select className='selection' >
        <option className='item'>Collections</option>
        <option className='item'>Apple Watch Series 10</option>
        <option className='item'>Apple Watch Hermes Series 10</option>
        <option className='item'>Apple Watch SE</option>
     </select> */}

     <button type='button' className='save-btn'>Save</button>

            
        </nav>

  )
}

export default NavBar2