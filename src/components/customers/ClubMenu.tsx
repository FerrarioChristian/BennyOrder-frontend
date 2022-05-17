import { useState } from "react";
import { useQuery } from "react-query";
import Product from "../shared/Product";
import axiosInstance from "../../utils/axios";
import { OrderType, ProductType } from "../../utils/types";
import { productsListApi } from "../../utils/apiCalls/products";

function ClubMenu() {
  const [orders, setOrders] = useState<OrderType[]>([]);

  const { data, status } = useQuery("productList", productsListApi);

  const orderProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    axiosInstance.post("/orders", { orders }, { withCredentials: true });
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error!</div>;
  }

  return (
    <>
      <h1>Menu:</h1>
      <button type="button" onClick={orderProducts}>
        Ordina
      </button>
      {data?.data.map((res: ProductType) => (
        <Product
          key={res.id}
          id={res.id}
          name={res.name}
          price={res.price}
          description={res.description}
          available={res.available}
          admin={false}
          setOrders={setOrders}
        />
      ))}
    </>
  );
}
export default ClubMenu;
