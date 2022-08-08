import { useEffect } from "react";
import { useLocation, Outlet, useNavigate } from "react-router-dom";
import { useGetUserInfo } from "../../utils/apiCalls/auth";

interface Props {
  redirectTo: string;
}

function RequireAuth({ redirectTo }: Props) {
  const location = useLocation();
  const navigate = useNavigate();
  const { isLoading, isSuccess } = useGetUserInfo();

  useEffect(() => {
    if (isSuccess) {
      navigate(redirectTo, { replace: true, state: { from: location } });
    }
  }, [isSuccess]);

  return isLoading ? null : <Outlet />;
}
export default RequireAuth;
