import { useRef } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axiosInstance from "../../utils/axios";

function NewSession() {
  const name = useRef<HTMLInputElement>(null);
  const { tirt } = useParams();

  const navigate = useNavigate();

  const submit = () => {
    axiosInstance
      .post(
        "new_device_session.php",
        {
          tirt,
          name: name.current!.value,
        },
        { withCredentials: true }
      )
      .then(() => navigate("/clubmenu"));
  };

  return (
    <>
      <p>inserisci il tuo nome:</p>
      <input type="text" ref={name} />
      <button type="button" onClick={submit}>
        Accedi
      </button>
    </>
  );
}

export default NewSession;
