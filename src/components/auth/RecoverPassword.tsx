import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import useEventListener from "../../hooks/useEventListener";
import useTitle from "../../hooks/useTitle";
import axiosInstance from "../../utils/axios";
import submitOnEnter from "../../utils/events";

import {
  Background,
  FormContainer,
  InputContainer,
  LoginRegisterButton,
  ErrorLabel,
} from "./LoginRegister.styles";
import FormInput from "./FormInput";

interface Props {
  confirm_code?: string;
}

function RecoverPassword({ confirm_code }: Props) {
  const error = useRef<HTMLLabelElement>(null);
  const submit = useRef<HTMLButtonElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const confirmPassword = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  useTitle("Recupero Password - BennyOrder");
  useEventListener("keydown", submitOnEnter(submit));

  const sumbitRegister = () => {
    axiosInstance
      .patch("/accounts/recovery/12", {
        // find a way to get the ID
        confirm_code,
        password: password.current!.value,
      })
      .then(() => {
        navigate("/password_changed");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          error.current!.innerHTML =
            err.response.data.msg ?? "Errore sconosciuto.";
          password.current!.value = "";
          confirmPassword.current!.value = "";
          password.current!.focus();
        }
      });
  };

  return (
    <Background>
      <FormContainer>
        <InputContainer>
          <FormInput
            placeholder="Minimo 8 caratteri"
            type="password"
            label="Password"
            ref={password}
            autocomplete="new-password"
          />
          <FormInput
            placeholder="Minimo 8 caratteri"
            type="password"
            label="Conferma Password"
            ref={confirmPassword}
            autocomplete="new-password"
          />
        </InputContainer>
        <ErrorLabel ref={error} />

        <LoginRegisterButton
          ref={submit}
          type="button"
          onClick={sumbitRegister}
        >
          Conferma
        </LoginRegisterButton>
      </FormContainer>
    </Background>
  );
}
export default RecoverPassword;
