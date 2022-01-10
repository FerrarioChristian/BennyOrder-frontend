import React, { useEffect, useRef, useState } from "react";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import RememberMe from "components/loginRegisterForm/RememberMe";
import { useNavigate } from "react-router-dom";

import {
  Background,
  FormContainer,
  InputContainer,
  ForgotPassword,
  LoginRegisterButton,
  ErrorLabel,
  ErrorContainer,
  LoginRegisterSwitch,
} from "../components/loginRegisterForm/LoginRegister.styles";
import { useTitle } from "hooks/useTitle";
import axiosInstance from "utils/axios";

export default function Login() {
  useTitle("Accedi - BennyOrder");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(undefined);
  const error = useRef(null);
  const submit = useRef(null);
  let navigate = useNavigate();

  const submitLogin = () => {
    axiosInstance
      .post(
        "/login.php",
        {
          email: email,
          password: password,
          remember: remember,
        },
        { withCredentials: true }
      )
      .then(() => {
        navigate(`/`);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          error.current.innerHTML = "Username o password invalidi.";
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

  const setRememberValue = () => {
    !remember ? setRemember(true) : setRemember(undefined);
  };

  return (
    <>
      <Background>
        <FormContainer>
          <InputContainer>
            <LoginRegisterInput
              placeholder="me@example.com"
              type="text"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginRegisterInput
              placeholder="Password"
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <ErrorContainer>
            <ErrorLabel ref={error}></ErrorLabel>
            <ForgotPassword to="/forgotpassword/email">
              Password dimenticata?
            </ForgotPassword>
          </ErrorContainer>
          <RememberMe onClick={setRememberValue}></RememberMe>

          <LoginRegisterButton ref={submit} type="button" onClick={submitLogin}>
            Accedi
          </LoginRegisterButton>
          <LoginRegisterSwitch to="/register">Registrati</LoginRegisterSwitch>
        </FormContainer>
      </Background>
    </>
  );
}
