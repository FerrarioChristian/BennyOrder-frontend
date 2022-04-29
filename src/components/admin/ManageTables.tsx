import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import Device, { DeviceType } from "./Device";

function ManageTables() {
  const [devices, setDevices] = useState<DeviceType[]>([]);
  useEffect(() => {
    axiosInstance.get("/devices", { withCredentials: true }).then((res) => {
      setDevices(res.data);
    });
  }, []);
  return (
    <>
      {devices.map((device) => (
        <Device
          key={device.id}
          id={device.id}
          serial={device.serial}
          table_name={device.table_name}
        />
      ))}
    </>
  );
}
export default ManageTables;
