import React from "react";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTitle } from "hooks/useTitle";

export default function AccountConfirmed() {
  useTitle("Account Confermato - BennyOrder");
  return (
    <>
      <p> L'account è stato confermato.</p>
      <CheckCircleOutlineIcon />
    </>
  );
}
