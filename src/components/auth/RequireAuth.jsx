import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

export default function RequireAuth({ children, redirectTo }) {
  const [isAuth, setIsAuth] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    setIsAuth(localStorage.getItem("isLogged"));
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [isAuth]);

  if (isLoading) {
    return null;
  } else {
    return isAuth === "true" ? children : <Navigate to={redirectTo} />;
  }
}
