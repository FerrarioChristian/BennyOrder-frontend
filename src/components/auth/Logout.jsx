import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Logout() {
  const dotenv = require("dotenv");
  dotenv.config();

  const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
  let navigate = useNavigate();

  const logout = () => {
    axios
      .get(BASE_API_URL + "/logout.php", { withCredentials: true })
      .then(() => {
        localStorage.setItem("isLogged", "false");
        navigate(`/`);
      });
  };

  return <button onClick={logout}>Logout</button>;
}
