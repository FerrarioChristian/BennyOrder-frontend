import { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";

interface Props {
  label: string;
  placeholder: string;
  type: string;
}

const LoginRegisterInput = (
  props: Props,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <>
      <StyledLabel>{props.label}</StyledLabel>
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
          ref={ref}
        />
      </StyledDiv>
    </>
  );
};

export default forwardRef(LoginRegisterInput);

const StyledInput = styled.input`
  background: none;
  height: 2em;
  width: 100%;
  border: none;
  color: var(--primary);
  outline: none;
`;

const StyledLabel = styled.label`
  font-size: small;
  height: 1em;
  color: var(--accent);
  margin-bottom: 1rem;
`;

const StyledDiv = styled.div`
  background: none;
  height: 2em;
  width: 100%;
  border-bottom: 2px solid var(--accent);
  margin-bottom: 1rem;
  display: inline-flex;
  gap: 15px;
`;
