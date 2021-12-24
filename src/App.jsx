import Login from "pages/Login";
import Register from "pages/Register";
import React, { useEffect, useState } from "react";
import { GlobalStyles } from "./GlobalStyles.style";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import ValidateAccount from "pages/ValidateAccount";
import NotFound from "pages/NotFound";
import Dashboard from "pages/Dashboard";

function App() {
  const [authState, setAuthState] = useState(null);

  useEffect(() => {
    let user = localStorage.getItem("user");
    user && JSON.parse(user) ? setAuthState(true) : setAuthState(false);
  }, []);

  useEffect(() => {
    localStorage.setItem("user", authState);
  }, [authState]);

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/register" element={<Register />} />

        <Route
          path="/login"
          element={<Login authenticate={() => setAuthState(true)} />}
        />

        <Route
          path="/validateaccount/:confirm_code"
          element={<ValidateAccount />}
        />

        {authState && <Route path="/dashboard" element={<Dashboard />} />}

        <Route path="/notfound" element={<NotFound />} />

        <Route
          path="*"
          element={<Navigate to={authState ? "/notfound" : "/login"} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
