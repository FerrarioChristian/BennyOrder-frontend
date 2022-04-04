import React, { useRef, useState } from "react";

import { CircularProgress } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Background,
  FormContainer,
  InputContainer,
  ForgotPassword,
  LoginRegisterButton,
  ErrorLabel,
  ErrorContainer,
  LoginRegisterSwitch,
} from "./LoginRegister.styles";
import useTitle from "../../hooks/useTitle";
import useEventListener from "../../hooks/useEventListener";
import submitOnEnter from "../../utils/events";
import axiosInstance from "../../utils/axios";
import FormInput from "./FormInput";
import RememberMe from "./RememberMe";
import useToggle from "../../hooks/useToggle";

function Login() {
  const [remember, toggleRemember] = useToggle(false);
  const email = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  const error = useRef<HTMLLabelElement>(null);
  const submit = useRef(null);
  const [isFetching, setIsFetching] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const state = location.state as { from: Location };
  const from = state?.from.pathname || "/";

  useTitle("Accedi - BennyOrder");
  useEventListener("keydown", submitOnEnter(submit));

  const submitLogin = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setIsFetching(true);
    axiosInstance
      .post(
        "/login.php",
        {
          email: email.current?.value,
          password: password.current?.value,
          remember,
        },
        { withCredentials: true }
      )
      .then(() => {
        navigate(from, { replace: true });
        setIsFetching(false);
      })
      .catch((err) => {
        setIsFetching(false);
        if (err.response.status === 401) {
          error.current!.innerHTML =
            err.response.data.msg ?? "Errore sconosiuto.";
        } else if (err.response.status === 403) {
          error.current!.innerHTML =
            err.response.data.msg ?? "Errore sconosciuto.";
        }
      });
  };

  return (
    <Background>
      <FormContainer onSubmit={submitLogin}>
        <InputContainer>
          <FormInput
            placeholder="me@example.com"
            type="text"
            label="Email"
            ref={email}
          />
          <FormInput
            placeholder="Password"
            type="password"
            label="Password"
            ref={password}
          />
        </InputContainer>
        <ErrorContainer>
          <ErrorLabel ref={error} />
          <ForgotPassword to="/forgotpassword/email">
            Password dimenticata?
          </ForgotPassword>
        </ErrorContainer>
        <RememberMe onClick={toggleRemember} />

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
            "Accedi"
          )}
        </LoginRegisterButton>
        <LoginRegisterSwitch to="/register">Registrati</LoginRegisterSwitch>
      </FormContainer>
    </Background>
  );
}
export default Login;
