import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axiosInstance from "utils/axios";

export default function RequireAuth({ children, redirectTo }) {
  const [isAuth, setIsAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getAuth = () => {
      axiosInstance
        .get("/user_auth.php", { withCredentials: true })
        .then((res) => {
          if (isLoading && res.status === 200) {
            setIsAuth(true);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          if (isLoading && err.response.status === 401) {
            setIsAuth(false);
            setIsLoading(false);
          }
        });
    };
    getAuth();
    return () => {
      setIsLoading(false);
    };
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  } else {
    return isAuth ? children : <Navigate to="/login" />;
  }
}
