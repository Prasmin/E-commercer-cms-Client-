import { AddNewCatFrm } from "../../components/category-forms/AddNewCatFrm";
import { CategoryTable } from "../../components/category-forms/CategoryTable";
import AdminLayout from "../dashboard/Adminlayout";

export const Category = () => {
  return (
    <AdminLayout>
      <div className="mt-3">
        <h3>Category mgmt</h3>
        <hr />
      </div>

      <AddNewCatFrm />

      {/* table */}
      <CategoryTable />
    </AdminLayout>
  );
};
