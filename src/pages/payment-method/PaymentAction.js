import { setPay } from "./PaymentSlice";

import { fetchPayment, postPayment } from "../../helper/axios";

import { toast } from "react-toastify";

export const fetchpay = () => async (dispatch) => {
  const { status, pay } = await fetchPayment();
  console.log(pay);

  toast === "success" && dispatch(setPay(pay));
};

export const postNewPayment = (data) => async (dispatch) => {
  const resultPending = postPayment(data);

  toast.promise(resultPending, {
    pending: "please wait .....",
  });

  const { status, message } = await resultPending;

  toast[status](message);

  status === "success" && dispatch(fetchpay());
};
