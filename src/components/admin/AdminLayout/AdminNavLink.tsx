import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactNode } from "react";

interface Props {
  isOpen: boolean;
  route: string;
  icon: ReactNode;
  label: string;
}

const AdminNavLink = ({ isOpen, route, icon, label }: Props) => {
  return (
    <StyledLink to={route}>
      <ILink>{icon}</ILink>
      <SpanLink isOpen={isOpen}>{label}</SpanLink>
      <span></span>
    </StyledLink>
  );
};

const SpanLink = styled.span`
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "1;" : "0;")};
  pointer-events: none;
  transition: all 0.1s ease;
  text-decoration: none;
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

const StyledLink = styled(Link)`
  position: relative;
  margin: 8px 0;
  list-style: none;
  border-radius: 12px;
  transition: all 0.2s ease;
  color: var(--primary);
  cursor: pointer;
  display: flex;
  align-items: center;
  text-decoration: none;

  &:hover {
    background-color: var(--primary);
    color: var(--background);
  }
`;

export default AdminNavLink;
