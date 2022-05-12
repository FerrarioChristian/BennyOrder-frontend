import axiosInstance from "../axios";
import { TableType } from "../types";

export const tablesListApi = () =>
  axiosInstance.get("/tables", { withCredentials: true });

export const tableEditApi = (editedTable: TableType) =>
  axiosInstance.patch(`/tables/${editedTable.id}`, editedTable, {
    withCredentials: true,
  });

export const tableDeleteApi = (id: number) =>
  axiosInstance.delete(`/tables/${id}`, { withCredentials: true });

export const tableNewApi = (newTable: TableType) =>
  axiosInstance.post("/tables", newTable, { withCredentials: true });
