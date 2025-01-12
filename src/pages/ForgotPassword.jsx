import React, { useState } from 'react'
import axiosInstance from '../utils/axiosInstance';
import { generateToast, TOAST_SUCCESS, TOAST_WARN } from '../utils/generateToast';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {

  const [email, setEmail] = useState();
  const navigate = useNavigate();
  //Function to handle  state changes
  const handleEmailChange = (event) => {

    setEmail(event.target.value);
  }

  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const postData = {email};
      const res = await axiosInstance.post("/api/auth/forgot-password", postData);
      const data = await res.data;
      generateToast(data.message, TOAST_SUCCESS);
      navigate('/login');
    } catch (error) {
      generateToast(error.message, TOAST_WARN);
      console.log(error);
      navigate('/login');
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
          
          <label htmlFor="Email"
          >Email </label>
          <input className="text" type="text"
            id="Email"
            value={email || ''}
            onChange={(e) => handleEmailChange(e)}
            required
          />
          <br />
          
          
          <br />
          <input type="submit" value="Send reset Link" />
        </form>

      </div>
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

export default ForgotPassword