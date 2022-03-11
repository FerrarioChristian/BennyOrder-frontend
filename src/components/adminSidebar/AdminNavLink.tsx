import { Link } from "react-router-dom";
import styled from "styled-components";

const AdminNavLink = () => {
  return (
    <StyledLink to="/admin/dashboard">
      <ALink>
        <ILink></ILink>
        <SpanLink>Dashboard</SpanLink>
      </ALink>
      <span></span>
    </StyledLink>
  );
};

const SpanLink = styled.span`
  color: #fff;
  font-size: 15px;
  font-weight: 400;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transition: 0.4s;
`;

const ILink = styled.i`
  height: 50px;
  line-height: 50px;
  font-size: 18px;
`;

const ALink = styled.a`
  display: flex;
  border-radius: 12px;
  align-items: center;
  text-decoration: none;
  transition: all 0.4s ease;
`;

const StyledLink = styled(Link)`
  position: relative;
  margin: 8px 0;
  list-style: none;
  border-radius: 12px;
  transition: all 0.2s ease;
  cursor: pointer;

  &:hover {
    background-color: var(--primary);
  }
`;

export default AdminNavLink;
