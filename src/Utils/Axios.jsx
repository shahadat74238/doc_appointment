import axios from "axios";

const Axios = () => {
    const instance = axios.create({
        baseURL: 'http://localhost:3000/',
        
      });
      
    return instance
};

export default Axios;