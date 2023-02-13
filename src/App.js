import "./App.css";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

import { ToastContainer } from "react-toastify";
import { NewAccVerify } from "./pages/verify/NewAccVerify";

function App() {
  return (
    <div className="">
      <Browser>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="verify" element={<NewAccVerify />} />
        </Routes>
      </Browser>
      <ToastContainer />
    </div>
  );
}

export default App;
