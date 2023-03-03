import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./pages/login/authSlice";
import catReducer from "./pages/category/categorySlice";
import systemReducer from "./system/systemSlice";
import payReducer from "./pages/payment-method/PaymentSlice";

const store = configureStore({
  reducer: {
    user: authReducer,
    category: catReducer,
    system: systemReducer,
    payment: payReducer,
  },
});

export default store;
