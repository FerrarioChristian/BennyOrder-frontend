import React from "react";
import styled from "styled-components";
import {
  Background,
  BarImage,
} from "../components/loginRegisterForm/BarBackground.style";
import LoginRegisterInput from "components/loginRegisterForm/LoginRegisterInput";
import LoginRegisterButton from "components/loginRegisterForm/loginRegisterButton";

export default function Login() {
  return (
    <BarImage>
      <Background>
        <FormContainer>
          <LoginRegisterInput />
          <LoginRegisterInput />

          <LoginRegisterButton />
          <RegisterButton>Register</RegisterButton>
        </FormContainer>
      </Background>
    </BarImage>
  );
}

const RegisterButton = styled.a`
  color: #7d2ae7;
  text-decoration: none;
  font-family: "Open Sans", sans-serif;
`;

const FormContainer = styled.div`
  display: flex;
  height: 30em;
  width: 25em;
  background-color: white;
`;
