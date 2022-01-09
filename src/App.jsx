import Login from "pages/Login";
import Register from "pages/Register";
import React from "react";
import { GlobalStyles } from "./GlobalStyles.style";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ValidateAccount from "pages/ValidateAccount";
import NotFound from "pages/NotFound";
import Homepage from "pages/Homepage";
import RequireAuth from "components/auth/RequireAuth";
import Dashboard from "pages/Dashboard";
import ForgotPassword from "pages/ForgotPassword";
import ForgotPasswordEmail from "pages/ForgotPasswordEmail";

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/validateaccount/:confirm_code"
          element={<ValidateAccount />}
        />
        <Route path="/forgotpassword">
          <Route path="email" element={<ForgotPasswordEmail />} />
          <Route path=":confirm_code" element={<ForgotPassword />} />
        </Route>

        <Route
          path="/dashboard"
          element={
            <RequireAuth redirectTo="/login">
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
