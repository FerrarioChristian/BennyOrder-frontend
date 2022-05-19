import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "../axios";
import { NewTableType, TableType } from "../types";

export const listTables = () =>
  axiosInstance.get("/tables", { withCredentials: true });

export const editTable = (table: TableType) =>
  axiosInstance.patch(`/tables/${table.id}`, table, {
    withCredentials: true,
  });

export const deleteTable = (id: number) =>
  axiosInstance.delete(`/tables/${id}`, { withCredentials: true });

export const newTable = (table: NewTableType) =>
  axiosInstance.post("/tables", table, { withCredentials: true });

export const useListTable = (onSuccess?: any, onError?: any) =>
  useQuery("listTable", listTables, {
    onSuccess,
    onError,
  });

export const useEditTable = () => {
  const queryClient = useQueryClient();
  return useMutation(editTable, {
    onSuccess: () => queryClient.invalidateQueries("listTable"),
  });
};

export const useNewTable = () => {
  const queryClient = useQueryClient();
  return useMutation(newTable, {
    onSuccess: () => queryClient.invalidateQueries("listTable"),
  });
};

export const useDeleteTable = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteTable, {
    onSuccess: () => queryClient.invalidateQueries("listTable"),
  });
};
