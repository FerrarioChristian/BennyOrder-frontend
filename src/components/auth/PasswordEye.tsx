import styled from "styled-components";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const StyledButton = styled.span`
  background: none;
  outline: none;
  border: none;
  cursor: pointer;
`;

interface Props {
  visible: boolean;
  toggleVisibility?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function PasswordEye({ visible, toggleVisibility }: Props) {
  return (
    <StyledButton onClick={toggleVisibility}>
      {visible ? (
        <VisibilityOffIcon sx={{ color: "var(--primary)" }} />
      ) : (
        <VisibilityIcon sx={{ color: "var(--primary)" }} />
      )}
    </StyledButton>
  );
}

export default PasswordEye;
