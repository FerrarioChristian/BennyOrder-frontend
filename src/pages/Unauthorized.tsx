import DoDisturbIcon from "@mui/icons-material/DoDisturb";
import useTitle from "../hooks/useTitle";

function InvalidLink() {
  useTitle("Unauthorized - BennyOrder");

  return (
    <>
      <p>Non hai permessi per accedere a questa pagina</p>
      <DoDisturbIcon />
    </>
  );
}
export default InvalidLink;
