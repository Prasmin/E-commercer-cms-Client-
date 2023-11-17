import React from "react";
// import { Button } from "react-bootstrap";

import { Button, Typography, Divider } from "@mui/material";
import { Link } from "react-router-dom";
import { ProductTable } from "../../components/Custome-table/ProductTable";
import AdminLayout from "../dashboard/Adminlayout";

export const Product = () => {
  return (
    <AdminLayout>
      <div className="product py-3">
        <Typography variant="h4">Product List</Typography>
      </div>
      <div className="text-end">
        <Link to="/products/new" style={{ textDecoration: "none" }}>
          <Button variant="contained" color="warning">
            <i className="fa-solid fa-plus"></i> Add New Product
          </Button>
        </Link>
      </div>
      <Divider />
      <ProductTable />
    </AdminLayout>
  );
};
