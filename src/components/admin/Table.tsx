/* import { useRef } from "react";
import axiosInstance from "../../utils/axios"; */

import QrCodeIcon from "@mui/icons-material/QrCode";
import styled from "styled-components";
import PeopleIcon from "@mui/icons-material/People";
import Card, { CardInlineFlex } from "../generic/Card";
import { TableType } from "../../utils/types";
import Availability from "../generic/Availability";

const AddDate = styled.p`
  color: var(--text);
  margin-top: 1.5rem;
  font-size: 0.9rem;
`;
function Table({
  /* id , */ serial,
  name,
  availability,
  seats,
  created_at,
  type,
}: TableType) {
  // const tableIdInputRef = useRef(document.createElement("input"));

  /* const editDeviceTable = () => {
    axiosInstance.put(
      `/devices/${id}`,
      {
        serial,
        table_name: tableIdInputRef.current.value,
      },
      { withCredentials: true }
    );
  }; */

  const date = new Date(created_at);
  const formattedDate =
    created_at === null
      ? null
      : date.toLocaleDateString("it-it", {
          year: "numeric",
          month: "2-digit",
          day: "2-digit",
        });

  return (
    <Card title={name} isEdit>
      <Availability availability={availability} type={type} />
      <CardInlineFlex>
        <PeopleIcon /> <p>Posti: {seats}</p>
      </CardInlineFlex>
      <CardInlineFlex>
        <QrCodeIcon />
        <p>Dispositivo{serial ? `: ${serial}` : " non associato"}</p>
      </CardInlineFlex>
      {formattedDate && <AddDate>Aggiunto il: {formattedDate}</AddDate>}
    </Card>
  );
}
export default Table;
