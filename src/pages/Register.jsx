import React, { useEffect, useRef, useState } from "react";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import axios from "axios";

import {
  Background,
  FormContainer,
  InputContainer,
  LoginRegisterButton,
  ErrorLabel,
  LoginRegisterSwitch,
} from "../components/loginRegisterForm/LoginRegister.styles";
import { useNavigate } from "react-router-dom";
import { useTitle } from "hooks/useTitle";

export default function Register() {
  useTitle("Registrati - BennyOrder");
  const [clubname, setClubname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const error = useRef(null);
  const submit = useRef(null);
  let navigate = useNavigate();

  const sumbitRegister = () => {
    axios
      .post("https://bennyorder.com:64443/register.php", {
        clubname: clubname,
        password: password,
        email: email,
      })
      .then(() => navigate(`/`))
      .catch((err) => {
        if ((err.response.status = 401)) {
          error.current.innerHTML = err.response.data.msg;
        }
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
      <Background>
        <FormContainer>
          <InputContainer>
            <LoginRegisterInput
              placeholder="Username"
              type="text"
              label="Username"
              onChange={(e) => setClubname(e.target.value)}
            />
            <LoginRegisterInput
              placeholder="me@example.com"
              type="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginRegisterInput
              placeholder="Minimo 8 caratteri"
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginRegisterInput
              placeholder="Minimo 8 caratteri"
              type="password"
              label="Conferma Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <ErrorLabel ref={error}></ErrorLabel>

          <LoginRegisterButton
            ref={submit}
            type="button"
            onClick={sumbitRegister}
          >
            Registrati
          </LoginRegisterButton>
          <LoginRegisterSwitch to="/login">Login</LoginRegisterSwitch>
        </FormContainer>
      </Background>
    </>
  );
}
