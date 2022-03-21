import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginRegisterButton = styled.button`
  height: 3rem;
  border: none;
  background-color: var(--accent);
  color: var(--background);
  border-radius: 50px;
  font-size: x-large;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoginRegisterSwitch = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--accent);
  text-decoration: none;
  text-underline-offset: 2px;
  height: 3rem;
  border: 1px solid var(--accent);
  border-radius: 50px;
  font-size: large;

  margin-top: 1rem;
`;

export const ForgotPassword = styled(Link)`
  margin-left: auto;
  margin-bottom: 20px;
  color: var(--accent);
  opacity: 0.8;
  font-size: small;
  text-decoration-thickness: 1px;
  text-underline-offset: 2px;
  font-weight: 100;
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 60%;
  width: 100%;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 420px;
  background-color: var(--background);
  opacity: 100%;
  border-radius: 15px;
  padding: 4rem 3rem;
  margin: 1rem;

  @media only screen and (max-width: 600px) {
    & {
      padding: 2rem 1.5rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: auto;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;
  gap: 48px;
`;

export const Background = styled.div`
  width: 100vw;
  height: 100vh;
  background: radial-gradient(var(--accent), var(--background));
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorLabel = styled.label`
  color: var(--danger);
  font-size: small;
  margin-bottom: 1rem;
`;

export const ErrorContainer = styled.div`
  display: inline-flex;
`;
