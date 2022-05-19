import QrCodeIcon from "@mui/icons-material/QrCode";
import styled from "styled-components";
import PeopleIcon from "@mui/icons-material/People";
import Modal from "react-modal";
import { TableType } from "../../../utils/types";
import Availability from "../../generic/Card/Availability";
import useToggle from "../../../hooks/useToggle";
import Card from "../../generic/Card/Card";
import { CardInlineFlex } from "../../generic/Card/Card.styles";
import TableForm from "./TableForm";

const AddDate = styled.p`
  color: var(--text);
  margin-top: 1.5rem;
  font-size: 0.9rem;
`;

interface Props {
  table: TableType;
}

function Table({ table }: Props) {
  const [isEdit, toggleIsEdit] = useToggle(false);

  const formattedDate = table.created_at
    ? new Date(table.created_at).toLocaleDateString("it-it", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : null;

  return (
    <>
      <Modal isOpen={isEdit} onRequestClose={() => toggleIsEdit()}>
        <TableForm table={table} close={toggleIsEdit} mode="edit" />
      </Modal>
      <Card title={table.name} isEdit={isEdit} toggleEdit={toggleIsEdit}>
        <Availability
          availability={table.availability}
          type="tables"
          isEdit={false}
        />
        <CardInlineFlex>
          <PeopleIcon /> <p>Posti: {table.seats}</p>
        </CardInlineFlex>
        <CardInlineFlex>
          <QrCodeIcon />
          <p>
            Dispositivo{table.serial ? `: ${table.serial}` : " non associato"}
          </p>
        </CardInlineFlex>
        {formattedDate && <AddDate>Aggiunto il: {formattedDate}</AddDate>}
      </Card>
    </>
  );
}

export default Table;
