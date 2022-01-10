import React, { useRef, useState } from "react";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import { useNavigate } from "react-router-dom";
import { useTitle } from "hooks/useTitle";
import axiosInstance from "utils/axios";
import {
  Background,
  FormContainer,
  InputContainer,
  LoginRegisterButton,
  ErrorLabel,
} from "../loginRegisterForm/LoginRegister.styles";
import { useEventListener } from "hooks/useEventListener";
import { submitOnEnter } from "utils/events";

export default function RecoverPassword({ confirm_code }) {
  const error = useRef(null);
  const submit = useRef(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  let navigate = useNavigate();

  useTitle("Recupero Password - BennyOrder");
  useEventListener("keydown", submitOnEnter(submit));

  const sumbitRegister = () => {
    axiosInstance
      .post("/password_recovery.php", {
        confirm_code: confirm_code,
        password: password,
      })
      .then(() => navigate(`/password_changed`))
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
              placeholder="Minimo 8 caratteri"
              type="password"
              label="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <LoginRegisterInput
              placeholder="Minimo 8 caratteri"
              type="password"
              label="Conferma Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </InputContainer>
          <ErrorLabel ref={error}></ErrorLabel>

          <LoginRegisterButton
            ref={submit}
            type="button"
            onClick={sumbitRegister}
          >
            Conferma
          </LoginRegisterButton>
        </FormContainer>
      </Background>
    </>
  );
}
