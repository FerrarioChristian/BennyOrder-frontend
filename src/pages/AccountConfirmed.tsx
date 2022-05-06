import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import useTitle from "../hooks/useTitle";

function AccountConfirmed() {
  useTitle("Account Confermato - BennyOrder");
  return (
    <>
      <p> L&apos;account è stato confermato.</p>
      <CheckCircleOutlineIcon />
    </>
  );
}
export default AccountConfirmed;
