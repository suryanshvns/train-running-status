
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://uattrainservicesapi.zoopindia.com', 
  headers: {
    'Content-Type': 'application/json', 
  },
});

export default axiosInstance;
