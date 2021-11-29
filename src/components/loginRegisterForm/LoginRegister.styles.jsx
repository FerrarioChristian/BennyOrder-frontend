import styled from "styled-components";

export const LoginRegisterButton = styled.button`
  height: 3rem;
  flex: 2;
  border: none;
  background-color: #7d2ae7;
  color: white;
  opacity: 1;
  border-radius: 15px;
  font-size: 24px;
  text-transform: uppercase;
`;

export const RegisterButton = styled.button`
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

export const ForgotPassword = styled.a`
  margin-left: auto;
  margin-bottom: 20px;
  color: #7d2ae8;
  opacity: 0.8;
  font-size: small;
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
  width: 480px;
  background-color: #f5f5f5;
  opacity: 100%;
  border-radius: 15px;
  padding: 4rem 3rem;
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
  background-image: url("/assets/bar.png");
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;
