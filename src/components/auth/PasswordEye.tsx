import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { ToggleType } from "../../hooks/useToggle";

const StyledButton = styled.span`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

function PasswordEye({ visible, toggleVisibility }: ToggleType) {
  return (
    <StyledButton onClick={toggleVisibility}>
      {visible ? (
        <VisibilityOffIcon sx={{ color: "var(--accent)" }} />
      ) : (
        <VisibilityIcon sx={{ color: "var(--accent)" }} />
      )}
    </StyledButton>
  );
}

export default PasswordEye;
