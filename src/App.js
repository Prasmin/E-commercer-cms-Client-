import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import Dashboard from "./pages/dashboard/Dashboard";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { NewAccVerify } from "./pages/verify/NewAccVerify";
import PaymentMethod from "./pages/payment-method/paymentMethod";
import Category from "./pages/category/Category";
import ResetPassword from "./pages/reset-password/ResetPassword";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          {/* public router */}
          <Route path="/" element={<LoginPage />} />
          <Route path="verify" element={<NewAccVerify />} />
          <Route path="reset-password" element={<ResetPassword />} />

          {/* private router */}

          <Route path="register" element={<RegisterPage />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="category" element={<Category />} />
          <Route path="payment-methods" element={<PaymentMethod />} />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
