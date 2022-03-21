import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";
import Logout from "../../auth/Logout";

interface Props {
  name: string;
  description: string;
  isOpen: boolean;
}

const ProfileNavLink = ({ name, description, isOpen }: Props) => {
  return (
    <ProfileNav>
      <ProfileInfoContainer isOpen={isOpen}>
        <StyledImgProfile
          src="https://www.w3schools.com/images/w3schools_green.jpg"
          alt="Profile"
        />
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
};
export default ProfileNavLink;

const Name = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: var(--primary);
  white-space: nowrap;
`;

const Description = styled.p`
  font-size: 15px;
  font-weight: 400;
  color: var(--primary);
  white-space: nowrap;
`;

const LogoutButton = styled(Logout)`
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  line-height: 60px;
  font-size: 18px;
  transition: all 0.5s ease;
  height: 50px;
  width: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  cursor: pointer;

  &:hover {
    background-color: var(--primary);
    color: var(--background);
  }
`;

const StyledImgProfile = styled.img`
  height: 45px;
  width: 45px;
  min-width: 45px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 6px;
  cursor: pointer;
`;

const ProfileInfoContainer = styled.div`
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "1;" : "0;")};
  transition: 0.2s;
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

const ProfileNav = styled.li`
  width: 100%;
  position: relative;
  margin-top: auto;
`;
