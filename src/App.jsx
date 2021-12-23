import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { GlobalStyles } from "./GlobalStyles.style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ValidateAccount from "pages/ValidateAccount";
import NotFound from "pages/NotFound";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/validateaccount/:confirm_code"
          element={<ValidateAccount />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
