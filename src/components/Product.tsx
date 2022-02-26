interface Props {
  nome: string;
  prezzo: string;
  descrizione: string;
  residuo: number;
}

export default function Product({ nome, prezzo, descrizione, residuo }: Props) {
  return (
    <>
      <h3>Nome prodotto: {nome}</h3>
      <p>Prezzo: {prezzo}</p>
      <p>Descrizione {descrizione} </p>
      <p>Residuo {residuo}</p>
    </>
  );
}
