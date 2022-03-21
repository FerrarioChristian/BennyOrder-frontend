import styled from "styled-components";
import useToggle from "../../hooks/useToggle";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const PasswordEye = () => {
  const [showPassword, toggleShowPassword] = useToggle(false);

  return (
    <StyledButton onClick={toggleShowPassword}>
      {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  color: var(--accent);
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;
export default PasswordEye;
