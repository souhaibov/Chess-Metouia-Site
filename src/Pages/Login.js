import React from 'react'
import "../Style/Login.css"

const Login = () => {
  return (
    <div className="login-card">

      <img src="logo.png" alt="logo" />
      <br/><br/>
      <h3>User Name:</h3>
      
      <input placeholder='Enter your name'/>
      <br/><br/>
      <h3>Password:</h3>
      
      <input placeholder='Enter your password'/>
      <br/><br/>
      <button className="submit" >Sign In</button>
      <h5>Lost Your Password ?</h5>

          </div>
  )
}

export default Login