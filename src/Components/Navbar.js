import React from 'react'
import {Link} from 'react-router-dom'
import '../Style/Navbar.css'

const Navbar = () => {
  return (
    <div className='Navigation'>
        <ul className='navigation-ul'>
            <img src="logo.png" alt="logo" />

            <Link to='/'><li>Home</li></Link>
            <Link to='/Activities'><li>Activities</li></Link>
            <Link to='/Events'><li>Events</li></Link>
            <Link to='/About'><li>About</li>
            <ul className='under-list'>
            
            <Link  to='/Instructors'> <li>Coaches</li></Link>
            <Link  to='/Students'><li>Students</li></Link>
            <Link  to='/Managing'> <li>Managing body</li></Link> 
            </ul>
            </Link>
            <Link to='/ContactUs'><li>Contact us</li></Link>
            
            <Link to={`/Login`}><img className="login" src="login.png" alt="login"  /></Link>
        </ul>
    </div>
  )
}

export default Navbar