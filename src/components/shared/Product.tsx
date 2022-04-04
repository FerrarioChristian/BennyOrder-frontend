import { useRef } from "react";
import axiosInstance from "../../utils/axios";

export interface OrderType {
  id: number;
  notes: string;
}

export interface ProductType {
  id: number;
  name: string;
  price: string;
  description: string;
  remaining: number;
}

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

  const deleteProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    axiosInstance
      .post("/delete_product.php", { id }, { withCredentials: true })
      .then();
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

  const editProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    axiosInstance
      .post(
        "/edit_product.php",
        {
          id,
          new_name: newName.current!.value,
          new_price: newPrice.current!.value,
          new_description: newDescription.current!.value,
          new_remaining: newRemaining.current!.value,
        },
        { withCredentials: true }
      )
      .then();
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
