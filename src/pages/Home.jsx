import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../utils/axiosInstance';
import { generateToast, TOAST_SUCCESS, TOAST_WARN } from '../utils/generateToast';
import Tabs from '../components/Tab';


const Home = () => {

  const navigate = useNavigate();
  const [userData, setUserData] = useState();

  const handlePreload = async ()=>{
    try { 
      const token = localStorage.getItem("token-url");
      const res= await axiosInstance.get('api/auth/get-user-data',{
        headers:{
          authorization:`Bearer ${token}`
        }
      });
      const data = await res.data;
      generateToast(data.message, TOAST_SUCCESS);
      setUserData(data.userData);
      
    } catch (error) {
      generateToast(error.message, TOAST_WARN);
      navigate('/login');
    }
  }
  useEffect(()=>{
   handlePreload();
  }, []);

  return (
  <div className="container bg-white center mt-2">
   
       <Tabs userData={userData} />
    



  </div>
  )
}

export default Home