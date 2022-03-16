import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AdminNavLink from "../../components/adminSidebar/AdminNavLink";
import LogoNavLink from "../../components/adminSidebar/LogoNavLink";
import ProfileNavLink from "../../components/adminSidebar/ProfileNavLink";
import { adminNavLinks } from "../../utils/navBarLinks";

const AdminLayout = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <AdminLayoutContainer>
      <SideBarContainer isOpen={isOpen}>
        <LogoNavLink isOpen={isOpen} setIsOpen={setIsOpen} />
        <SideBarUL>
          {adminNavLinks.map((res) => (
            <AdminNavLink
              isOpen={isOpen}
              label={res.label}
              icon={res.icon}
              route={res.route}
            />
          ))}
          <ProfileNavLink
            isOpen={isOpen}
            name="nome"
            description="descrizione"
          />
        </SideBarUL>
      </SideBarContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </AdminLayoutContainer>
  );
};

const MainContainer = styled.main`
  padding: 40px 40px;
`;

const SideBarUL = styled.ul`
  list-style: none;
  margin-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
const SideBarContainer = styled.nav`
  color: var(--primary);
  display: flex;
  flex-direction: column;
  min-width: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "250px;" : "78px;"};
  width: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "250px;" : "78px;")};
  height: 100vh;
  padding: 8px 14px;
  background: var(--background);
  transition: all 0.2s ease;
`;

const AdminLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
export default AdminLayout;
