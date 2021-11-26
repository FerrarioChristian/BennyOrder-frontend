import React from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";

export default function LoginRegisterInput() {
  return (
    <>
      <StyledLable>Username:</StyledLable>
      <StyledDiv>
        <PersonIcon sx={{ color: "#7d2ae7" }} />
        <StyledInput />
      </StyledDiv>
    </>
  );
}

const StyledInput = styled.input`
  background: none;
  height: 2em;
  width: 100%;
  border: none;
  color: black;
  outline: none;
`;

const StyledLable = styled.label`
  font-size: medium;
  height: 2em;
  color: black;
  margin-bottom: 10px;
`;

const StyledDiv = styled.div`
  background: none;
  height: 2em;
  width: 100%;
  border-bottom: 2px solid #7d2ae7;
  margin-bottom: 40px;
  display: inline-flex;
  gap: 15px;
`;
