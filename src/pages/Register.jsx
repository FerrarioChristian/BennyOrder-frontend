import React, { useState } from "react";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import axios from "axios";

import {
  Background,
  FormContainer,
  InputContainer,
  LoginRegisterButton,
  ErrorLabel,
  LoginRegisterSwitch,
} from "../components/loginRegisterForm/LoginRegister.styles";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [clubname, setClubname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  let navigate = useNavigate();

  const sumbitRegister = () => {
    axios
      .post("https://bennyorder.com:64443/register.php", {
        clubname: clubname,
        password: password,
        email: email,
      })
      .then(() => navigate(`/home`))
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
              placeholder="Username"
              type="text"
              label="Username"
              onChange={(e) => setClubname(e.target.value)}
            />
            <LoginRegisterInput
              placeholder="me@example.com"
              type="email"
              label="Email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <LoginRegisterInput
              placeholder="Minimo 8 caratteri"
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginRegisterInput
              placeholder="Minimo 8 caratteri"
              type="password"
              label="Conferma Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </InputContainer>
          <ErrorLabel id="errore"></ErrorLabel>

          <LoginRegisterButton type="button" onClick={sumbitRegister}>
            Registrati
          </LoginRegisterButton>
          <LoginRegisterSwitch to="/login">Login</LoginRegisterSwitch>
        </FormContainer>
      </Background>
    </>
  );
}
