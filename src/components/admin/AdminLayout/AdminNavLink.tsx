import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { ReactNode } from "react";

const SpanLink = styled.span`
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "1;" : "0;")};
  pointer-events: none;
  transition: all 0.1s ease;
  text-decoration: none;

  @media only screen and (max-width: 600px) {
    & {
      opacity: ${({ isOpen }: { isOpen: boolean }) => (!isOpen ? "1;" : "0;")};
    }
  }
`;

const ILink = styled.i`
  height: 50px;
  min-width: 50px;
  line-height: 50px;
  font-size: 18px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.1s ease;
`;

const StyledLink = styled(NavLink)`
  position: relative;
  margin: 8px 0;
  list-style: none;
  border-radius: 12px;
  transition: all 0.2s ease;
  color: var(--background);
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover,
  &.active {
    background-color: var(--background);
    color: var(--primary);
  }
`;

interface NavLinkType {
  isOpen: boolean;
  route: string;
  icon: ReactNode;
  label: string;
}

function AdminNavLink({ isOpen, route, icon, label }: NavLinkType) {
  return (
    <StyledLink to={route}>
      <ILink>{icon}</ILink>
      <SpanLink isOpen={isOpen}>{label}</SpanLink>
    </StyledLink>
  );
}
export default AdminNavLink;
