import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/auth/RequireAuth";
import ManageTables from "./pages/admin_panel/ManageTables";
import Dashboard from "./pages/admin_panel/Dashboard";
import ManageProducts from "./pages/admin_panel/ManageProducts";
import EmailSent from "./pages/auth/EmailSent";
import ForgotPassword from "./pages/auth/ForgotPassword";
import ForgotPasswordEmail from "./pages/auth/ForgotPasswordEmail";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ValidateAccount from "./pages/auth/ValidateAccount";
import ClubMenu from "./pages/customers/ClubMenu";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import AdminLayout from "./pages/admin_panel/AdminLayout";

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
