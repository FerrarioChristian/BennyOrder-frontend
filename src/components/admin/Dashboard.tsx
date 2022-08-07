import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <Link to="/admin/products">Gestisci Menu</Link>
      <br />
      <Link to="/admin/assign_tables">Gestisci Tavoli</Link>
    </>
  );
}
export default Dashboard;
