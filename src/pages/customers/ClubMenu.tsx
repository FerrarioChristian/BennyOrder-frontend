import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import axiosInstance from "../../utils/axios";

interface Product {
  id: number;
  name: string;
  price: string;
  description: string;
  remaining: number;
}

interface Order {
  id: number;
  notes: string;
}

const ClubMenu = () => {
  const [products, setProducts] = useState<Product[]>();
  const [orders, setOrders] = useState<Order[]>([]);
  //const { tirt } = useParams();

  useEffect(() => {
    axiosInstance
      .get(`/list_products.php?tirt=48067aaaaaaab`, { withCredentials: true })
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const orderProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    axiosInstance.post("new_order.php", { tirt: "48067aaaaaaab", orders });
  };

  return (
    <>
      <h1>Menu:</h1>
      <button onClick={orderProduct}>Ordina</button>
      {products?.map((res) => {
        return (
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
        );
      })}
    </>
  );
};

export default ClubMenu;
