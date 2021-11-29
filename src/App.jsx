import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { GlobalStyles } from "./GlobalStyles.style";

function App() {
  return (
    <>
      <GlobalStyles />
      <Login />
      <Register />
    </>
  );
}

export default App;
