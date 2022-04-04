import React, { useRef, useState } from "react";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  Background,
  FormContainer,
  InputContainer,
  LoginRegisterButton,
  ErrorLabel,
  LoginRegisterSwitch,
} from "./LoginRegister.styles";
import useTitle from "../../hooks/useTitle";
import axiosInstance from "../../utils/axios";
import FormInput from "./FormInput";
import submitOnEnter from "../../utils/events";
import useEventListener from "../../hooks/useEventListener";

function Register() {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const submit = useRef<HTMLButtonElement>(null);
  const [isFetching, setIsFetching] = useState(false);

  const error = useRef<HTMLLabelElement>(null);
  const navigate = useNavigate();

  useTitle("Registrati - BennyOrder");
  useEventListener("keydown", submitOnEnter(submit));

  const submitRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password.current?.value !== confirmPassword.current?.value) {
      error.current!.innerHTML = "Le password non coincidono.";
    } else {
      setIsFetching(true);
      axiosInstance
        .post("/register.php", {
          username: username.current?.value,
          password: password.current?.value,
          email: email.current?.value,
        })
        .then(() => {
          navigate("/emailsent");
          setIsFetching(false);
        })
        .catch((err) => {
          error.current!.innerHTML =
            err.response.data.msg ?? "Errore sconosciuto.";
          setIsFetching(false);
        });
    }
  };

  return (
    <Background>
      <FormContainer onSubmit={submitRegister}>
        <InputContainer>
          <FormInput
            placeholder="Username"
            type="text"
            label="Username"
            ref={username}
          />
          <FormInput
            placeholder="me@example.com"
            type="email"
            label="Email"
            ref={email}
          />
          <FormInput
            placeholder="Minimo 8 caratteri"
            type="password"
            label="Password"
            ref={password}
          />
          <FormInput
            placeholder="Minimo 8 caratteri"
            type="password"
            label="Conferma Password"
            ref={confirmPassword}
          />
        </InputContainer>
        <ErrorLabel ref={error} />

        <LoginRegisterButton ref={submit} type="submit" disabled={isFetching}>
          {isFetching ? (
            <CircularProgress color="inherit" size="30px" />
          ) : (
            "Registrati"
          )}
        </LoginRegisterButton>
        <LoginRegisterSwitch to="/login">Login</LoginRegisterSwitch>
      </FormContainer>
    </Background>
  );
}
export default Register;
