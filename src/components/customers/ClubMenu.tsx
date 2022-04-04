import { useEffect, useState } from "react";
import Product, { OrderType, ProductType } from "../shared/Product";
import axiosInstance from "../../utils/axios";

function ClubMenu() {
  const [products, setProducts] = useState<ProductType[]>();
  const [orders, setOrders] = useState<OrderType[]>([]);

  useEffect(() => {
    axiosInstance
      .get("list_products.php", { withCredentials: true })
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const orderProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    axiosInstance.post("new_order.php", { orders }, { withCredentials: true });
  };

  return (
    <>
      <h1>Menu:</h1>
      <button type="button" onClick={orderProduct}>
        Ordina
      </button>
      {products?.map((res) => (
        <Product
          key={res.id}
          id={res.id}
          name={res.name}
          price={res.price}
          description={res.description}
          remaining={res.remaining}
          admin={false}
          setOrders={setOrders}
        />
      ))}
    </>
  );
}
export default ClubMenu;
