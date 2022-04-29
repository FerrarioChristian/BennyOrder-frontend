import axiosInstance from "../axios";
import { NewProductType, ProductType } from "../types";

export const productsListApi = () =>
  axiosInstance.get("/products", {
    withCredentials: true,
  });

export const productNewApi = (newProduct: NewProductType) =>
  axiosInstance.post("/products", newProduct, { withCredentials: true });

export const productDeleteApi = (id: number) =>
  axiosInstance.delete(`/products/${id}`, { withCredentials: true });

export const productEditApi = (editedProduct: ProductType) =>
  axiosInstance.put(`/products/${editedProduct.id}`, editedProduct, {
    withCredentials: true,
  });
