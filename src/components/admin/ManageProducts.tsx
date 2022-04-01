import React, { useEffect, useRef, useState } from "react";
import Product, { ProductType } from "../shared/Product";

import axiosInstance from "../../utils/axios";

function ManageProducts() {
  const [products, setProducts] = useState<ProductType[]>();

  useEffect(() => {
    axiosInstance
      .get("/list_products.php", { withCredentials: true })
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  const nameInputRef = useRef(document.createElement("input"));
  const priceInputRef = useRef(document.createElement("input"));
  const descInputRef = useRef(document.createElement("input"));
  const piecesInputRef = useRef(document.createElement("input"));

  const submit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    axiosInstance
      .post(
        "/new_product.php",
        {
          name: nameInputRef.current.value,
          price: priceInputRef.current.value,
          description: descInputRef.current.value,
          remaining: piecesInputRef.current.value,
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
        <input
          type="text"
          name="name"
          placeholder="nome"
          required
          ref={nameInputRef}
        />
        <input
          type="number"
          ref={priceInputRef}
          name="price"
          placeholder="prezzo"
          step="0.01"
          min="0"
          required
        />
        <input
          type="text"
          ref={descInputRef}
          name="desc"
          placeholder="descrizione"
        />
        <input
          type="number"
          ref={piecesInputRef}
          name="pieces"
          placeholder="numero pezzi"
        />
        <button type="submit"> Aggiungi </button>
      </form>
      {products?.map((res) => (
        <Product
          key={res.id}
          id={res.id}
          name={res.name}
          price={res.price}
          description={res.description}
          remaining={res.remaining}
          admin
        />
      ))}
    </>
  );
}
export default ManageProducts;
