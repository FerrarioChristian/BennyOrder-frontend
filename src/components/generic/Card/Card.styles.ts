import styled from "styled-components";

export const CardInput = styled.input`
  padding: 2px 13px;
  width: ${({ type }: { type?: string }) =>
    type === "number" ? "4.1rem;" : "10rem;"};
  border-radius: 20px;
  border: 1px solid var(--text);
  color: var(--text);
  font-size: 16px;
`;

export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(31rem, 1fr));
  grid-gap: 1.5rem;
  margin-top: 1.5rem;
`;

export const CardInlineFlex = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.color || "var(--text)"};
  margin-bottom: 1rem;
`;
