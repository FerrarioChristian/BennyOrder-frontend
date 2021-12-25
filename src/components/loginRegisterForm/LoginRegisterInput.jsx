import React from "react";
import styled from "styled-components";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

export default function LoginRegisterInput(props) {
  return (
    <>
      <StyledLable>{props.label}</StyledLable>
      <StyledDiv>
        {(() => {
          if (props.label === "Username") {
            return <PersonOutlinedIcon sx={{ color: "var(--accent)" }} />;
          } else if (
            props.label === "Password" ||
            props.label === "Conferma Password"
          ) {
            return <LockOutlinedIcon sx={{ color: "var(--accent)" }} />;
          } else if (props.label === "Email") {
            return <MailOutlineIcon sx={{ color: "var(--accent)" }} />;
          }
        })()}

        <StyledInput
          placeholder={props.placeholder}
          type={props.type}
          onChange={props.onChange}
        />
      </StyledDiv>
    </>
  );
}

const StyledInput = styled.input`
  background: none;
  height: 2em;
  width: 100%;
  border: none;
  color: var(--primary);
  outline: none;
`;

const StyledLable = styled.label`
  font-size: medium;
  height: 2em;
  color: var(--accent);
  margin-bottom: 10px;
`;

const StyledDiv = styled.div`
  background: none;
  height: 2em;
  width: 100%;
  border-bottom: 2px solid var(--accent);
  margin-bottom: 2rem;
  display: inline-flex;
  gap: 15px;
`;
