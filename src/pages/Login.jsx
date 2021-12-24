import React, { useState } from "react";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import RememberMe from "components/loginRegisterForm/RememberMe";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import {
  Background,
  FormContainer,
  InputContainer,
  ForgotPassword,
  ButtonContainer,
  LoginRegisterButton,
  RegisterButton,
  ErrorLabel,
  ErrorContainer,
} from "../components/loginRegisterForm/LoginRegister.styles";

export default function Login({ authenticate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(undefined);
  let navigate = useNavigate();

  const sumbitLogin = async () => {
    await axios
      .post("https://bennyorder.com:64443/login.php", {
        email: email,
        password: password,
        remember: remember,
      })
      .then(() => {
        authenticate();
        navigate(`/dashboard`);
      })
      .catch((err) => {
        if ((err.response.status = 401)) {
          document.getElementById("errore").innerHTML =
            "Username o password disabili";
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
          <Link to="/dashboard">Back to dashboard</Link>

          <InputContainer>
            <LoginRegisterInput
              type="text"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginRegisterInput
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

          <ButtonContainer>
            <LoginRegisterButton type="button" onClick={sumbitLogin}>
              ACCEDI
            </LoginRegisterButton>
            <RegisterButton type="button" to="/register">
              Registrati
            </RegisterButton>
          </ButtonContainer>
        </FormContainer>
      </Background>
    </>
  );
}
