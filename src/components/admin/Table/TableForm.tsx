import React, { useRef, useState } from "react";
import PeopleIcon from "@mui/icons-material/People";
import QrCodeIcon from "@mui/icons-material/QrCode";
import {
  useDeleteTable,
  useEditTable,
  useNewTable,
} from "../../../utils/apiCalls/tables";
import { TableType } from "../../../utils/types";
import Availability from "../../generic/Card/Availability";
import Card from "../../generic/Card/Card";
import { CardInlineFlex, CardInput } from "../../generic/Card/Card.styles";
import CardActions from "../../generic/Card/CardActions";

interface Props {
  table: TableType;
  close: () => void;
  mode: "edit" | "new";
}

function TableForm({ table, close, mode }: Props) {
  const newSerial = useRef<HTMLInputElement>(null);
  const newName = useRef<HTMLInputElement>(null);
  const newSeats = useRef<HTMLInputElement>(null);
  const [newAvailability, setNewAvailability] = useState(
    table.availability.toString()
  );

  const { mutate: newTable } = useNewTable();
  const { mutate: editTable } = useEditTable();
  const { mutate: deleteTable } = useDeleteTable();

  const submitDeleteTable = (e: React.SyntheticEvent) => {
    e.preventDefault();
    deleteTable(table.id);
    close();
  };

  const submitEditTable = (e: React.SyntheticEvent) => {
    e.preventDefault();
    editTable({
      id: table.id,
      serial: newSerial.current!.value,
      name: newName.current!.value,
      seats: parseInt(newSeats.current!.value, 10),
      availability: parseInt(newAvailability, 10),
    });
    close();
  };

  const submitNewTable = (e: React.SyntheticEvent) => {
    e.preventDefault();
    newTable({
      serial: newSerial.current!.value,
      name: newName.current!.value,
      seats: parseInt(newSeats.current!.value, 10),
      availability: parseInt(newAvailability, 10),
    });
    close();
  };

  return (
    <Card title={table.name} isEdit nameInputRef={newName}>
      <Availability
        availability={table.availability}
        type="tables"
        isEdit
        setNewAvailability={setNewAvailability}
      />
      <CardInlineFlex>
        <PeopleIcon /> <p>Posti: </p>
        <CardInput type="number" defaultValue={table.seats} ref={newSeats} />
      </CardInlineFlex>
      <CardInlineFlex>
        <QrCodeIcon /> <p>Dispositivo: </p>
        <CardInput defaultValue={table.serial} ref={newSerial} />
      </CardInlineFlex>
      <CardActions
        cancel={close}
        submit={mode === "edit" ? submitEditTable : submitNewTable}
        deletes={mode === "edit" ? submitDeleteTable : undefined}
      />
    </Card>
  );
}

export default TableForm;
