import "./App.css";
import { BrowserRouter as Browser, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/login/LoginPage";
import RegisterPage from "./pages/register/RegisterPage";

function App() {
  return (
    <div>
      <Browser>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
        </Routes>
      </Browser>
    </div>
  );
}

export default App;
