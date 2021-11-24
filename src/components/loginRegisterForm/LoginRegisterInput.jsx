import React from "react";
import styled from "styled-components";

export default function LoginRegisterInput() {
  return <StyledInput />;
}

const StyledInput = styled.input`
  background: none;
  height: 2em;
  width: 200px;
  border: none;
  border-bottom: 2px solid #7d2ae7;
  color: white;
`;
