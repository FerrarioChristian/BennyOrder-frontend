import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccountConfirmed from "./AccountConfirmed";
import InvalidLink from "../../pages/InvalidLink";
import useTitle from "../../hooks/useTitle";
import axiosInstance from "../../utils/axios";

function ValidateAccount() {
  useTitle("Convalida Account - BennyOrder");
  const [isFetching, setIsFetching] = useState(false);
  const [valid, setValid] = useState(false);
  const { confirmCode } = useParams();

  useEffect(() => {
    const validateAccount = () => {
      setIsFetching(true);
      axiosInstance
        .patch(`/accounts/validate/12`, {
          // find a way to get the ID
          confirm_code: confirmCode,
        })
        .then((res) => {
          if (res.status === 200) {
            setValid(true);
            setIsFetching(false);
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setValid(false);
            setIsFetching(false);
          }
        });
    };
    validateAccount();
  }, [confirmCode]);

  if (isFetching) {
    return null;
  }
  if (valid) {
    return <AccountConfirmed />;
  }
  return <InvalidLink />;
}
export default ValidateAccount;
