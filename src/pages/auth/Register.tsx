import React, { useRef, useState } from "react";
import {
  Background,
  FormContainer,
  InputContainer,
  LoginRegisterButton,
  ErrorLabel,
  LoginRegisterSwitch,
} from "../../components/loginRegisterForm/LoginRegister.styles";
import { CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";
import axiosInstance from "../../utils/axios";
import LoginRegisterInput from "../../components/loginRegisterForm/LoginRegisterInput";
import { submitOnEnter } from "../../utils/events";
import { useEventListener } from "../../hooks/useEventListener";

export default function Register() {
  const username = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const submit = useRef(null);
  const [isFetching, setIsFetching] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const error = useRef<HTMLLabelElement>(document.createElement("label"));
  let navigate = useNavigate();

  useTitle("Registrati - BennyOrder");
  useEventListener("keydown", submitOnEnter(submit));

  const submitRegister = (e: React.SyntheticEvent) => {
    e.preventDefault();
    if (password.current?.value !== confirmPassword.current?.value) {
      error.current.innerHTML = "Le password non coincidono.";
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
          error.current.innerHTML =
            err.response.data.msg ?? "Errore sconosciuto.";
          setIsFetching(false);
        });
    }
  };

  const togglePassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((currShowPassword) => !currShowPassword);
  };

  const toggleConfirmPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowConfirmPassword(
      (currShowConfirmPassword) => !currShowConfirmPassword
    );
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
              onClick={togglePassword}
            />
            <LoginRegisterInput
              placeholder="Minimo 8 caratteri"
              type={showConfirmPassword ? "text" : "password"}
              label="Conferma Password"
              ref={confirmPassword}
              onClick={toggleConfirmPassword}
            />
          </InputContainer>
          <ErrorLabel ref={error}></ErrorLabel>

          <LoginRegisterButton ref={submit} type="submit" disabled={isFetching}>
            {isFetching ? (
              <CircularProgress
                style={{
                  color: "var(--secondary)",
                  margin: "auto",
                  display: "flex",
                }}
                size="30px"
              />
            ) : (
              "Registrati"
            )}
          </LoginRegisterButton>
          <LoginRegisterSwitch to="/login">Login</LoginRegisterSwitch>
        </FormContainer>
      </Background>
    </>
  );
}
