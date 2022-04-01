import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import useEventListener from "../../hooks/useEventListener";
import useTitle from "../../hooks/useTitle";
import axiosInstance from "../../utils/axios";
import submitOnEnter from "../../utils/events";

function ForgotPasswordEmail() {
  const submit = useRef(null);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  useTitle("Recupero Password - BennyOrder");
  useEventListener("keydown", submitOnEnter(submit));

  const submitLogin = () => {
    axiosInstance
      .post("/password_recovery.php", {
        email,
      })
      .then(() => {
        navigate("/");
      });
  };

  return (
    <>
      <h1>Inserisci la tua email</h1>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button ref={submit} type="button" onClick={submitLogin}>
        Recupera Password
      </button>
    </>
  );
}
export default ForgotPasswordEmail;
