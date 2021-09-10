import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://shivam-movies.herokuapp.com/api/",
});

export default axiosInstance;