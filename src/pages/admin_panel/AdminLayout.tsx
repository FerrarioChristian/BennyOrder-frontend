import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AdminNavLink from "../../components/adminSidebar/AdminNavLink";
import LogoNavLink from "../../components/adminSidebar/LogoNavLink";
import ProfileNavLink from "../../components/adminSidebar/ProfileNavLink";

const AdminLayout = () => {
  return (
    <AdminLayoutContainer>
      <SideBarContainer>
        <LogoNavLink />
        <SideBarUL>
          <AdminNavLink />
          <AdminNavLink />
          <AdminNavLink />
          <AdminNavLink />
          <AdminNavLink />
          <ProfileNavLink name="nome" description="descrizione" />
        </SideBarUL>
      </SideBarContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </AdminLayoutContainer>
  );
};

const MainContainer = styled.main``;

const SideBarUL = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
`;
const SideBarContainer = styled.nav`
  color: var(--primary);
  display: flex;
  flex-direction: column;
  min-width: 250px;
  width: 250px;
  height: 100vh;
  padding: 6px 14px;
  background: var(--background);
  transition: all 0.5s ease;
`;

const AdminLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;
export default AdminLayout;
