import { useState } from "react";
import Product from "../generic/Product/Product";
import axiosInstance from "../../utils/axios";
import { NewOrderType, ProductType } from "../../utils/types";
import { useListProducts } from "../../utils/apiCalls/products";

function ClubMenu() {
  const [orders, setOrders] = useState<NewOrderType[]>([]);
  const { data } = useListProducts();

  const orderProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    axiosInstance.post("/orders", { orders }, { withCredentials: true });
  };

  return (
    <>
      <h1>Menu:</h1>
      <button type="button" onClick={orderProducts}>
        Ordina
      </button>
      {data?.data.map((product: ProductType) => (
        <Product
          key={product.id}
          product={product}
          admin={false}
          setOrders={setOrders}
        />
      ))}
    </>
  );
}
export default ClubMenu;
