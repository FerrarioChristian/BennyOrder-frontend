import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";

interface Props {
  className?: string;
  children?: ReactNode;
}

export default function Logout({ className, children }: Props) {
  let navigate = useNavigate();

  const logout = () => {
    axiosInstance.get("/logout.php", { withCredentials: true }).then(() => {
      navigate(`/`);
    });
  };

  return (
    <a className={className} onClick={logout}>
      {children}
    </a>
  );
}
