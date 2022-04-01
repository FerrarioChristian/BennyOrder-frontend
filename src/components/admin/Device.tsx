import { useRef } from "react";
import axiosInstance from "../../utils/axios";

export interface DeviceType {
  serial: string;
  table_id: number;
}

function Device({ serial, table_id }: DeviceType) {
  const tableIdInputRef = useRef(document.createElement("input"));

  const editDeviceTable = () => {
    axiosInstance.post(
      "associate_table.php",
      {
        serial,
        table_id: tableIdInputRef.current.value,
      },
      { withCredentials: true }
    );
  };

  return (
    <>
      <h1>{serial}</h1>
      <input
        type="text"
        defaultValue={table_id}
        ref={tableIdInputRef}
      />
      <button type="button" onClick={editDeviceTable}>
        Modifica
      </button>
    </>
  );
}
export default Device;
