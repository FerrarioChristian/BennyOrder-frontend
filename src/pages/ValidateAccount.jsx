import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import AccountConfirmed from "components/accountValidation/AccountConfirmed";
import InvalidConfirmation from "components/accountValidation/InvalidConfirmation";

export default function ValidateAccount() {
  const [valid, setValid] = useState(false);

  const { confirm_code } = useParams();

  useEffect(() => {
    const validateAccount = () => {
      axios
        .post("https://bennyorder.com:64443/confirm_account.php", {
          confirm_code: confirm_code,
        })
        .then((res) => {
          if (res.status === 200) {
            setValid(true);
          }
        })
        .catch((err) => {
          if (err.response.status === 406) {
            setValid(false);
          }
        });
    };
    validateAccount();
  }, [confirm_code]);

  if (valid) {
    return <AccountConfirmed />;
  } else {
    return <InvalidConfirmation />;
  }
}
