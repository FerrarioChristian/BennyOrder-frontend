import { useRef } from "react";
import { useMutation, useQueryClient } from "react-query";
import {
  productDeleteApi,
  productEditApi,
} from "../../utils/apiCalls/products";
import { OrderType, ProductType } from "../../utils/types";

interface Props extends ProductType {
  admin: boolean;
  setOrders?: React.Dispatch<React.SetStateAction<OrderType[]>>;
}

export default function Product({
  id,
  name,
  price,
  description,
  remaining,
  admin,
  setOrders,
}: Props) {
  const newName = useRef<HTMLInputElement>(null);
  const newDescription = useRef<HTMLInputElement>(null);
  const newPrice = useRef<HTMLInputElement>(null);
  const newRemaining = useRef<HTMLInputElement>(null);
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
      remaining: parseInt(newRemaining.current!.value, 10),
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
      <h3>
        Nome prodotto:
        {name}
      </h3>
      <input
        type="text"
        placeholder="Nome prodotto"
        ref={newName}
        hidden={!admin}
      />
      <p>
        Prezzo:
        {price}
      </p>
      <input type="text" placeholder="Prezzo" ref={newPrice} hidden={!admin} />
      <p>
        Descrizione
        {description}
      </p>
      <input
        type="text"
        placeholder="Descrizione"
        ref={newDescription}
        hidden={!admin}
      />
      <p>
        Residuo
        {remaining}
      </p>
      <input
        type="text"
        placeholder="Pezzi"
        ref={newRemaining}
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
