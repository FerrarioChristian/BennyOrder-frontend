import QrCodeIcon from "@mui/icons-material/QrCode";
import styled from "styled-components";
import PeopleIcon from "@mui/icons-material/People";
import { useMutation, useQueryClient } from "react-query";
import React, { useRef } from "react";

import { TableType } from "../../utils/types";
import Availability from "../generic/Card/Availability";
import useToggle from "../../hooks/useToggle";
import { tableDeleteApi, tableEditApi } from "../../utils/apiCalls/tables";
import Card from "../generic/Card/Card";
import CardActions from "../generic/Card/CardActions";
import { CardInlineFlex, CardInput } from "../generic/Card/Card.styles";

const AddDate = styled.p`
  color: var(--text);
  margin-top: 1.5rem;
  font-size: 0.9rem;
`;

function Table({
  id,
  serial,
  name,
  availability,
  seats,
  created_at,
  type,
  isEdit: isEditTmp,
}: TableType) {
  const [isEdit, toggleEdit] = useToggle(isEditTmp || false);

  // const newTableName = useRef<HTMLInputElement>(null);
  const newSeats = useRef<HTMLInputElement>(null);
  // const newAvailability = useRef<HTMLInputElement>(null);
  const newSerial = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const { mutate: tableEditMutate } = useMutation(tableEditApi, {
    onSuccess: () => queryClient.invalidateQueries("tablesList"),
  });

  const submitEditTable = (e: React.SyntheticEvent) => {
    e.preventDefault();
    tableEditMutate({
      id,
      serial: newSerial.current!.value,
      name: "Crack Carlo",
      seats: parseInt(newSeats.current!.value, 10),
      availability: 1,
    });
    toggleEdit();
  };

  const { mutate: tableDeleteMutate } = useMutation(tableDeleteApi, {
    onSuccess: () => queryClient.invalidateQueries("tablesList"),
  });

  const submitDeleteTable = (e: React.SyntheticEvent) => {
    e.preventDefault();
    tableDeleteMutate(id!); // FIXME togliere il !
    toggleEdit();
  };

  const formattedDate = created_at
    ? new Date(created_at).toLocaleDateString("it-it", {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
      })
    : null;

  return (
    <Card title={name} isEdit={isEdit} toggleEdit={toggleEdit}>
      <Availability availability={availability} type={type} isEdit={isEdit} />
      <CardInlineFlex>
        <PeopleIcon /> <p>Posti: </p>
        {!isEdit ? (
          <p>{seats}</p>
        ) : (
          <CardInput type="number" defaultValue={seats} ref={newSeats} />
        )}
      </CardInlineFlex>
      <CardInlineFlex>
        <QrCodeIcon />
        {!isEdit ? (
          <p>Dispositivo{serial ? `: ${serial}` : " non associato"}</p>
        ) : (
          <>
            <p>Dispositivo:</p>
            <CardInput type="text" defaultValue={serial} ref={newSerial} />
          </>
        )}
      </CardInlineFlex>
      {!isEdit ? (
        formattedDate && <AddDate>Aggiunto il: {formattedDate}</AddDate>
      ) : (
        <CardActions
          cancel={toggleEdit}
          submit={submitEditTable}
          deletes={submitDeleteTable}
        />
      )}
    </Card>
  );
}

export default Table;
