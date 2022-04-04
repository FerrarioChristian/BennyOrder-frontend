import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";

interface Props {
  className?: string;
  children?: ReactNode;
}

function Logout({ className, children }: Props) {
  const navigate = useNavigate();

  const logout = () => {
    axiosInstance.get("/logout.php", { withCredentials: true }).then(() => {
      navigate("/");
    });
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
