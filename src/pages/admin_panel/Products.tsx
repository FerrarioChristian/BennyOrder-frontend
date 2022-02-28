import React, { useEffect, useRef, useState } from "react";
import Product from "../../components/Product";
import axiosInstance from "../../utils/axios";

interface Props {
  id: number;
  nome: string;
  prezzo: string;
  descrizione: string;
  residuo: number;
}

export default function Products() {
  const [products, setProducts] = useState<Props[]>();

  useEffect(() => {
    axiosInstance
      .get("/list_products.php", { withCredentials: true })
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const name = useRef(document.createElement("input"));
  const price = useRef(document.createElement("input"));
  const desc = useRef(document.createElement("input"));
  const pieces = useRef(document.createElement("input"));

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axiosInstance
      .post(
        "/new_product.php",
        {
          name: name.current.value,
          prezzo: price.current.value,
          description: desc.current.value,
          remaining: pieces.current.value,
        },
        { withCredentials: true }
      )
      .then();
  };

  return (
    <>
      <h1>Prodotti</h1>
      <h2>Aggiungi un nuovo prodotto</h2>
      <form onSubmit={submit}>
        <input type="text" name="name" placeholder="nome" required ref={name} />
        <input
          type="number"
          ref={price}
          name="price"
          placeholder="prezzo"
          step="0.01"
          min="0"
          required
        />
        <input type="text" ref={desc} name="desc" placeholder="descrizione" />
        <input
          type="number"
          ref={pieces}
          name="pieces"
          placeholder="numero pezzi"
        />
        <button> Aggiungi </button>
      </form>
      {products?.map((res) => {
        return (
          <Product
            id={res.id}
            nome={res.nome}
            prezzo={res.prezzo}
            descrizione={res.descrizione}
            residuo={res.residuo}
          />
        );
      })}
    </>
  );
}
