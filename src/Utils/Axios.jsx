// ** import 
import axios from "axios";

const Axios = () => {
  const instance = axios.create({
    // baseURL: "http://localhost:3000/",
    baseURL: "https://simple-appointment-server.vercel.app/",
  });

  return instance;
};

export default Axios;
