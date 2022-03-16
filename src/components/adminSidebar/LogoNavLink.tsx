import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import LogoDevIcon from "@mui/icons-material/LogoDev";

interface Props {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const LogoNavLink = ({ isOpen, setIsOpen }: Props) => {
  const setSideBarOpen = () => {
    setIsOpen((currState) => !currState);
  };

  return (
    <LogoContainer>
      <LogoIcon isOpen={isOpen}>
        <LogoDevIcon />
      </LogoIcon>
      <LogoName isOpen={isOpen}>BennyOrder</LogoName>
      <HamburgerMenu>
        <MenuIcon onClick={setSideBarOpen} />
      </HamburgerMenu>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  height: 60px;
  display: flex;
  align-items: center;
  position: relative;
`;

const LogoIcon = styled.span`
  height: 60px;
  min-width: 50px;
  line-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "1;" : "0;")};
  transition: 0.2s ease;
`;

const LogoName = styled.p`
  font-size: 18px;
  font-weight: 600;
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "1;" : "0;")};
  transition: 0.2s ease;
`;

const HamburgerMenu = styled.span`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  line-height: 60px;
  font-size: 18px;
  transition: all 0.5s ease;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export default LogoNavLink;
