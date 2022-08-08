import { useListOrders } from "../../utils/apiCalls/orders";
import { OrderType } from "../../utils/types";
import { HeaderLine, Title } from "./AdminLayout/AdminLayout";

function ManageOrders() {
  const { data, isSuccess } = useListOrders();

  const groupOrders = (orders: OrderType[]) => {
    const temp = orders.reduce((prev, curr) => {
      const p: any = prev;
      const { name } = curr.product;
      if (!Object.prototype.hasOwnProperty.call(prev, name)) {
        p[name] = 0;
      }
      p[name] += 1;

      return p;
    }, {});

    return temp;
  };

  if (isSuccess) {
    data?.data.orders.map((order: OrderType[]) => groupOrders(order));
  }

  return (
    <>
      <Title>Gestione Ordini</Title>
      <HeaderLine />
    </>
  );
}

export default ManageOrders;
