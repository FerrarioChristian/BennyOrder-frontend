import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { useTitle } from "../../hooks/useTitle";

export default function EmailSent() {
  useTitle("Account Creato - BennyOrder");
  return (
    <>
      <p> Ti abbiamo inviato una email per confermare l'account</p>
      <a href="pornhub.com">Non ho ricevuto l'email.</a>
      <CheckCircleOutlineIcon />
    </>
  );
}
