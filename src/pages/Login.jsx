import React from "react";
import styled from "styled-components";
import { Background } from "../components/loginRegisterForm/BarBackground.style";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import LoginRegisterButton from "components/loginRegisterForm/loginRegisterButton";
import RememberMe from "components/loginRegisterForm/RememberMe";

export default function Login() {
  return (
    <>
      <Background>
        <FormContainer>
          <InputContainer>
            <LoginRegisterInput />
            <LoginRegisterInput />
          </InputContainer>
          <ForgotPassword href="vivailduce">
            Forgot your password?
          </ForgotPassword>
          <RememberMe></RememberMe>
          <ButtonContainer>
            <LoginRegisterButton />
            <RegisterButton>Register</RegisterButton>
          </ButtonContainer>
        </FormContainer>
      </Background>
    </>
  );
}

const RegisterButton = styled.button`
  color: #7d2ae7;
  text-decoration: none;
  height: 3rem;
  flex: 1;
  border: 2px solid #7d2ae7;
  border-radius: 15px;
  font-size: 20px;
  text-transform: uppercase;
  background-color: #f5f5f5;
`;

const ButtonContainer = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  gap: 48px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 470px;
  width: 480px;
  background-color: #f5f5f5;
  opacity: 100%;
  border-radius: 15px;
  padding: 4rem 3rem;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 60%;
  width: 100%;
`;

const ForgotPassword = styled.a`
  margin-left: auto;
  margin-bottom: 20px;
  color: #7d2ae8;
  opacity: 0.8;
  font-size: small;
`;
