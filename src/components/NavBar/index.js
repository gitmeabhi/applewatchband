import React from 'react'
import {Link} from "react-router-dom"

import "./index.css"

const NavBar = () => {
  return (
   
        <nav className='logo-box'>
         
            <Link to = "/">
            <img src='https://res.cloudinary.com/dcbul0ogm/image/upload/v1735189671/apple-watch-design-studio-logo_c2pmf4.jpg' 
            alt='logo' 
            className='logo' />
               
            </Link>
        </nav>

  )
}

export default NavBar