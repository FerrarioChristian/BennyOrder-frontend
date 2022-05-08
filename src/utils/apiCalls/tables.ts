import axiosInstance from "../axios";
import { NewTableType } from "../types";

export const tablesListApi = () =>
  axiosInstance.get("/tables", { withCredentials: true });

export const tableEditApi = (editedTable: NewTableType) =>
  axiosInstance.put(`/tables/${editedTable.id}`, editedTable, {
    withCredentials: true,
  });

export const tableDeleteApi = (id: number) =>
  axiosInstance.delete(`/tables/${id}`, { withCredentials: true });
