import { useEffect, useState } from "react";
import axiosInstance from "../../utils/axios";
import Device from "../../components/device/Device";

export interface DeviceType {
  seriale: string;
  id_tavolo: number;
}

const ManageTables = () => {
  const [devices, setDevices] = useState<DeviceType[]>([]);
  useEffect(() => {
    axiosInstance
      .get(`/list_devices.php`, { withCredentials: true })
      .then((res) => {
        setDevices(res.data);
      });
  }, []);
  return (
    <>
      {devices.map((device) => {
        return (
          <Device
            key={device.seriale}
            seriale={device.seriale}
            id_tavolo={device.id_tavolo}
          />
        );
      })}
    </>
  );
};

export default ManageTables;
