import React, { useEffect } from 'react'
import { data, useNavigate, useParams } from 'react-router-dom'
import axiosInstance from '../utils/axiosInstance';
import { generateToast, TOAST_SUCCESS, TOAST_WARN } from '../utils/generateToast';

const ActivateAccount = () => {

    const navigate  = useNavigate();
    const {activationToken} = useParams();
    const handleActivation = async ()=>{
        try {
            const res = await axiosInstance.get(`/api/auth/activate/${activationToken}`);
            const data = await res.data;
            generateToast(data.message, TOAST_SUCCESS);
            navigate("/login");
        } catch (error) {
            generateToast(data.message, TOAST_WARN);
            console.log(error);
            navigate("/login");
        }
    }

    useEffect(()=>{
        handleActivation();
    }, [])
  return (
    <div className="main-w3layouts wrapper">
      <h1>Activating your account</h1>
      </div>
  )
}

export default ActivateAccount