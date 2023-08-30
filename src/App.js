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
import Product from "./pages/products/Product";
import { NewProduct } from "./pages/products/NewProduct";
import { PrivateRouter } from "./components/private-router/PrivateRouter";
import HomePage from "./pages/layout/HomePage";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          {/* public router */}
          <Route path="/" element={<HomePage />} />
          <Route path="verify" element={<NewAccVerify />} />
          <Route path="reset-password" element={<ResetPassword />} />

          {/* private router */}

          <Route
            path="register"
            element={
              <PrivateRouter>
                <RegisterPage />
              </PrivateRouter>
            }
          />

          <Route
            path="dashboard"
            element={
              <PrivateRouter>
                <Dashboard />
              </PrivateRouter>
            }
          />
          <Route
            path="category"
            element={
              <PrivateRouter>
                <Category />
              </PrivateRouter>
            }
          />
          <Route
            path="payment-methods"
            element={
              <PrivateRouter>
                <PaymentMethod />
              </PrivateRouter>
            }
          />
          <Route
            path="products"
            element={
              <PrivateRouter>
                <Product />
              </PrivateRouter>
            }
          />
          <Route
            path="products/new"
            element={
              <PrivateRouter>
                <NewProduct />
              </PrivateRouter>
            }
          />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
