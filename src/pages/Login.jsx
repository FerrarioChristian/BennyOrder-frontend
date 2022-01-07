import React, { useState } from "react";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import RememberMe from "components/loginRegisterForm/RememberMe";
import axios from "axios";
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

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(undefined);
  let navigate = useNavigate();

  const sumbitLogin = () => {
    axios
      .post(
        "https://bennyorder.com:64443/login.php",
        {
          email: email,
          password: password,
          remember: remember,
        },
        { withCredentials: true }
      )
      .then(() => {
        localStorage.setItem("isLogged", "true");
        navigate(`/`);
      })
      .catch((err) => {
        if (err.response.status === 401) {
          document.getElementById("errore").innerHTML =
            "Username o password invalidi";
        }
      });
  };

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
            <ErrorLabel id="errore"></ErrorLabel>
            <ForgotPassword href="register">
              Password dimenticata?
            </ForgotPassword>
          </ErrorContainer>
          <RememberMe onClick={setRememberValue}></RememberMe>

          <LoginRegisterButton type="button" onClick={sumbitLogin}>
            Accedi
          </LoginRegisterButton>
          <LoginRegisterSwitch to="/register">Registrati</LoginRegisterSwitch>
        </FormContainer>
      </Background>
    </>
  );
}
