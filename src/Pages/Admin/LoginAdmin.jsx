import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../Css/Login.css';

function Login() {

  return (
    <>
      <div className="container" id="container">
        
        <div className="form-container">
          <form action="#">
            <h1>Se connecter</h1>
            <div className="social-container">
              <i className=" fab fa-facebook-f"></i>
              <i className="fab fa-google-plus-g"></i>
              <i className="fab fa-linkedin-in"></i>
            </div>
            <span>or use your account</span>
            <select className='form-select'>
              <option value="">Entrepreneur</option>
              <option value="">Investisseur</option>
            </select>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <p>Forgot your password?</p>
         <NavLink to ="/admin/dashboard">   <button type="submit">Se connecter</button></NavLink>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">    
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>Enter your personal details and start journey with us</p>
              <NavLink to ="/Signup">    <button className="ghost" >Sign Up</button></NavLink>
            </div>
          </div>
        </div>
      </div>
      
    
    </>
  );
}

export default Login;
