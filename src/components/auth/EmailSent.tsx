import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

const EmailSent = () => {
  useTitle("Account Creato - BennyOrder");
  return (
    <>
      <p> Ti abbiamo inviato una email per confermare l'account</p>
      <Link to="">Non ho ricevuto l'email.</Link>
      <CheckCircleOutlineIcon />
    </>
  );
};
export default EmailSent;
