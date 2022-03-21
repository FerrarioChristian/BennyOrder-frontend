import React, { useRef, useState } from "react";
import {
  Background,
  FormContainer,
  InputContainer,
  LoginRegisterButton,
  ErrorLabel,
  LoginRegisterSwitch,
} from "./LoginRegister.styles";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import axiosInstance from "../../utils/axios";
import LoginRegisterInput from "./LoginRegisterInput";
import { submitOnEnter } from "../../utils/events";
import { useEventListener } from "../../hooks/useEventListener";
import useToggle from "../../hooks/useToggle";

const Register = () => {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const submit = useRef<HTMLButtonElement>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [showPassword, toggleShowPassword] = useToggle(false);
  const [showConfirmPassword, toggleShowConfirmPassword] = useToggle(false);

  const error = useRef<HTMLLabelElement>(null);
  let navigate = useNavigate();

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
        .then((res) => {
          navigate(`/emailsent`);
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
    <>
      <Background>
        <FormContainer onSubmit={submitRegister}>
          <InputContainer>
            <LoginRegisterInput
              placeholder="Username"
              type="text"
              label="Username"
              ref={username}
            />
            <LoginRegisterInput
              placeholder="me@example.com"
              type="email"
              label="Email"
              ref={email}
            />
            <LoginRegisterInput
              placeholder="Minimo 8 caratteri"
              type={showPassword ? "text" : "password"}
              label="Password"
              ref={password}
              onClick={toggleShowPassword}
            />
            <LoginRegisterInput
              placeholder="Minimo 8 caratteri"
              type={showConfirmPassword ? "text" : "password"}
              label="Conferma Password"
              ref={confirmPassword}
              onClick={toggleShowConfirmPassword}
            />
          </InputContainer>
          <ErrorLabel ref={error}></ErrorLabel>

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
    </>
  );
};
export default Register;
