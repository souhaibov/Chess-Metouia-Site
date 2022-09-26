import React from 'react'
import '../Style/ContactUs.css'
import Maps from './Maps'

const ContactUs = () => {
  return (
    <div className="contact-card">
    <div className="formulaire">

      <h1 style={{fontSize: '40px',textShadow: 'none', color: 'DarkGreen'}}>Get in Touch</h1>
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
          <div className='left_side'>
          {/* <iframe title='map' style={{width:"40vw", height:"60vh", style:"border:0;", allowfullscreen:"", loading:"lazy", referrerpolicy:"no-referrer-when-downgrade"}} src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d200.90164671140815!2d9.997767981057914!3d33.96113915214634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sfr!2stn!4v1663637067416!5m2!1sfr!2stn"></iframe>   */}
              <Maps/>
           <div className='info_club'>
        <div className='sous_info'>
          <img className='position' src='position.png' alt='position img' />
          <h4>𝓜é𝓽𝓸𝓾𝓲𝓪-𝓖𝓪𝓫é𝓼</h4>
          <h4>6010</h4><br/>
          <h4>𝓣𝓾𝓷𝓲𝓼𝓲𝓪</h4>
        </div>
        <div className='sous_info1'>
        <img src='phone.png' alt='position img' />
        <h4>+216 20 212 411</h4>
        <h4>+216 29 704 109</h4>
          <h4>𝓜𝓸𝓷-𝓢𝓪𝓽</h4>
          <h4>8:00 - 20:00</h4>
        </div>
        <div className='sous_info2'>
        <img src='email.png' alt='position img' />
        <h4>𝓬𝓱𝓮𝓼𝓼.𝓶𝓮𝓽𝓸𝓾𝓲𝓪@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶</h4><br/>
          <h4>𝓼𝓸𝓾𝓱𝓪𝓲𝓫𝓸𝓿6@𝓰𝓶𝓪𝓲𝓵.𝓬𝓸𝓶</h4>
        </div>
           </div>
          </div>
          <br/>
           </div>
           
  )
}

export default ContactUs