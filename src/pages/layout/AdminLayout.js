import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { Header } from "./Header";
import { SideBar } from "./SideBar";

export const AdminLayout = ({ children }) => {
  return (
    <div>
      <main className="main">
        <Container fluid>
          <Row>
            <Col xs="3" className="side-bar bg-dark text-light">
              <div className="mt-5">
                <div className="text-center fw-bolder">Admin Menu</div>
              </div>
              <hr />
              <SideBar />
            </Col>
            <Col>{children}</Col>
          </Row>
        </Container>
      </main>
    </div>
  );
};
