import styled from "styled-components";

const Button = styled.button`
  display: flex;
  color: white;
  background-color: ${(props) => props.color || "var(--primary)"};
  border: 2px solid ${(props) => props.color || "var(--primary)"};
  font-size: 16px;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 2px 15px;
  cursor: pointer;
  gap: 4px;

  &:hover {
    background-color: transparent;
    color: ${(props) => props.color || "var(--primary)"};
    border: 2px solid ${(props) => props.color || "var(--primary)"};
  }
`;

export default Button;
