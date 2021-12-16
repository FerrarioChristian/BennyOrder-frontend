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
  ButtonContainer,
  LoginRegisterButton,
  RegisterButton,
  ErrorLabel,
  ErrorContainer,
} from "../components/loginRegisterForm/LoginRegister.styles";

export default function Login() {
  const [clubname, setClubname] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(undefined);
  let navigate = useNavigate();

  const sumbitLogin = async () => {
    await axios
      .post("https://bennyorder.com:64443/login.php", {
        clubname: clubname,
        password: password,
        remember: remember,
      })
      .then(() => {
        navigate(`/home`);
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
          <InputContainer>
            <LoginRegisterInput
              type="text"
              label="Clubname"
              onChange={(e) => setClubname(e.target.value)}
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
