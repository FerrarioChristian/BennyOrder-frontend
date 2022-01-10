import React from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "utils/axios";

export default function Logout() {
  let navigate = useNavigate();

  const logout = () => {
    axiosInstance.get("/logout.php", { withCredentials: true }).then(() => {
      navigate(`/`);
    });
  };

  return <button onClick={logout}>Logout</button>;
}
