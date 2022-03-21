import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";

interface Props {
  className?: string;
  children?: ReactNode;
}

const Logout = ({ className, children }: Props) => {
  let navigate = useNavigate();

  const logout = () => {
    axiosInstance.get("/logout.php", { withCredentials: true }).then(() => {
      navigate(`/`);
    });
  };

  return (
    <span className={className} onClick={logout}>
      {children}
    </span>
  );
};
export default Logout;
