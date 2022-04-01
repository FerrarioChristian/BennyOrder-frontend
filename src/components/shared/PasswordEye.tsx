import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import useToggle from "../../hooks/useToggle";

const StyledButton = styled.button`
  color: var(--accent);
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

function PasswordEye() {
  const [showPassword, toggleShowPassword] = useToggle(false);

  return (
    <StyledButton onClick={toggleShowPassword}>
      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </StyledButton>
  );
}

export default PasswordEye;
