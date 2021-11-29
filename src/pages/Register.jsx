import React, { useState } from "react";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
//import RememberMe from "components/loginRegisterForm/RememberMe";
import axios from "axios";

import {
  Background,
  FormContainer,
  InputContainer,
  ButtonContainer,
  LoginRegisterButton,
  RegisterButton,
} from "../components/loginRegisterForm/LoginRegister.styles";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  //const [remember, setRemember] = useState(undefined);

  const sumbitRegister = () => {
    axios.post("https://www.vivailduce.it:64000/login.php", {
      username: username,
      password: password,
      email: email,
    });
  };

  /* const setRememberValue = () => {
    !remember ? setRemember(true) : setRemember(undefined);
  }; */

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
              type="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginRegisterInput
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginRegisterInput
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          {/* <RememberMe onClick={setRememberValue}></RememberMe> */}
          <ButtonContainer>
            <LoginRegisterButton type="button" onClick={sumbitRegister}>
              Register
            </LoginRegisterButton>
            <RegisterButton type="button">Login</RegisterButton>
          </ButtonContainer>
        </FormContainer>
      </Background>
    </>
  );
}
