import React from "react";
import styled from "styled-components";

export default function LoginRegisterButton() {
  return <StyledButton>Login</StyledButton>;
}

const StyledButton = styled.button`
  height: 2em;
  width: 200px;
  border: none;
  background-color: #7d2ae7;
  color: white;
  opacity: 1;
`;
