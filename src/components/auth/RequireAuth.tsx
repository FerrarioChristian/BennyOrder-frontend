import { useLocation, Outlet, Navigate } from "react-router-dom";
import { useGetUserInfo } from "../../utils/apiCalls/auth";

interface Props {
  redirectTo: string;
  allowedRoles: number[];
}

function RequireAuth({ redirectTo, allowedRoles }: Props) {
  const location = useLocation();
  const { data, isLoading } = useGetUserInfo();

  if (isLoading) return null;

  if (
    data?.data.capabilities.find((role: number) =>
      allowedRoles.includes(role)
    ) !== undefined
  )
    return <Outlet />;

  if (data?.data.username)
    return <Navigate to="/unauthorized" state={{ from: location }} replace />;
  return <Navigate to={redirectTo} state={{ from: location }} replace />;
}
export default RequireAuth;
