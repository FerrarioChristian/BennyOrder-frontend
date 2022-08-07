import { useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../../utils/apiCalls/auth";

interface Props {
  redirectTo: string;
}

function RequireAuth({ redirectTo }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { /*  data, */ isLoading, isError } = useGetUserInfo();

  useEffect(() => {
    if (isError) {
      navigate(redirectTo, { replace: true, state: { from: location } });
    }
  }, [isError]);

  return isLoading ? <h2>Loading...</h2> : <Outlet />;
}
export default RequireAuth;
