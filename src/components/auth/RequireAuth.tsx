import { useEffect, useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import axiosInstance from "../../utils/axios";

const RequireAuth: React.FC<{ children: any; redirectTo: string }> = ({
  children,
  redirectTo,
}) => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const location = useLocation();

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
          if (isLoading && err.response?.status === 401) {
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
    return isAuth ? (
      children
    ) : (
      <Navigate to={redirectTo} state={{ from: location }} replace />
    );
  }
};

export default RequireAuth;
