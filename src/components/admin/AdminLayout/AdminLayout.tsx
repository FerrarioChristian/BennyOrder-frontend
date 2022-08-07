import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import AdminNavLink from "./AdminNavLink";
import LogoNavLink from "./LogoNavLink";
import ProfileNavLink from "./ProfileNavLink";
import adminNavLinks from "./adminNavLinks";
import { useGetUserInfo } from "../../../utils/apiCalls/auth";
import useTitle from "../../../hooks/useTitle";

const MainContainer = styled.main`
  padding: 40px 60px;
  flex-grow: 1;
  background-color: var(--background);
  overflow-y: auto;
  max-height: 100vh;

  @media only screen and (max-width: 600px) {
    & {
      padding: 15px;
    }
  }
`;

const SideBarUL = styled.ul`
  list-style: none;
  margin-top: 20px;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const SideBarContainer = styled.nav`
  color: var(--background);
  display: flex;
  flex-direction: column;
  min-width: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "250px;" : "78px;"};
  width: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "250px;" : "78px;")};
  height: 100vh;
  padding: 8px 14px;
  background: var(--primary);
  transition: width 0.2s ease;

  @media only screen and (max-width: 600px) {
    & {
      min-width: ${({ isOpen }: { isOpen: boolean }) =>
        !isOpen ? "250px;" : "78px;"};
      width: ${({ isOpen }: { isOpen: boolean }) =>
        !isOpen ? "250px;" : "78px;"};
    }
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--primary);
  cursor: default;
`;

export const HeaderLine = styled.hr`
  border: none;
  height: 2px;
  background-color: var(--primary);
  margin-bottom: 1.5rem;
`;

const AdminLayoutContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
`;

function AdminLayout() {
  const { data, isLoading } = useGetUserInfo();

  useTitle(`${data?.data.clubname} - BennyOrder`);

  const [isOpen, setIsOpen] = useState(true);

  if (isLoading) return <h2>PLoading...</h2>;

  return (
    <AdminLayoutContainer>
      <SideBarContainer isOpen={isOpen}>
        <LogoNavLink isOpen={isOpen} setIsOpen={setIsOpen} />
        <SideBarUL>
          {adminNavLinks.map((res) => (
            <AdminNavLink
              key={res.route}
              isOpen={isOpen}
              label={res.label}
              icon={res.icon}
              route={res.route}
            />
          ))}
          <ProfileNavLink
            isOpen={isOpen}
            name={data?.data.username}
            clubname={data?.data.clubname}
          />
        </SideBarUL>
      </SideBarContainer>
      <MainContainer>
        <Outlet />
      </MainContainer>
    </AdminLayoutContainer>
  );
}

export default AdminLayout;
