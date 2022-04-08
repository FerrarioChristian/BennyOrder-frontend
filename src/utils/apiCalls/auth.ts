import axiosInstance from "../axios";

const logoutAPI = axiosInstance.get("/logout.php", {
  withCredentials: true,
});

export default logoutAPI;

// const loginAPI = 7;
