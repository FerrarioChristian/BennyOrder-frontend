import { useEffect, useState } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";

interface Props {
  redirectTo: string;
}

function RequireAuth({ redirectTo }: Props) {
  const [isLoading, setIsLoading] = useState(true);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const getAuth = () => {
      axiosInstance
        .get("/api/auth/users/session-check", { withCredentials: true })
        .then((res) => {
          if (res.status === 200) {
            setIsLoading(false);
          }
        })
        .catch((err) => {
          navigate(redirectTo, { replace: true, state: { from: location } });
          if (err.response?.status === 401) {
            setIsLoading(false);
          }
        });
    };
    getAuth();
  }, [location, navigate, redirectTo]);

  return isLoading ? <h2>Loading...</h2> : <Outlet />;
}
export default RequireAuth;
