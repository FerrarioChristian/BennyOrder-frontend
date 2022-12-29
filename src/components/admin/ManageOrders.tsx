/* eslint-disable no-restricted-syntax */
import { useListOrders } from "../../utils/apiCalls/orders";
import { OrderType } from "../../utils/types";
import Card from "../generic/Card/Card";
import { CardGridContainer } from "../generic/Card/Card.styles";
import { HeaderLine, Title } from "./AdminLayout/AdminLayout";

interface TablesOrders {
  table_id: number;
  table_name: string;
  orders: OrderType[];
}

function ManageOrders() {
  const { data, isSuccess } = useListOrders();

  function groupOrders(tables: any) {
    const result: any = [];

    // Iterate over the tables
    for (const table of tables) {
      const tableResult: any = {
        table_id: table.table_id,
        table_name: table.table_name,
        orders: [],
      };

      // Iterate over the orders in the table
      for (const order of table.orders) {
        // Check if an order with the same product, notes, and is_completed already exists in the result orders array
        const existingOrder = tableResult.orders.find(
          (o: any) =>
            o.product.id === order.product.id &&
            o.notes === order.notes &&
            o.is_completed === order.is_completed
        );

        // If it exists, increment the entries count
        if (existingOrder) {
          existingOrder.entries += 1;
        } else {
          // If it doesn't exist, add a new order with an entries count of 1
          tableResult.orders.push({ ...order, entries: 1 });
        }
      }

      result.push(tableResult);
    }

    return result;
  }

  if (isSuccess) {
    return (
      <>
        <Title>Gestione Ordini</Title>
        <HeaderLine />
        <CardGridContainer>
          {groupOrders(data?.data).map((tableOrders: TablesOrders) => (
            <Card
              title={`Tavolo ${tableOrders.table_name}`}
              isEdit={false}
              key={tableOrders.table_id}
            >
              {tableOrders.orders.map((order: OrderType) => (
                <div key={order.id}>
                  <p>
                    {order.entries} x {order.product.name}
                  </p>
                  <p>{order.notes}</p>
                </div>
              ))}
            </Card>
          ))}
        </CardGridContainer>
      </>
    );
  }
  return null;
}

export default ManageOrders;
