import styled from "styled-components";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { CardActionsType } from "../../../utils/types";
import { CardInlineFlex } from "./Card.styles";

export const CardActionsButton = styled.button`
  display: flex;
  color: white;
  background-color: transparent;
  color: ${(props) => props.color || "var(--primary)"};
  border: 2px solid ${(props) => props.color || "var(--primary)"};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 2px 15px;
  cursor: pointer;

  &:hover {
    color: white;
    background-color: ${(props) => props.color || "var(--primary)"};
    border: 2px solid ${(props) => props.color || "var(--primary)"};
  }

  &:first-child {
    margin-right: auto;
  }

  &:last-child {
    color: white;
    background-color: ${(props) => props.color || "var(--primary)"};
    border: 2px solid ${(props) => props.color || "var(--primary)"};

    &:hover {
      background-color: transparent;
      color: ${(props) => props.color || "var(--primary)"};
      border: 2px solid ${(props) => props.color || "var(--primary)"};
    }
  }
`;

const CardActionsButtonContainer = styled(CardInlineFlex)`
  gap: 0.5rem;
  margin-top: 1rem;
  margin-bottom: 0;
`;

function CardActions({ submit, cancel, deletes }: CardActionsType) {
  return (
    <CardActionsButtonContainer>
      {deletes && (
        <CardActionsButton onClick={deletes} color="var(--danger)">
          <DeleteForeverIcon />
        </CardActionsButton>
      )}
      {cancel && (
        <CardActionsButton onClick={cancel} color="var(--text)">
          <ClearIcon />
        </CardActionsButton>
      )}
      {submit && (
        <CardActionsButton onClick={submit} color="var(--success)">
          <CheckIcon sx={{ marginRight: "6px;" }} />
          Conferma
        </CardActionsButton>
      )}
    </CardActionsButtonContainer>
  );
}

export default CardActions;
