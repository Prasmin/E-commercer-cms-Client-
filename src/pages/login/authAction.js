import {
  loginAdmin,
  fetchNewAccessJWT,
  fetchAdminProfile,
} from "../../helper/axios";
import { requestSuccess } from "./authSlice";
import { toast } from "react-toastify";

export const loginAction = (formData) => async (dispatch) => {
  try {
    // dispatch(requestPending());

    const pendingResp = loginAdmin(formData);
    console.log(pendingResp);

    toast.promise(pendingResp, { pending: "Please wait ...." });

    const { status, message, token } = await pendingResp;
    toast[status](message);

    if (status === "success") {
      const { accessJWT, refreshJWT } = token;

      sessionStorage.setItem("accessJWT", accessJWT);
      localStorage.setItem("refreshJWT", refreshJWT);

      dispatch(getAdminProfile());
    }
  } catch (error) {
    return {
      status: "error",
      message: error.messsage,
    };
  }
};

const getAdminProfile = () => async (dispatch) => {
  const { status, user } = await fetchAdminProfile();

  status === "success nicely"
    ? dispatch(requestSuccess(user))
    : dispatch(requestSuccess({}));
};

export const autoLogin = () => async (dispatch) => {
  //if  accessJWT exist, get the user and mount in our redux store
  //check if accessJWT exist

  const accessJWT = sessionStorage.getItem("accessJWT");
  const refreshJWT = localStorage.getItem("refreshJWT");

  if (accessJWT) {
    dispatch(getAdminProfile());
  } else if (refreshJWT) {
    // call for new accessJWT

    const { status, accessJWT } = await fetchNewAccessJWT();
    if (status === "success") {
      sessionStorage.setItem("accessJWT", accessJWT);
      dispatch(getAdminProfile());
      return;
    }
    dispatch(forceLogout());
  } else {
    //force logout
    dispatch(forceLogout());
  }
};

const forceLogout = () => (dispatch) => {
  sessionStorage.removeItem("accessJWT");
  localStorage.removeItem("refreshJWT");
  dispatch(requestSuccess({}));
};
