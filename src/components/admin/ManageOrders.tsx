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

  function groupOrdersById(object: any) {
    const groupedTables: any = [];

    object.forEach((table: any) => {
      const groupedOrders: any = {};
      table.orders.forEach((order: any) => {
        if (!groupedOrders[order.id]) {
          groupedOrders[order.id] = {
            entries: 1,
            id: order.id,
            notes: order.notes,
            product: order.product,
            is_completed: order.is_completed,
          };
        } else {
          groupedOrders[order.id].entries += 1;
        }
      });

      groupedTables.push({
        table_id: table.table_id,
        table_name: table.table_name,
        orders: Object.values(groupedOrders),
      });
    });

    return groupedTables;
  }

  if (isSuccess) {
    return (
      <>
        <Title>Gestione Ordini</Title>
        <HeaderLine />
        <CardGridContainer>
          {groupOrdersById(data?.data).map((tableOrders: TablesOrders) => (
            <Card
              title={`Tavolo ${tableOrders.table_name}`}
              isEdit={false}
              key={tableOrders.table_id}
            >
              {tableOrders.orders.map((order: OrderType) => (
                <div key={order.id}>
                  <p>
                    {order.entries} x {order.product}
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
