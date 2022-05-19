import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import { CardTitleType } from "./card.types";
import { CardInlineFlex, CardInput } from "./Card.styles";

const Title = styled.p`
  text-transform: uppercase;
  font-size: 1.5rem;
  margin-right: auto;
`;

const CardTitleInput = styled(CardInput)`
  font-size: 24px;
  text-transform: uppercase;
  width: 100%;
  color: var(--primary);
`;

function CardTitle({ title, isEdit, toggleEdit, nameInputRef }: CardTitleType) {
  return (
    <CardInlineFlex color="var(--primary)">
      {!isEdit || !nameInputRef ? (
        <>
          <Title>{title}</Title>
          <EditIcon sx={{ cursor: "pointer" }} onClick={toggleEdit} />
        </>
      ) : (
        <CardTitleInput defaultValue={title} ref={nameInputRef} />
      )}
    </CardInlineFlex>
  );
}

export default CardTitle;
