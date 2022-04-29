import { useRef } from "react";
import axiosInstance from "../../utils/axios";

export interface DeviceType {
  serial: string;
  table_name: number;
  id: number;
}

function Device({ id, serial, table_name }: DeviceType) {
  const tableIdInputRef = useRef(document.createElement("input"));

  const editDeviceTable = () => {
    axiosInstance.put(
      `/devices/${id}`,
      {
        serial,
        table_name: tableIdInputRef.current.value,
      },
      { withCredentials: true }
    );
  };

  return (
    <>
      <h1>{serial}</h1>
      <input type="text" defaultValue={table_name} ref={tableIdInputRef} />
      <button type="button" onClick={editDeviceTable}>
        Modifica
      </button>
    </>
  );
}
export default Device;
