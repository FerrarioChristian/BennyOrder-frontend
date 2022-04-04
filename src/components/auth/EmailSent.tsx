import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
import useTitle from "../../hooks/useTitle";

function EmailSent() {
  useTitle("Account Creato - BennyOrder");
  return (
    <>
      <p>Ti abbiamo inviato una email per confermare l&apos;account</p>
      <Link to="/resend-mail">Non ho ricevuto l&apos;email.</Link>
      <CheckCircleOutlineIcon />
    </>
  );
}
export default EmailSent;
