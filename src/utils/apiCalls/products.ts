import { useMutation, useQuery, useQueryClient } from "react-query";
import axiosInstance from "../axios";
import { NewProductType, ProductType } from "../types";

export const listProducts = () =>
  axiosInstance.get("/products", {
    withCredentials: true,
  });

export const newProduct = (product: NewProductType) =>
  axiosInstance.post("/products", product, { withCredentials: true });

export const editProduct = (product: ProductType) =>
  axiosInstance.put(`/products/${product.id}`, product, {
    withCredentials: true,
  });

export const deleteProduct = (id: number) =>
  axiosInstance.delete(`/products/${id}`, { withCredentials: true });

export const useListProducts = (onSuccess?: any, onError?: any) =>
  useQuery("listProducts", listProducts, {
    onSuccess,
    onError,
  });

export const useEditProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(editProduct, {
    onSuccess: () => queryClient.invalidateQueries("listProducts"),
  });
};

export const useNewProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(newProduct, {
    onSuccess: () => queryClient.invalidateQueries("listProducts"),
  });
};

export const useDeleteProduct = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteProduct, {
    onSuccess: () => queryClient.invalidateQueries("listProducts"),
  });
};
