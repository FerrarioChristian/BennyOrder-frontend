import styled from "styled-components";
import LogoutIcon from "@mui/icons-material/Logout";

interface Props {
  name: string;
  description: string;
}

const ProfileNavLink = ({ name, description }: Props) => {
  return (
    <ProfileNav>
      <ProfileInfoContainer>
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

const LogoutButton = styled.a`
  content: "\eab1";
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
`;

const StyledImgProfile = styled.img`
  height: 45px;
  width: 45px;
  object-fit: cover;
  margin-right: 10px;
  border-radius: 6px;
`;

const ProfileInfoContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
`;

const ProfileNav = styled.li`
  width: 100%;
  position: relative;
  margin-top: auto;
`;

export default ProfileNavLink;
