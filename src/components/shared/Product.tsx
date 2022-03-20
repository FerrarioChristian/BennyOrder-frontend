import { useRef } from "react";
import axiosInstance from "../../utils/axios";

interface Props {
  id: number;
  name: string;
  price: string;
  description: string;
  remaining: number;
  admin: boolean;
  setOrders?: React.Dispatch<React.SetStateAction<Order[]>>;
}

interface Order {
  id: number;
  notes: string;
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
  const newNameInputRef = useRef(document.createElement("input"));
  const newDescriptionInputRef = useRef(document.createElement("input"));
  const newPriceInputRef = useRef(document.createElement("input"));
  const newRemainingInputRef = useRef(document.createElement("input"));
  const notesInputRef = useRef(document.createElement("input"));

  const deleteProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    axiosInstance
      .post("/delete_product.php", { id }, { withCredentials: true })
      .then();
  };

  const addToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    setOrders?.((currOrder) => {
      return [...currOrder, { id, notes: notesInputRef.current.value }];
    });
  };

  const removeFromOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    setOrders?.((currOrder) => {
      let index = currOrder.findIndex((prod) => (prod.id = id));
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
          new_name: newNameInputRef.current.value,
          new_price: newPriceInputRef.current.value,
          new_description: newDescriptionInputRef.current.value,
          new_remaining: newRemainingInputRef.current.value,
        },
        { withCredentials: true }
      )
      .then();
  };

  return (
    <>
      <h3>Nome prodotto: {name}</h3>
      <input
        type="text"
        placeholder="Nome prodotto"
        ref={newNameInputRef}
        hidden={!admin}
      />
      <p>Prezzo: {price}</p>
      <input
        type="text"
        placeholder="Prezzo"
        ref={newPriceInputRef}
        hidden={!admin}
      />
      <p>Descrizione {description} </p>
      <input
        type="text"
        placeholder="Descrizione"
        ref={newDescriptionInputRef}
        hidden={!admin}
      />
      <p>Residuo {remaining}</p>
      <input
        type="text"
        placeholder="Pezzi"
        ref={newRemainingInputRef}
        hidden={!admin}
      />
      <button onClick={editProduct} hidden={!admin}>
        Modifica
      </button>
      <button onClick={deleteProduct} hidden={!admin}>
        Elimina
      </button>
      <input placeholder="Note:" hidden={admin} ref={notesInputRef} />
      <button onClick={addToOrder} hidden={admin}>
        Aggiungi
      </button>
      <button onClick={removeFromOrder} hidden={admin}>
        Rimuovi
      </button>
    </>
  );
}
