import { useListOrders } from "../../utils/apiCalls/orders";
import { OrderType } from "../../utils/types";
/* import Card from "../generic/Card/Card"; */
import { CardGridContainer } from "../generic/Card/Card.styles";
import { HeaderLine, Title } from "./AdminLayout/AdminLayout";

/* interface TablesOrders {
  table_id: number;
  table_name: string;
  orders: OrderType[];
} */

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

    /* const groupedOrders = (k) => {
      return { name: k, count: temp[k] };
    };
    console.log(temp); */
    return temp;
  };

  if (isSuccess) {
    data?.data.orders.map((order: OrderType[]) => groupOrders(order));
  }

  return (
    <>
      <Title>Gestione Ordini</Title>
      <HeaderLine />
      <CardGridContainer>
        {/* {data?.data.map(
          (tableOrders: TablesOrders) =>
            tableOrders.orders && (
              <Card
                title={tableOrders.table_name}
                isEdit={false}
                key={tableOrders.table_id}
              >
                {groupOrders(tableOrders.orders)}
              </Card>
            )
        )} */}
        Work in Progress
      </CardGridContainer>
    </>
  );
}

export default ManageOrders;

/* tableOrders.orders.map((order: OrderType) => (
                  <p key={order.id}>{order.product.name}</p>
                )) */
