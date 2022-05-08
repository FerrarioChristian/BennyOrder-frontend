import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Logout from "../../auth/Logout";

interface Props {
  name: string;
  description: string;
  isOpen: boolean;
}

const Name = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--background);
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: var(--background);
  white-space: nowrap;
`;

const LogoutButton = styled(Logout)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  line-height: 60px;
  font-size: 18px;
  transition: all 0.2s ease;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--background);
    color: var(--primary);
  }
`;

const StyledImgProfile = styled.span`
  height: 45px;
  width: 45px;
  min-width: 45px;
  border-radius: 6px;
  color: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
`;

const ProfileInfoContainer = styled.div`
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "1;" : "0;")};
  transition: 0.2s;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;

  @media only screen and (max-width: 600px) {
    opacity: ${({ isOpen }: { isOpen: boolean }) => (!isOpen ? "1;" : "0;")};
  }
`;

const ProfileNav = styled.li`
  width: 100%;
  position: relative;
  margin-top: auto;
`;

function ProfileNavLink({ name, description, isOpen }: Props) {
  return (
    <ProfileNav>
      <ProfileInfoContainer isOpen={isOpen}>
        <StyledImgProfile>
          <AccountCircleIcon sx={{ fontSize: "2.8rem" }} />
        </StyledImgProfile>
        <div>
          <Name>{name}</Name>
          <Description>{description}</Description>
        </div>
      </ProfileInfoContainer>
      <LogoutButton>
        <LogoutIcon />
      </LogoutButton>
    </ProfileNav>
  );
}
export default ProfileNavLink;
