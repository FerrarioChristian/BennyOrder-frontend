import { useState } from "react";
import Product from "../generic/Product/Product";
import axiosInstance from "../../utils/axios";
import { OrderType, ProductType } from "../../utils/types";
import { useListTables } from "../../utils/apiCalls/tables";

function ClubMenu() {
  const [orders, setOrders] = useState<OrderType[]>([]);
  const { data } = useListTables();

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
