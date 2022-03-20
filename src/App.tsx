import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/auth/RequireAuth";
import ManageTables from "./components/admin/ManageTables";
import Dashboard from "./components/admin/Dashboard";
import ManageProducts from "./components/admin/ManageProducts";
import EmailSent from "./components/auth/EmailSent";
import ForgotPassword from "./components/auth/ForgotPassword";
import ForgotPasswordEmail from "./components/auth/ForgotPasswordEmail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ValidateAccount from "./components/auth/ValidateAccount";
import ClubMenu from "./components/customers/ClubMenu";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/admin/AdminLayout/AdminLayout";

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
        <Route path="/club">
          <Route path=":tirt" element={<ClubMenu />}></Route>
        </Route>

        <Route element={<RequireAuth redirectTo="/login" />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ManageProducts />} />
            <Route path="assign_tables" element={<ManageTables />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
