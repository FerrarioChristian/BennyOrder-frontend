import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTitle } from "../../hooks/useTitle";

const AccountConfirmed = () => {
  useTitle("Account Confermato - BennyOrder");
  return (
    <>
      <p> L'account è stato confermato.</p>
      <CheckCircleOutlineIcon />
    </>
  );
};
export default AccountConfirmed;
