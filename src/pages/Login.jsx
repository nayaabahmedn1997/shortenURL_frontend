import React, { useState } from 'react';
import '../styles/registerForm.css'
import axiosInstance from '../utils/axiosInstance';
import { generateToast, TOAST_SUCCESS, TOAST_WARN } from '../utils/generateToast';
import { Link, useNavigate } from 'react-router-dom';
const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();


  //Function to handle  state changes
  const handleEmailChange = (event) => {

    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {

    setPassword(event.target.value);
  }
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      email,
      password,
      
    }
    try {
      const res = await axiosInstance.post("/api/auth/login",postData);
      const data = await res.data;
      localStorage.setItem("token-url", data.token);
      navigate("/")
      generateToast(data.message, TOAST_SUCCESS);
    } catch (error) {
      console.log(error);
      generateToast(error.message, TOAST_WARN)
    }
    

    
    

  }
  return (
    <div className="main-w3layouts wrapper">
      <h1>Creative Login Form</h1>
      <div className="main-agileinfo">
        <div className="agileits-top">
          <form
            onSubmit={handleSubmit}
          >
            
            <label htmlFor="Email"
            >Email </label>
            <input className="text" type="text"
              id="Email"
              value={email || ''}
              onChange={(e) => handleEmailChange(e)}
              required
            />
            <br />
            <label htmlFor="password"
            >Password </label>
            <input className="text" type="text"
              id="password"
              value={password || ''}
              onChange={(e) => handlePasswordChange(e)}
              required
            />
            <br />
            <Link to="/register" className='link'>
            Not registered? Register here
            </Link>
            <br />
            <Link to="/forgot-password" className='link'>
            Forgot password? click here
            </Link>
            <input type="submit" value="LOGIN" />
          </form>

        </div>
      </div>
      <div className="colorlibcopy-agile">
        <p>© 2024 URL shortener Login Form.</p>
      </div>

      <ul className="colorlib-bubbles">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>



  )
}

export default Login