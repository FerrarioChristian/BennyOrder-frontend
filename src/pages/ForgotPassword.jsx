import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import RecoverPassword from "components/auth/RecoverPassword";
import InvalidLink from "components/auth/InvalidLink";
import { useTitle } from "hooks/useTitle";

export default function ForgotPassword() {
  useTitle("Password Dimenticata - BennyOrder");
  const [valid, setValid] = useState(false);

  const { confirm_code } = useParams();

  useEffect(() => {
    const validateAccount = () => {
      axios
        .get("https://bennyorder.com:64443/password_recovery.php", {
          params: { c: confirm_code },
        })
        .then((res) => {
          if (res.status === 200) {
            setValid(true);
          }
        })
        .catch((err) => {
          if (err.response.status === 404) {
            setValid(false);
          }
        });
    };
    validateAccount();
  }, [confirm_code]);

  if (valid) {
    return <RecoverPassword confirm_code={confirm_code} />;
  } else {
    return <InvalidLink />;
  }
}
