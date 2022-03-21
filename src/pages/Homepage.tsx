import { Link } from "react-router-dom";
import Logout from "../components/auth/Logout";
import { useTitle } from "../hooks/useTitle";

const Homepage = () => {
  useTitle("Homepage - BennyOrder");

  return (
    <>
      <h1>Homepage</h1>
      <Link to="/admin/dashboard">Dashboard</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <Link to="/club/menu">ClubMenu</Link>
      {/* Cambiare il nome con l'id */}
      <br />
      <Logout />
    </>
  );
};
export default Homepage;
