import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/auth/RequireAuth";
import Dashboard from "./pages/admin_panel/Dashboard";
import Products from "./pages/admin_panel/Products";
import EmailSent from "./pages/auth/EmailSent";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ForgotPasswordEmail from "./pages/auth/ForgotPasswordEmail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ValidateAccount from "./pages/auth/ValidateAccount";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/emailsent" element={<EmailSent />} />
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
        <Route
          path="/products"
          element={
            <RequireAuth redirectTo="/login">
              <Products />
            </RequireAuth>
          }
        ></Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
