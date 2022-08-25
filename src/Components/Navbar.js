import React from 'react'
import {Link} from 'react-router-dom'
import '../Style/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navigation'>
        <ul>
            <img src="logo.jpg" alt="logo" />

            <Link to='/'><li>Home</li></Link>
            <Link to='/Activities'><li>Activities</li></Link>
            <Link to='/Events'><li>Events</li></Link>
            <Link to='/About'><li>About</li></Link>
            <Link to='/ContactUs'><li>Contact us</li></Link>
            
            <Link to={`/Login`}><img src="login.jpg" alt="login"  /></Link>
        </ul>
    </div>
  )
}

export default Navbar