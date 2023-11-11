import { AddNewCatFrm } from "../../components/category-forms/AddNewCatFrm";
import { CategoryTable } from "../../components/category-forms/CategoryTable";
import AdminLayout from "../dashboard/Adminlayout";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

export const Category = () => {
  return (
    <AdminLayout>
      <div className="mt-3">
        <Typography variant="h4" gutterBottom>
          Category Management
        </Typography>
        <hr />
      </div>

      <Grid container spacing={2}>
        <Grid item xs={12}>
          <AddNewCatFrm />
        </Grid>
        <Grid item xs={12}>
          <CategoryTable />
        </Grid>
      </Grid>
    </AdminLayout>
  );
};

//  <AdminLayout>
// <div className="mt-3">
// <h3>Category mgmt</h3>
// <hr />
// </div>

// <AddNewCatFrm />

// {/* table */}
// <CategoryTable />
// </AdminLayout>
