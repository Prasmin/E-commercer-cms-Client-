import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ProductTable } from "../../components/Custome-table/ProductTable";
import AdminLayout from "../dashboard/Adminlayout";

export const Product = () => {
  return (
    <AdminLayout>
      <div className="product py-3">
        <h3>Product mgmt.</h3>
      </div>
      <div className="text-end">
        <Link to="/products/new">
          <Button variant="warning">
            <i className="fa-solid fa-plus"></i> Add New Product
          </Button>
        </Link>
      </div>
      <hr />
      <ProductTable />
    </AdminLayout>
  );
};
