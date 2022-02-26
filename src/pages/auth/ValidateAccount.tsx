import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AccountConfirmed from "../../components/auth/AccountConfirmed";
import InvalidLink from "../../components/auth/InvalidLink";
import { useTitle } from "../../hooks/useTitle";
import axiosInstance from "../../utils/axios";

export default function ValidateAccount() {
  useTitle("Convalida Account - BennyOrder");
  const [isFetching, setIsFetching] = useState(false);
  const [valid, setValid] = useState(false);
  const { confirm_code } = useParams();

  useEffect(() => {
    const validateAccount = () => {
      setIsFetching(true);
      axiosInstance
        .post("/confirm_account.php", {
          confirm_code: confirm_code,
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
  }, [confirm_code]);

  if (isFetching) {
    return null;
  } else {
    if (valid) {
      return <AccountConfirmed />;
    } else {
      return <InvalidLink />;
    }
  }
}
