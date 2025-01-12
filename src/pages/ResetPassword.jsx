import React, { useState } from 'react'
import { generateToast, TOAST_SUCCESS, TOAST_WARN } from '../utils/generateToast';
import axiosInstance from '../utils/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const ResetPassword = () => {

  const {resetToken } = useParams();

  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const navigate = useNavigate();

  const handlePasswordChange = (e) =>{
    setPassword(e.target.value);
  }

  const handleConfirmPasswordChange = (e)=>{
    setConfirmPassword(e.target.value);
  }


  
  const handlePasswordReset = async (e)=>{
    e.preventDefault();
    try {
      if(password !== confirmPassword)
        {
          generateToast("Both passwords not matching",TOAST_WARN);
        }
        else
        {
          const postData = {password};
            const res = await axiosInstance.post(`/api/auth/reset-password/${resetToken}`, postData);
            const data = await res.data;
            generateToast(data.message, TOAST_SUCCESS);
            navigate("/login");

        }
    } catch (error) {
      generateToast(error.message, TOAST_WARN);
      navigate("/login");
      console.log(error)
    }
   
  }

  return (
    <div className="main-w3layouts wrapper">
    <h1>Creative Reset password Form</h1>
    <div className="main-agileinfo">
      <div className="agileits-top">
        <form
          onSubmit={handlePasswordReset}
        >
          
          <label htmlFor="password"
          >Password </label>
          <input className="text" type="text"
            id="password"
            value={password || ''}
            onChange={(e) => handlePasswordChange(e)}
            required
          />
          <br />
          
          <label htmlFor="confirmPassword"
          >Confirm Password </label>
          <input className="text" type="text"
            id="confirmPassword"
            value={confirmPassword || ''}
            onChange={(e) => handleConfirmPasswordChange(e)}
            required
          />
          <br />
          
          <br />
          <input type="submit" value="Reset Password" />
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

export default ResetPassword