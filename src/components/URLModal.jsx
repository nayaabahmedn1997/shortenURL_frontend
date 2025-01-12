import React, { useState } from 'react'
import { generateToast, TOAST_SUCCESS, TOAST_WARN } from '../utils/generateToast';
import axiosInstance from '../utils/axiosInstance';

const URLModal = () => {
    const [url, setUrl] = useState();

    const handleURLChange = (e)=>{
        setUrl(e.target.value);
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const token = localStorage.getItem("token-url");
        try {
          const postData = {url};
           const res =await axiosInstance.post("/api/url/generate-url", postData,{
            headers:{
              authorization:`Bearer ${token}`
            }
           });
           const data = await res.data;
           generateToast(data.message, TOAST_SUCCESS);
           setUrl("")
        } catch (error) {
          generateToast(error.message, TOAST_WARN)
            console.log(error);
        }
    }

  return (
    <div className="main-w3layouts wrapper">
    <h1>Create a new URL</h1>
    <div className="main-agileinfo">
      <div className="agileits-top">
        <form
          onSubmit={handleSubmit}
        >
          <label htmlFor="url"
          >URL </label>
          
          <input className="text" type="text"
            id="url"
            value={url || ''}
            onChange={(e) => handleURLChange(e)}
            required
          />
         
          
          
          <br />
          <input type="submit"  className="shorten-button" value="Create a shorten URL" />
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

export default URLModal;