import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import { useTitle } from "../hooks/useTitle";

const InvalidLink = () => {
  useTitle("Link Invalido - BennyOrder");

  return (
    <>
      <p> Il link utilizzato è invalido.</p>
      <DoDisturbIcon />
    </>
  );
};
export default InvalidLink;
