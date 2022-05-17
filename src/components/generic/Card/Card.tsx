import styled from "styled-components";
import { CardType } from "./card.types";
import CardTitle from "./CardTitle";

const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  min-width: 31rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

function Card({ title, children, isEdit, toggleEdit, nameInputRef }: CardType) {
  return (
    <CardContainer>
      <CardTitle
        title={title}
        isEdit={isEdit}
        toggleEdit={toggleEdit}
        nameInputRef={nameInputRef}
      />
      {children}
    </CardContainer>
  );
}

export default Card;
