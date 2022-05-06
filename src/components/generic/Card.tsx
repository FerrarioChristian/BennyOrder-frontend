import styled from "styled-components";

import EditIcon from "@mui/icons-material/Edit";

export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20rem, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export const CardInlineFlex = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  color: ${(props) => props.color || "var(--text)"};
  margin-bottom: 0.5rem;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  min-width: 20rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

const StyledDiv = styled.div`
  background: none;
  height: 2em;
  width: 100%;
  margin-bottom: 1rem;
  display: inline-flex;
  gap: 15px;
  align-items: center;
`;

const Title = styled.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-right: auto;
  color: var(--primary);
`;

interface Props {
  title: string;
  isEdit?: boolean;
}

function CardTitle({ title, isEdit }: Props) {
  return (
    <StyledDiv>
      <Title>{title}</Title>
      {isEdit && <EditIcon sx={{ color: "var(--primary)" }} />}
    </StyledDiv>
  );
}

interface ChildrenProps extends Props {
  children: React.ReactNode;
}

function Card({ title, children, isEdit }: ChildrenProps) {
  return (
    <CardContainer>
      <CardTitle title={title} isEdit={isEdit} />
      {children}
    </CardContainer>
  );
}

export default Card;
