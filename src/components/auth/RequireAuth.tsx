/* eslint-disable no-nested-ternary */
/* import { useEffect } from "react"; */
import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../utils/apiCalls/auth";

interface Props {
  redirectTo: string;
  allowedRoles: number[];
}

function RequireAuth({ redirectTo, allowedRoles }: Props) {
  const location = useLocation();
  /* const navigate = useNavigate(); */
  const { data, isLoading /* isError */ } = useGetUserInfo();

  /*  useEffect(() => {
    if (isError) {
      navigate(redirectTo, { replace: true, state: { from: location } });
    }
  }, [isError]); */

  return isLoading ? null : data?.data.roles.find((role: number) =>
      allowedRoles.includes(role)
    ) !== undefined ? (
    <Outlet />
  ) : data?.data.username ? (
    <Navigate to="/unauthorized" state={{ from: location }} replace />
  ) : (
    <Navigate to={redirectTo} state={{ from: location }} replace />
  );
}
export default RequireAuth;
