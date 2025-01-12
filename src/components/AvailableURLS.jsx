import React, { useEffect, useState } from 'react'
import { generateToast, TOAST_SUCCESS, TOAST_WARN } from '../utils/generateToast'
import axiosInstance from '../utils/axiosInstance'
import UrlCard from './UrlCard';

const AvailableURLS = () => {
    const [urlData, setUrlData] = useState(null);
    const getPreloadData = async() =>{
        const token = localStorage.getItem('token-url');
        try {
            const res = await axiosInstance.get("/api/url/fetchShortenURLs",{
                headers:{
                    authorization:`Bearer ${token}`
                }
            });
            const data = await res.data;
          
            generateToast(data.message, TOAST_SUCCESS);
            setUrlData(data.urlData)
           
        } catch (error) {
            generateToast(error.message, TOAST_WARN);
            console.log(error)
        }
    }

    useEffect(()=>{
        getPreloadData();
       
    }, []);
  return (
    <div className='container'>
        <h1>URL list</h1>
        {
            urlData===(null )?<h3>No URL available</h3>:urlData.map((url)=>(
                <UrlCard 
                redirectURL={url.redirectURL}
                shortID={url.shortID}
                clickCount={url.clickCount}
                key={url._id}
                />
            ))
        }
    </div>
  )
}

export default AvailableURLS