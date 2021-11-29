import React, { useState } from "react";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import RememberMe from "components/loginRegisterForm/RememberMe";
import axios from "axios";

import {
  Background,
  FormContainer,
  InputContainer,
  ForgotPassword,
  ButtonContainer,
  LoginRegisterButton,
  RegisterButton,
} from "../components/loginRegisterForm/LoginRegister.styles";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(undefined);

  const sumbitLogin = () => {
    axios.post("https://www.vivailduce.it:64000/login.php", {
      username: username,
      password: password,
      remember: remember,
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
              label="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <LoginRegisterInput
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <ForgotPassword href="vivailduce">
            Forgot your password?
          </ForgotPassword>
          <RememberMe onClick={setRememberValue}></RememberMe>
          <ButtonContainer>
            <LoginRegisterButton type="button" onClick={sumbitLogin}>
              LOGIN
            </LoginRegisterButton>
            <RegisterButton type="button">Register</RegisterButton>
          </ButtonContainer>
        </FormContainer>
      </Background>
    </>
  );
}
