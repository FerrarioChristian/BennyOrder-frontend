import { useQuery } from "react-query";
import styled from "styled-components";
import Modal from "react-modal";
import useToggle from "../../hooks/useToggle";
import { tablesListApi } from "../../utils/apiCalls/tables";
import { TableType } from "../../utils/types";
import Table from "./Table";
import { CardGridContainer } from "../generic/Card/Card.styles";

// Titolo della pagina
const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--primary);
  cursor: default;
`;

// Linea sotto titolo layout
const HeaderLine = styled.hr`
  border: none;
  height: 2px;
  background-color: var(--primary);
  margin-bottom: 2rem;
`;

const modalCustomStyles = {
  content: {
    maxWidth: "30rem",
    maxHeight: "30rem",
    backgroundColor: "transparent",
    margin: "auto",
    border: "none",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.92)",
  },
};

function ManageTables() {
  const [isOpen, toggleIsOpen] = useToggle();
  const { data } = useQuery("tablesList", tablesListApi);

  return (
    <>
      <Title>Gestione Tavoli</Title>
      <HeaderLine />
      <button type="button" onClick={toggleIsOpen}>
        Nuovo Tavolo
      </button>
      <Modal
        isOpen={isOpen}
        onRequestClose={() => toggleIsOpen()}
        style={modalCustomStyles}
      >
        <Table
          name="Franco"
          seats={2}
          serial=""
          availability={1}
          type="tables"
          isEdit
        />
      </Modal>
      <CardGridContainer>
        {data?.data.map((table: TableType) => (
          <Table
            key={table.id}
            id={table.id}
            serial={table.serial}
            name={table.name}
            availability={table.availability}
            seats={table.seats}
            type="tables"
            created_at={table.created_at}
          />
        ))}
      </CardGridContainer>
    </>
  );
}
export default ManageTables;
