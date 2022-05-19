import styled from "styled-components";
import Modal from "react-modal";
import useToggle from "../../hooks/useToggle";
import { TableType } from "../../utils/types";
import { CardGridContainer } from "../generic/Card/Card.styles";
import Table from "./Table/Table";
import TableForm from "./Table/TableForm";
import newTableData from "./Table/newTableData";
import { useListTable } from "../../utils/apiCalls/tables";
import { CardActionsButton } from "../generic/Card/CardActions";

const Title = styled.h1`
  font-size: 2rem;
  text-transform: uppercase;
  font-weight: 400;
  color: var(--primary);
  cursor: default;
`;

const HeaderLine = styled.hr`
  border: none;
  height: 2px;
  background-color: var(--primary);
  margin-bottom: 2rem;
`;

function ManageTables() {
  const [isOpen, toggleIsOpen] = useToggle();
  const { data } = useListTable();

  return (
    <>
      <Title>Gestione Tavoli</Title>
      <HeaderLine />
      <CardActionsButton color="var(--primary)" onClick={toggleIsOpen}>
        Nuovo Tavolo
      </CardActionsButton>
      <Modal isOpen={isOpen} onRequestClose={() => toggleIsOpen()}>
        <TableForm table={newTableData} close={toggleIsOpen} mode="new" />
      </Modal>
      <CardGridContainer>
        {data?.data.map((table: TableType) => (
          <Table key={table.id} table={table} />
        ))}
      </CardGridContainer>
    </>
  );
}
export default ManageTables;
