import { Link } from "react-router-dom";
import Logout from "../components/auth/Logout";
import { useTitle } from "../hooks/useTitle";

export default function Homepage() {
  useTitle("Homepage - BennyOrder");

  return (
    <>
      <h1>Homepage</h1>
      <Link to="/dashboard">Dashboard</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/register">Register</Link>
      <br />
      <Logout />
    </>
  );
}
