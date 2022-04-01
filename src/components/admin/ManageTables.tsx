import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import Device, { DeviceType } from "./Device";

function ManageTables() {
  const [devices, setDevices] = useState<DeviceType[]>([]);
  useEffect(() => {
    axiosInstance
      .get("/list_devices.php", { withCredentials: true })
      .then((res) => {
        setDevices(res.data);
      });
  }, []);
  return (
    <>
      {devices.map((device) => (
        <Device
          key={device.serial}
          serial={device.serial}
          table_id={device.table_id}
        />
      ))}
    </>
  );
}
export default ManageTables;
