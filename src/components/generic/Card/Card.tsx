import styled from "styled-components";
import { CardType } from "./card.types";
import CardTitle from "./CardTitle";

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  min-width: 22rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

function Card({ title, children, isEdit, toggleEdit }: CardType) {
  return (
    <CardContainer>
      <CardTitle title={title} isEdit={isEdit} toggleEdit={toggleEdit} />
      {children}
    </CardContainer>
  );
}

export default Card;
