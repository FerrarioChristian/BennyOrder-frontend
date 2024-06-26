import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import RequireAuth from "./components/auth/RequireAuth";
import ManageTables from "./components/admin/ManageTables";
import Dashboard from "./components/admin/Dashboard";
import ManageProducts from "./components/admin/ManageProducts";
import EmailSent from "./pages/EmailSent";
import ForgotPassword from "./components/auth/ForgotPassword";
import ForgotPasswordEmail from "./components/auth/ForgotPasswordEmail";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import ValidateAccount from "./components/auth/ValidateAccount";
import ClubMenu from "./components/customers/ClubMenu";
import Homepage from "./pages/Homepage";
import NotFound from "./pages/NotFound";
import AdminLayout from "./components/admin/AdminLayout/AdminLayout";
import NewSession from "./components/customers/NewSession";
import ManageOrders from "./components/admin/ManageOrders";
import RequireNotAuth from "./components/auth/RequireNotAuth";
import Unauthorized from "./pages/Unauthorized";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />

        <Route element={<RequireNotAuth redirectTo="/admin/dashboard" />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>

        <Route path="/emailsent" element={<EmailSent />} />
        <Route
          path="/validateaccount/:confirmCode"
          element={<ValidateAccount />}
        />
        <Route path="/forgotpassword">
          <Route path="email" element={<ForgotPasswordEmail />} />
          <Route path=":confirmCode" element={<ForgotPassword />} />
        </Route>

        <Route path="/o/:tirt" element={<NewSession />} />
        <Route path="/clubmenu" element={<ClubMenu />} />
        <Route path="/unauthorized" element={<Unauthorized />} />

        <Route element={<RequireAuth redirectTo="/login" allowedRoles={[0]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="products" element={<ManageProducts />} />
            <Route path="assign_tables" element={<ManageTables />} />
            <Route path="orders" element={<ManageOrders />} />
          </Route>
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
