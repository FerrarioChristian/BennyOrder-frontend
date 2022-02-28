import { useRef, useState } from "react";
import axiosInstance from "../utils/axios";

interface Props {
  id: number;
  nome: string;
  prezzo: string;
  descrizione: string;
  residuo: number;
}

export default function Product({
  id,
  nome,
  prezzo,
  descrizione,
  residuo,
}: Props) {
  const nomeInputRef = useRef(document.createElement("input"));
  const descrizioneInputRef = useRef(document.createElement("input"));
  const prezzoInputRef = useRef(document.createElement("input"));
  const residuoInputRef = useRef(document.createElement("input"));

  const deleteProduct = (e: React.MouseEvent) => {
    e.preventDefault();
    axiosInstance
      .post("/delete_product.php", { id }, { withCredentials: true })
      .then();
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
      <input type="text" placeholder="Nome prodotto" ref={nomeInputRef} />
      <p>Prezzo: {prezzo}</p>
      <input type="text" placeholder="Prezzo" ref={prezzoInputRef} />
      <p>Descrizione {descrizione} </p>
      <input type="text" placeholder="Descrizione" ref={descrizioneInputRef} />
      <p>Residuo {residuo}</p>
      <input type="text" placeholder="Pezzi" ref={residuoInputRef} />
      <button onClick={editProduct}>Modifica</button>
      <button onClick={deleteProduct}>Elimina</button>
    </>
  );
}
