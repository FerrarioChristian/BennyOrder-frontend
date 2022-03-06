import { useRef } from "react";
import { DeviceType } from "../../pages/admin_panel/ManageTables";
import axiosInstance from "../../utils/axios";

const Device = ({ seriale, id_tavolo }: DeviceType) => {
  const id_tavoloInputRef = useRef(document.createElement("input"));

  const editDeviceTable = () => {
    axiosInstance.post(
      "associate_table.php",
      {
        seriale,
        id_tavolo: id_tavoloInputRef.current.value,
      },
      { withCredentials: true }
    );
  };

  return (
    <>
      <h1>{seriale}</h1>
      <input type="text" defaultValue={id_tavolo} ref={id_tavoloInputRef} />
      <button onClick={editDeviceTable}>Modifica</button>
    </>
  );
};

export default Device;
