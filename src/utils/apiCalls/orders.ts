import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "../axios";
import { NewOrderType, OrderType } from "../types";

export const listOrders = () =>
  axiosInstance.get("/orders", { withCredentials: true });

export const newOrder = (order: NewOrderType) =>
  axiosInstance.post("/orders", order, { withCredentials: true });

export const editOrder = (order: OrderType) =>
  axiosInstance.patch(`/orders/${order.id}`, order, {
    withCredentials: true,
  });

export const deleteOrder = (id: number) =>
  axiosInstance.delete(`/orders/${id}`, { withCredentials: true });

export const useListOrders = (onSuccess?: any, onError?: any) =>
  useQuery("listOrders", listOrders, {
    onSuccess,
    onError,
  });

export const useEditOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(editOrder, {
    onSuccess: () => queryClient.invalidateQueries("listOrders"),
  });
};

export const useNewOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(newOrder, {
    onSuccess: () => queryClient.invalidateQueries("listOrders"),
  });
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteOrder, {
    onSuccess: () => queryClient.invalidateQueries("listOrders"),
  });
};
