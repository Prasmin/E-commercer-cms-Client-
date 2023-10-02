import "./App.css";
import RegisterPage from "./pages/register/RegisterPage";

import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { NewAccVerify } from "./pages/verify/NewAccVerify";
import PaymentMethod from "./pages/payment-method/paymentMethod";
import Category from "./pages/category/Category";
import ResetPassword from "./pages/reset-password/ResetPassword";
import Product from "./pages/products/Product";
import { NewProduct } from "./pages/products/NewProduct";
import { PrivateRouter } from "./components/private-router/PrivateRouter";
import LoginPage from "./pages/login/LoginPage";
import HomePage from "./pages/layout/HomePage";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          {/* public router */}
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/verify" element={<NewAccVerify />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/register" element={<RegisterPage />} />

          {/* private router */}

          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<Category />} />
          <Route path="/payment-methods" element={<PaymentMethod />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/new" element={<NewProduct />} />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
