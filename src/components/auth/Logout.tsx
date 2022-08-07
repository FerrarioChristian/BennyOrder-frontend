import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../../utils/apiCalls/auth";

interface Props {
  className?: string;
  children?: ReactNode;
}

function Logout({ className, children }: Props) {
  const navigate = useNavigate();

  const { mutate } = useLogoutMutation();

  const logout = () => {
    mutate(undefined, { onSuccess: () => navigate("/") });
  };

  return (
    <span
      role="button"
      className={className}
      onClick={logout}
      onKeyPress={logout}
      tabIndex={0}
    >
      {children}
    </span>
  );
}
export default Logout;
