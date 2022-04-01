import { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const StyledButton = styled.span`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

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

interface Props {
  label: string;
  placeholder: string;
  type: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function LoginRegisterInput(
  { label, placeholder, type, onClick }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledDiv>
        {(() => {
          if (label === "Username") {
            return (
              <PersonOutlinedIcon sx={{ color: "var(--accent)" }} />
            );
          }
          if (label === "Password" || label === "Conferma Password") {
            return (
              <LockOutlinedIcon sx={{ color: "var(--accent)" }} />
            );
          }
          if (label === "Email") {
            return (
              <MailOutlineIcon sx={{ color: "var(--accent)" }} />
            );
          }
          return null;
        })()}

        <StyledInput
          placeholder={placeholder}
          type={type}
          ref={ref}
        />

        {(() => {
          if (onClick) {
            if (type !== "password") {
              return (
                <StyledButton onClick={onClick}>
                  <VisibilityOffIcon
                    sx={{ color: "var(--primary)" }}
                  />
                </StyledButton>
              );
            }

            return (
              <StyledButton onClick={onClick}>
                <VisibilityIcon sx={{ color: "var(--primary)" }} />
              </StyledButton>
            );
          }
          return null;
        })()}
      </StyledDiv>
    </>
  );
}

export default forwardRef(LoginRegisterInput);
