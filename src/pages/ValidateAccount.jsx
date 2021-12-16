import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ValidateAccount() {
  const { confirm_code } = useParams();

  useEffect(() => {
    validateAccount();
  });

  const validateAccount = () => {
    axios
      .post("https://bennyorder.com:64443/confirm_account.php", {
        confirm_code: confirm_code,
      })
      .then((res) => {
        console.log("Account Verificato");
      })
      .catch((err) => {
        if (err.response.status === 406) {
          console.log("Link Disabile");
        }
      });
  };

  return <div></div>;
}
