import React, { useRef, useState } from "react";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import {
  Background,
  FormContainer,
  InputContainer,
  LoginRegisterButton,
  ErrorLabel,
  LoginRegisterSwitch,
} from "../components/loginRegisterForm/LoginRegister.styles";
import { useNavigate } from "react-router-dom";
import { useTitle } from "hooks/useTitle";
import axiosInstance from "utils/axios";
import { useEventListener } from "hooks/useEventListener";
import { submitOnEnter } from "utils/events";

export default function Register() {
  const [clubname, setClubname] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const error = useRef(null);
  const submit = useRef(null);
  let navigate = useNavigate();

  useTitle("Registrati - BennyOrder");
  useEventListener("keydown", submitOnEnter(submit));

  const sumbitRegister = () => {
    axiosInstance
      .post("/register.php", {
        clubname: clubname,
        password: password,
        email: email,
      })
      .then(() => navigate(`/`))
      .catch((err) => {
        if ((err.response.status = 401)) {
          error.current.innerHTML = err.response.data.msg;
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
          <ErrorLabel ref={error}></ErrorLabel>

          <LoginRegisterButton
            ref={submit}
            type="button"
            onClick={sumbitRegister}
          >
            Registrati
          </LoginRegisterButton>
          <LoginRegisterSwitch to="/login">Login</LoginRegisterSwitch>
        </FormContainer>
      </Background>
    </>
  );
}
