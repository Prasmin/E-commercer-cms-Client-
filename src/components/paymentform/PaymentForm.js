import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { postNewPayment } from "../../pages/payment-method/PaymentAction";

export const PaymentForm = () => {
  const dispatch = useDispatch();
  const [frmDt, setFrmDt] = useState({});

  const handleOnSubmit = (e) => {
    e.preventDefault();
    dispatch(postNewPayment(frmDt));
  };

  const handlOnChange = (e) => {
    const { name, value } = e.target;

    setFrmDt({
      ...frmDt,
      [name]: value,
    });
  };
  return (
    <div>
      <Form
        onSubmit={handleOnSubmit}
        className="text-center border p-4 rounded shadow-lg"
      >
        <Row>
          <Col>
            <Form.Control
              placeholder="Payment name"
              name="name"
              onChange={handlOnChange}
              required
            />
          </Col>
          <Col>
            <Form.Control
              placeholder="Payment description"
              name="description"
              onChange={handlOnChange}
              required
            />
          </Col>
          <Col>
            <Button
              type="submit"
              variant="warning"
              className="d-grid gap-2 "
              size="lg"
            >
              submit
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default PaymentForm;
