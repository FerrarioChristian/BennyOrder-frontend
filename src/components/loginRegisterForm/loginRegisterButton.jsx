import React from "react";
import styled from "styled-components";

export default function LoginRegisterButton() {
  return <StyledButton>Login</StyledButton>;
}

const StyledButton = styled.button`
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
