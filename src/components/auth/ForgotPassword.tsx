import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InvalidLink from "../../pages/InvalidLink";
import RecoverPassword from "./RecoverPassword";
import useTitle from "../../hooks/useTitle";
import axiosInstance from "../../utils/axios";

function ForgotPassword() {
  useTitle("Password Dimenticata - BennyOrder");
  const [valid, setValid] = useState(false);
  const [isFetching, setIsFetching] = useState(false);

  const { confirmCode } = useParams();

  useEffect(() => {
    const validateAccount = () => {
      setIsFetching(true);
      axiosInstance
        .get("/password_recovery.php", {
          params: { c: confirmCode },
        })
        .then((res) => {
          if (res.status === 200) {
            setValid(true);
          }
          setIsFetching(false);
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setValid(false);
          }
          setIsFetching(false);
        });
    };
    validateAccount();
  }, [confirmCode]);

  if (isFetching) {
    return null;
  }
  if (valid) {
    return <RecoverPassword confirm_code={confirmCode} />;
  }
  return <InvalidLink />;
}
export default ForgotPassword;
