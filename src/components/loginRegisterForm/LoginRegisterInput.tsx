import { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

interface Props {
  label: string;
  placeholder: string;
  type: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
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
        {(() => {
          if (props.onClick) {
            if (props.type !== "password") {
              return (
                <StyledButton onClick={props.onClick}>
                  <VisibilityOffIcon sx={{ color: "var(--primary)" }} />
                </StyledButton>
              );
            }

            return (
              <StyledButton onClick={props.onClick}>
                <VisibilityIcon sx={{ color: "var(--primary)" }} />
              </StyledButton>
            );
          }
        })()}
      </StyledDiv>
    </>
  );
};

export default forwardRef(LoginRegisterInput);

const StyledButton = styled.button`
  background: none;
  outline: none;
  border: none;
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
