

import axios from 'axios';

const axiosInstance = axios.create({
    baseURL:"https://shortenurl-backend.onrender.com"
})

export default axiosInstance;