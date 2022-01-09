import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useTitle } from "hooks/useTitle";

export default function ForgotPasswordEmail() {
  useTitle("Recupero Password - BennyOrder");
  const submit = useRef(null);

  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const submitLogin = () => {
    axios
      .post("https://bennyorder.com:64443/password_recovery.php", {
        email: email,
      })
      .then(() => {
        navigate(`/`);
      });
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Enter" || e.key === "NumpadEnter") {
        submit.current.click();
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

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
