import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useEventListener } from "../../hooks/useEventListener";
import { useTitle } from "../../hooks/useTitle";
import axiosInstance from "../../utils/axios";
import { submitOnEnter } from "../../utils/events";

import {
  Background,
  FormContainer,
  InputContainer,
  LoginRegisterButton,
  ErrorLabel,
} from "./LoginRegister.styles";
import LoginRegisterInput from "./LoginRegisterInput";

interface Props {
  confirm_code?: string;
}

const RecoverPassword = ({ confirm_code }: Props) => {
  const error = useRef<HTMLLabelElement>(document.createElement("label"));
  const submit = useRef<HTMLButtonElement>(document.createElement("button"));
  const password = useRef<HTMLInputElement>(document.createElement("input"));
  const confirm_password = useRef<HTMLInputElement>(null);
  let navigate = useNavigate();

  useTitle("Recupero Password - BennyOrder");
  useEventListener("keydown", submitOnEnter(submit));

  const sumbitRegister = () => {
    axiosInstance
      .post("/password_recovery.php", {
        confirm_code: confirm_code,
        password: password.current.value,
      })
      .then(() => {
        navigate(`/password_changed`);
      })
      .catch((err) => {
        console.log(err);
        if (err.response.status === 401) {
          error.current.innerHTML =
            err.response.data.msg ?? "Errore sconosciuto.";
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
              ref={password}
            />
            <LoginRegisterInput
              placeholder="Minimo 8 caratteri"
              type="password"
              label="Conferma Password"
              ref={confirm_password}
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
};

export default RecoverPassword;
