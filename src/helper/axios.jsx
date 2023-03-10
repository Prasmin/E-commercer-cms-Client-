import axios from "axios";
const rootUrl = "http://localhost:8000/api/v1";
const adminApi = rootUrl + "/admin";

export const postNewAdmin = async (data) => {
  try {
    const res = await axios.post(adminApi + "/register", data);
    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const postEmailVerification = async (data) => {
  try {
    const res = await axios.post(adminApi + "/verify", data);
    return res.data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const loginAdmin = async (loginData) => {
  try {
    const { data } = await axios.post(adminApi + "/login", loginData);
    console.log(data);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const fetchOtpRequest = async (frmDt) => {
  try {
    const { data } = await axios.post(adminApi + "/request-otp", frmDt);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};

export const resetPassRequest = async (frmDt) => {
  try {
    const { data } = await axios.post(adminApi + "/reset-password", frmDt);
    return data;
  } catch (error) {
    return {
      status: "error",
      message: error.message,
    };
  }
};
