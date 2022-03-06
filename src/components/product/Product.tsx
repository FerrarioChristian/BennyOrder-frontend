import { useRef } from "react";
import axiosInstance from "../../utils/axios";

interface Props {
  id: number;
  nome: string;
  prezzo: string;
  descrizione: string;
  residuo: number;
  admin: boolean;
  setOrders?: React.Dispatch<React.SetStateAction<Order[]>>;
}

interface Order {
  id: number;
  note: string;
}

export default function Product({
  id,
  nome,
  prezzo,
  descrizione,
  residuo,
  admin,
  setOrders,
}: Props) {
  const nomeInputRef = useRef(document.createElement("input"));
  const descrizioneInputRef = useRef(document.createElement("input"));
  const prezzoInputRef = useRef(document.createElement("input"));
  const residuoInputRef = useRef(document.createElement("input"));
  const notesRef = useRef(document.createElement("input"));

  const deleteProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    axiosInstance
      .post("/delete_product.php", { id }, { withCredentials: true })
      .then();
  };

  const addToOrder = (e: React.MouseEvent) => {
    e.preventDefault();
    setOrders?.((currOrder) => {
      return [...currOrder, { id, note: notesRef.current.value }];
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
          nuovo_nome: nomeInputRef.current.value,
          nuova_descrizione: descrizioneInputRef.current.value,
          nuovo_prezzo: prezzoInputRef.current.value,
          nuovo_residuo: residuoInputRef.current.value,
        },
        { withCredentials: true }
      )
      .then();
  };

  return (
    <>
      <h3>Nome prodotto: {nome}</h3>
      <input
        type="text"
        placeholder="Nome prodotto"
        ref={nomeInputRef}
        hidden={!admin}
      />
      <p>Prezzo: {prezzo}</p>
      <input
        type="text"
        placeholder="Prezzo"
        ref={prezzoInputRef}
        hidden={!admin}
      />
      <p>Descrizione {descrizione} </p>
      <input
        type="text"
        placeholder="Descrizione"
        ref={descrizioneInputRef}
        hidden={!admin}
      />
      <p>Residuo {residuo}</p>
      <input
        type="text"
        placeholder="Pezzi"
        ref={residuoInputRef}
        hidden={!admin}
      />
      <button onClick={editProduct} hidden={!admin}>
        Modifica
      </button>
      <button onClick={deleteProduct} hidden={!admin}>
        Elimina
      </button>
      <input placeholder="Note:" hidden={admin} ref={notesRef} />
      <button onClick={addToOrder} hidden={admin}>
        Aggiungi
      </button>
      <button onClick={removeFromOrder} hidden={admin}>
        Rimuovi
      </button>
    </>
  );
}
