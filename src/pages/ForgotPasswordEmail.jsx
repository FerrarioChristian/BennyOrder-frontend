import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTitle } from "hooks/useTitle";
import axiosInstance from "utils/axios";

export default function ForgotPasswordEmail() {
  useTitle("Recupero Password - BennyOrder");
  const submit = useRef(null);

  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const submitLogin = () => {
    axiosInstance
      .post("/password_recovery.php", {
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
