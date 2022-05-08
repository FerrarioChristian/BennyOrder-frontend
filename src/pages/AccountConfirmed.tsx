import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

function AccountConfirmed() {
  useTitle("Account Confermato - BennyOrder");
  return (
    <>
      <p> L&apos;account è stato confermato.</p>
      <CheckCircleOutlineIcon />
      <Link to="/login">Vai al login</Link>
    </>
  );
}
export default AccountConfirmed;
