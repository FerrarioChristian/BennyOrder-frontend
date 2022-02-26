import { Link } from "react-router-dom";
import { useTitle } from "../../hooks/useTitle";

export default function Dashboard() {
  useTitle("***NOME_BAR*** - BennyOrder");

  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/products">Prodotti</Link>
    </>
  );
}
