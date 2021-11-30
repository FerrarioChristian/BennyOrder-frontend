import React from "react";
import styled from "styled-components";
import PersonIcon from "@mui/icons-material/Person";
import PasswordIcon from "@mui/icons-material/Password";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

export default function LoginRegisterInput(props) {
  return (
    <>
      <StyledLable>{props.label}</StyledLable>
      <StyledDiv>
        {(() => {
          if (props.label === "Username") {
            return <PersonIcon sx={{ color: "#7d2ae7" }} />;
          } else if (
            props.label === "Password" ||
            props.label === "Conferma Password"
          ) {
            return <PasswordIcon sx={{ color: "#7d2ae7" }} />;
          } else if (props.label === "Email") {
            return <AlternateEmailIcon sx={{ color: "#7d2ae7" }} />;
          }
        })()}

        <StyledInput type={props.type} onChange={props.onChange} />
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
