import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { useTitle } from "../../hooks/useTitle";

export default function InvalidLink() {
  useTitle("Link Invalido - BennyOrder");

  return (
    <>
      <p> Il link utilizzato è invalido.</p>
      <DoDisturbIcon />
    </>
  );
}
