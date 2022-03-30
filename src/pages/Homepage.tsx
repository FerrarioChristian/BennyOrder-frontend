import { Link } from "react-router-dom";
import useTitle from "../hooks/useTitle";

function Homepage() {
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
    </>
  );
}
export default Homepage;
