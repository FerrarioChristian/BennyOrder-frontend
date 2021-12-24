import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <Link to="/register">Back to register</Link>
    </div>
  );
}
