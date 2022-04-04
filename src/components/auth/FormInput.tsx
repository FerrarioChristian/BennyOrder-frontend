import { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import usePasswordToggle from "../../hooks/usePasswordToggle";

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
  type?: string;
}

function FormInput(
  { label, placeholder, type }: Props,
  ref: ForwardedRef<HTMLInputElement>
) {
  const [inputType, PasswordEye] = usePasswordToggle();

  return (
    <>
      <StyledLabel>{label}</StyledLabel>
      <StyledDiv>
        {() => {
          switch (type) {
            case "text":
              return <PersonOutlinedIcon sx={{ color: "var(--accent)" }} />;
            case "password":
              return <LockOutlinedIcon sx={{ color: "var(--accent)" }} />;
            case "email":
              return <MailOutlineIcon sx={{ color: "var(--accent)" }} />;
            default:
              return null;
          }
        }}
        <StyledInput
          placeholder={placeholder}
          type={type === "password" ? inputType : type}
          ref={ref}
        />
        {type === "password" && PasswordEye}
      </StyledDiv>
    </>
  );
}

export default forwardRef(FormInput);
