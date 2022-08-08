import Modal from "react-modal";
import AddIcon from "@mui/icons-material/Add";
import useToggle from "../../hooks/useToggle";
import { TableType } from "../../utils/types";
import { CardGridContainer } from "../generic/Card/Card.styles";
import Table from "./Table/Table";
import TableForm from "./Table/TableForm";
import newTableData from "./Table/newTableData";
import { useListTables } from "../../utils/apiCalls/tables";
import { HeaderLine, Title } from "./AdminLayout/AdminLayout";
import Button from "../generic/Button/Button";

function ManageTables() {
  const [isOpen, toggleIsOpen] = useToggle();
  const { data } = useListTables();

  return (
    <>
      <Title>Gestione Tavoli</Title>
      <HeaderLine />
      <Button color="var(--primary)" onClick={toggleIsOpen}>
        <AddIcon />
        Nuovo
      </Button>
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
