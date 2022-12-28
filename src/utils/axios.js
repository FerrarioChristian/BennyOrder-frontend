import axios from "axios";

const baseURL = "https://bennyorder.com/api";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
