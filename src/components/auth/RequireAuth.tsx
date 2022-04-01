import { useEffect, useState } from "react";
import { Navigate, useLocation, Outlet } from "react-router-dom";
import axiosInstance from "../../utils/axios";

interface Props {
  redirectTo: string;
}

function RequireAuth({ redirectTo }: Props) {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();

  useEffect(() => {
    const getAuth = () => {
      axiosInstance
        .get("/user_auth.php", { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            setIsAuth(true);
            setIsLoading(false);
          }
        })
        .catch((err) => {
          if (err.response?.status === 401) {
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
  }
  return isAuth ? (
    <Outlet />
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  );
}
export default RequireAuth;
