import React, { useEffect, useState, useRef } from "react";
import { Alert, Spinner } from "react-bootstrap";
import Footer from "../layout/Footer";
import { useSearchParams } from "react-router-dom";
import { Header } from "../layout/Header";
import { postEmailVerification } from "../../helper/axios";

export const NewAccVerify = () => {
  //show spinner first
  //
  const isFetch = useRef(true);
  let [searchParams] = useSearchParams();
  const [response, setResponse] = useState({});

  useEffect(() => {
    const emailVerificationCode = searchParams.get("c");
    const email = searchParams.get("email");

    //call the api

    callAPi({ email, emailVerificationCode });
  }, [searchParams]);

  const callAPi = async (obj) => {
    if (isFetch.current) {
      const response = await postEmailVerification(obj);
      setResponse(response);
    }
  };

  return (
    <>
      <Header />
      <div className="main p-5 d-flex justify-content-center align-items-center">
        {response?.message ? (
          <Alert variant={response.status === "success" ? "success" : "danger"}>
            {response?.message}
          </Alert>
        ) : (
          <Spinner animation="border" variant="primary" className="fs-1" />
        )}
      </div>
      <Footer />
    </>
  );
};
