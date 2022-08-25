import React from 'react'
import '../Style/ContactUs.css'

const ContactUs = () => {
  return (
    <div className="contact-card">

      <h1 style={{fontSize: '40px',textShadow: 'none', color: 'DarkGreen'}}>Contact us</h1>
      <br/><br/>
      <input placeholder='Name *'/>
      <br/><br/>
      <input placeholder='E.mail *'/>
      <br/><br/>
      <input placeholder='Location'/>
      <br/><br/>
      <input placeholder='Phone Number'/>
      <br/><br/>
      <input style={{height:'100px'}} placeholder='Message *'/>
      <br/><br/>
      <button className="submit" >Submit</button>
      

          </div>
  )
}

export default ContactUs