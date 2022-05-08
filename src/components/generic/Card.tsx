import styled from "styled-components";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import { CardActionsType } from "../../utils/types";

export const CardInput = styled.input`
  padding-left: 7px;
  height: 1.5rem;
  width: ${({ type }: { type?: string }) =>
    type === "number" ? "3rem;" : "10rem;"};
  border-radius: 10px;
  border: 1px solid var(--text);
  color: var(--text);
`;

export const CardGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(22rem, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
`;

export const CardInlineFlex = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${({ gap }: { gap?: string }) => gap || "1rem"};
  color: ${(props) => props.color || "var(--text)"};
  margin-bottom: 0.5rem;
`;

export const CardContainer = styled.div`
  background-color: #fff;
  border-radius: 20px;
  padding: 30px;
  min-width: 22rem;
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
  isEdit: boolean;
  toggleEdit?: () => void; // set it to mandatory
}

function CardTitle({ title, isEdit, toggleEdit }: Props) {
  return (
    <StyledDiv>
      {!isEdit ? (
        <>
          <Title>{title}</Title>
          <EditIcon
            sx={{ color: "var(--primary)", cursor: "pointer" }}
            onClick={toggleEdit}
          />
        </>
      ) : (
        <CardInput />
      )}
    </StyledDiv>
  );
}

interface ChildrenProps extends Props {
  children: React.ReactNode;
}

function Card({ title, children, isEdit, toggleEdit }: ChildrenProps) {
  return (
    <CardContainer>
      <CardTitle title={title} isEdit={isEdit} toggleEdit={toggleEdit} />
      {children}
    </CardContainer>
  );
}

export default Card;

const CardActionsButton = styled.button`
  display: flex;
  background-color: white;
  border: 2px solid ${(props) => props.color || "var(--primary)"};
  color: ${(props) => props.color || "var(--primary)"};
  border-radius: 20px;
  justify-content: center;
  align-items: center;
  padding: 2px 15px;
  margin: ${({ margin }: { margin?: string }) => margin || "auto"};
  cursor: pointer;

  &:hover {
    border: 2px solid white;
    color: white;
    background-color: ${(props) => props.color || "var(--primary)"};
  }
`;

export function CardActions({ submit, cancel, deletes }: CardActionsType) {
  return (
    <CardInlineFlex gap="0.5rem">
      <CardActionsButton onClick={submit} color="var(--success)" margin="0px">
        <CheckIcon sx={{ marginRight: "6px;" }} />
        Conferma
      </CardActionsButton>
      <CardActionsButton onClick={cancel} color="var(--text)" margin="0px">
        <ClearIcon />
      </CardActionsButton>
      <CardActionsButton
        onClick={deletes}
        color="var(--danger)"
        margin="0px 0px 0px auto"
      >
        <DeleteForeverIcon />
      </CardActionsButton>
    </CardInlineFlex>
  );
}
