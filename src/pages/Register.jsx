import React, { useState } from 'react';
import '../styles/registerForm.css'
import axiosInstance from '../utils/axiosInstance';
import { generateToast, TOAST_SUCCESS, TOAST_WARN } from '../utils/generateToast';
import { Link, useNavigate } from 'react-router-dom';
const Register = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [userName, setUserName] = useState();
  const navigate = useNavigate();

  //Function to handle  state changes
  const handleEmailChange = (event) => {

    setEmail(event.target.value);
  }
  const handlePasswordChange = (event) => {

    setPassword(event.target.value);
  }
  const handleUserNameChange = (event) => {

    setUserName(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const postData = {
      email,
      password,
      name:userName
    }
    try {
      const res = await axiosInstance.post("/api/auth/register",postData);
      const data = await res.data;
      generateToast(data.message, TOAST_SUCCESS);
      navigate('/login')
    } catch (error) {
      console.log(error);
      generateToast(error.message, TOAST_WARN)
    }
    

    
    

  }
  return (
    <div className="main-w3layouts wrapper">
      <h1>Creative SignUp Form</h1>
      <div className="main-agileinfo">
        <div className="agileits-top">
          <form
            onSubmit={handleSubmit}
          >
            <label htmlFor="userName"
            >User Name </label>
            
            <input className="text" type="text"
              id="userName"
              value={userName || ''}
              onChange={(e) => handleUserNameChange(e)}
              required
            />
            <br />
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
            <Link to="/login" className='link'>
            Already a user? Login here
            </Link>
            <br />
            <input type="submit" value="SIGNUP" />
          </form>

        </div>
      </div>
      <div className="colorlibcopy-agile">
        <p>© 2024 URL shortener Signup Form.</p>
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

export default Register