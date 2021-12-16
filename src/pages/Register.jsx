import React, { useState } from "react";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import axios from "axios";

import {
  Background,
  FormContainer,
  InputContainer,
  ButtonContainer,
  LoginRegisterButton,
  RegisterButton,
  ErrorLabel,
} from "../components/loginRegisterForm/LoginRegister.styles";

export default function Register() {
  const [clubname, setClubname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const sumbitRegister = () => {
    axios
      .post("https://bennyorder.com:64443/register.php", {
        clubname: clubname,
        password: password,
        email: email,
      })
      .then()
      .catch((err) => {
        if ((err.response.status = 401)) {
          document.getElementById("errore").innerHTML = err.response.data.msg;
        }
      });
  };

  return (
    <>
      <Background>
        <FormContainer>
          <InputContainer>
            <LoginRegisterInput
              type="text"
              label="Username"
              onChange={(e) => setClubname(e.target.value)}
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
              label="Conferma Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <ErrorLabel id="errore"></ErrorLabel>

          {/* <RememberMe onClick={setRememberValue}></RememberMe> */}
          <ButtonContainer>
            <LoginRegisterButton type="button" onClick={sumbitRegister}>
              Register
            </LoginRegisterButton>
            <RegisterButton type="button" to="/login">
              Login
            </RegisterButton>
          </ButtonContainer>
        </FormContainer>
      </Background>
    </>
  );
}
