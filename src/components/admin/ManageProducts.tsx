import React, { useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "react-query";
import Product from "../shared/Product";
import { productsListApi, productNewApi } from "../../utils/apiCalls/products";
import { ProductType } from "../../utils/types";

function ManageProducts() {
  const name = useRef<HTMLInputElement>(null);
  const price = useRef<HTMLInputElement>(null);
  const description = useRef<HTMLInputElement>(null);
  const remaining = useRef<HTMLInputElement>(null);

  const queryClient = useQueryClient();
  const { data, status } = useQuery("productList", productsListApi);
  const { mutate: productNewMutate } = useMutation(productNewApi, {
    onSuccess: () => queryClient.invalidateQueries("productList"),
  });

  const submitNewProduct = (e: React.SyntheticEvent) => {
    e.preventDefault();
    productNewMutate({
      name: name.current!.value,
      price: price.current!.value,
      description: description.current!.value,
      remaining: parseInt(remaining.current!.value, 10),
    });
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error!</div>;
  }

  return (
    <>
      <h1>Prodotti</h1>
      <h2>Aggiungi un nuovo prodotto</h2>
      <form onSubmit={submitNewProduct}>
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
        <input
          type="text"
          ref={description}
          name="desc"
          placeholder="descrizione"
        />
        <input
          type="number"
          ref={remaining}
          name="remaining"
          placeholder="numero pezzi"
        />
        <button type="submit"> Aggiungi </button>
      </form>
      {data?.data.map((res: ProductType) => (
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
