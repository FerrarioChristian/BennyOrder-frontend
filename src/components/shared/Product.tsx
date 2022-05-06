import { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import EuroIcon from "@mui/icons-material/Euro";
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import {
  productDeleteApi,
  productEditApi,
} from "../../utils/apiCalls/products";
import { OrderType, ProductType } from "../../utils/types";
import Availability from "../generic/Availability";
import Card, { CardInlineFlex } from "../generic/Card";

interface Props extends ProductType {
  admin: boolean;
  setOrders?: React.Dispatch<React.SetStateAction<OrderType[]>>;
}

export default function Product({
  id,
  name,
  price,
  description,
  available,
  admin,
  setOrders,
}: Props) {
  const newName = useRef<HTMLInputElement>(null);
  const newDescription = useRef<HTMLInputElement>(null);
  const newPrice = useRef<HTMLInputElement>(null);
  const notes = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();

  const { mutate: productEditMutate } = useMutation(productEditApi, {
    onSuccess: () => queryClient.invalidateQueries("productList"),
  });

  const { mutate: productDeleteMutate } = useMutation(productDeleteApi, {
    onSuccess: () => queryClient.invalidateQueries("productList"),
  });

  const editProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    productEditMutate({
      id,
      name: newName.current!.value,
      price: newPrice.current!.value,
      description: newDescription.current!.value,
      available: true,
    });
  };

  const deleteProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    productDeleteMutate(id);
  };

  const addToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    setOrders?.((currOrder) => [
      ...currOrder,
      { id, notes: notes.current!.value },
    ]);
  };

  const removeFromOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    setOrders?.((currOrder) => {
      const index = currOrder.findIndex((prod) => prod.id === id);
      currOrder.splice(index, 1);
      return currOrder;
    });
  };

  return (
    <>
      <Card title={name} isEdit>
        <CardInlineFlex>
          <FormatAlignLeftIcon />
          <p>{description}</p>
        </CardInlineFlex>
        <CardInlineFlex>
          <EuroIcon />
          <p>Prezzo: {price}</p>
        </CardInlineFlex>
        <Availability
          availability={available}
          hidden={!admin}
          type="products"
        />
      </Card>

      <input
        type="text"
        placeholder="Nome prodotto"
        ref={newName}
        hidden={!admin}
      />

      <input type="text" placeholder="Prezzo" ref={newPrice} hidden={!admin} />

      <input
        type="text"
        placeholder="Descrizione"
        ref={newDescription}
        hidden={!admin}
      />
      <button type="button" onClick={editProduct} hidden={!admin}>
        Modifica
      </button>
      <button type="button" onClick={deleteProduct} hidden={!admin}>
        Elimina
      </button>
      <input placeholder="Note:" hidden={admin} ref={notes} />
      <button type="button" onClick={addToOrder} hidden={admin}>
        Aggiungi
      </button>
      <button type="button" onClick={removeFromOrder} hidden={admin}>
        Rimuovi
      </button>
    </>
  );
}
