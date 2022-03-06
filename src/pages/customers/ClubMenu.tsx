import { useEffect, useState } from "react";
//import { useParams } from "react-router-dom";
import Product from "../../components/product/Product";
import axiosInstance from "../../utils/axios";

interface Product {
  id: number;
  nome: string;
  prezzo: string;
  descrizione: string;
  residuo: number;
}

interface Order {
  id: number;
  note: string;
}

const ClubMenu = () => {
  const [products, setProducts] = useState<Product[]>();
  const [orders, setOrders] = useState<Order[]>([]);
  //const { tirt } = useParams();

  useEffect(() => {
    axiosInstance.get(`/list_products.php?tirt=93561aaaaaaab`).then((res) => {
      setProducts(res.data);
    });
  }, []);

  const orderProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    axiosInstance.post("new_order.php", { tirt: "1234567890123", orders });
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
            nome={res.nome}
            prezzo={res.prezzo}
            descrizione={res.descrizione}
            residuo={res.residuo}
            admin={false}
            setOrders={setOrders}
          />
        );
      })}
    </>
  );
};

export default ClubMenu;
